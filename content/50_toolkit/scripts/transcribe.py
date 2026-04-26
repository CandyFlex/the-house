"""
Local audio/video transcription for The House inbox.

Usage:
    py -3.10 transcribe.py <input_file> [--model base|small|medium|large-v3] [--lang en]

Outputs a markdown transcript next to the input file with frontmatter
ready for the three-pass ingest pipeline. Audio is NOT moved by this
script - the orchestrator moves it to 00_inbox/_media/ after ingestion.

This is a pure speech-to-text pass. NO vocabulary biasing or canon
priming — the transcript reflects exactly what was said. Canon-context
interpretation (e.g. mesophysical vs metaphysical) happens during the
three-pass ingest in 20_drafts/extractions/, not here.

Models (CPU speed approx, English):
    tiny      39MB   ~10x realtime   rough draft
    base      74MB   ~5x realtime    quick scan
    small     244MB  ~2x realtime    better disambiguation
    medium    769MB  ~1x realtime    high accuracy (DEFAULT for canon material)
    large-v3  1.5GB  ~0.5x realtime  best, slow
"""
import argparse
import datetime
import os
import sys
import sysconfig
from pathlib import Path


def _register_cuda_dlls() -> None:
    """On Windows, NVIDIA pip wheels drop DLLs in site-packages/nvidia/*/bin.
    CTranslate2's native C++ uses LoadLibrary which searches PATH, so we
    prepend bin dirs to PATH. We also call add_dll_directory for any
    Python-side loads."""
    if sys.platform != "win32":
        return
    site = Path(sysconfig.get_paths()["purelib"]) / "nvidia"
    if not site.exists():
        return
    for sub in site.iterdir():
        bin_dir = sub / "bin"
        if bin_dir.is_dir():
            os.add_dll_directory(str(bin_dir))
            os.environ["PATH"] = str(bin_dir) + os.pathsep + os.environ.get("PATH", "")


_register_cuda_dlls()

from faster_whisper import WhisperModel


def load_model(model_size: str, device: str) -> tuple[WhisperModel, str, str]:
    """Try the requested device, fall back to CPU on failure."""
    if device == "auto":
        try:
            m = WhisperModel(model_size, device="cuda", compute_type="float16")
            return m, "cuda", "float16"
        except Exception as e:
            print(f"[warn] CUDA unavailable ({type(e).__name__}: {e}); falling back to CPU")
            return WhisperModel(model_size, device="cpu", compute_type="int8"), "cpu", "int8"
    if device == "cuda":
        return WhisperModel(model_size, device="cuda", compute_type="float16"), "cuda", "float16"
    return WhisperModel(model_size, device="cpu", compute_type="int8"), "cpu", "int8"


def transcribe(input_path: Path, model_size: str, language: str | None, device: str) -> Path:
    if not input_path.exists():
        sys.exit(f"Input not found: {input_path}")

    output_path = input_path.with_name(f"{input_path.stem}-transcript.md")
    print(f"[load] model={model_size} device={device} (downloads on first run)")
    model, used_device, used_compute = load_model(model_size, device)
    print(f"[ok]   running on {used_device}/{used_compute}")

    print(f"[run]  {input_path.name}")
    segments, info = model.transcribe(
        str(input_path),
        language=language,
        vad_filter=True,
        beam_size=5,
        best_of=5,
        condition_on_previous_text=True,
    )
    print(f"[info] detected language={info.language} ({info.language_probability:.2f}), duration={info.duration:.0f}s")

    today = datetime.date.today().isoformat()
    frontmatter = (
        "---\n"
        f"source_type: voice-log\n"
        f"source_audio: {input_path.name}\n"
        f"transcribed: {today}\n"
        f"model: faster-whisper-{model_size} ({used_device}/{used_compute})\n"
        f"language: {info.language}\n"
        f"duration_seconds: {info.duration:.0f}\n"
        f"status: untriaged\n"
        "---\n\n"
        f"# Transcript: {input_path.stem}\n\n"
    )

    with output_path.open("w", encoding="utf-8") as f:
        f.write(frontmatter)
        for seg in segments:
            ts = f"[{int(seg.start // 60):02d}:{int(seg.start % 60):02d}]"
            line = f"{ts} {seg.text.strip()}\n"
            f.write(line)
            print(line, end="", flush=True)

    print(f"\n[done] {output_path}")
    return output_path


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("input")
    ap.add_argument("--model", default="medium", choices=["tiny", "base", "small", "medium", "large-v3"])
    ap.add_argument("--lang", default=None, help="ISO code, e.g. 'en'. Auto-detect if omitted.")
    ap.add_argument("--device", default="auto", choices=["auto", "cuda", "cpu"], help="auto = try CUDA, fall back to CPU")
    args = ap.parse_args()
    transcribe(Path(args.input), args.model, args.lang, args.device)
