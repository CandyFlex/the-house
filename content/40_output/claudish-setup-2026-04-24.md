---
type: setup
created: 2026-04-24
tool: claudish
---

# Claudish — BYOK Multi-AI Setup

Wraps Claude Code to route through OpenRouter/other providers. Swap models per profile without leaving the CC interface.

## Status

- Installed via `npm install -g claudish`
- Config: `~/.claudish/config.json` (4 profiles) + `.claudish.json` at vault root (pins `worldbuilding` profile)
- **Not yet active** — `OPENROUTER_API_KEY` env var not set

## Activate it

```bash
# 1. Set key (bash)
echo 'export OPENROUTER_API_KEY=sk-or-v1-...' >> ~/.bashrc && source ~/.bashrc

# 2. Verify
claudish --version

# 3. Launch
cd "/c/Users/Jarre/Desktop/The House" && claudish
```

Get key at [openrouter.ai/keys](https://openrouter.ai/keys).

## Profiles

| Profile | Use for | opus / sonnet / haiku |
|---|---|---|
| `worldbuilding` (default) | normal vault work | Gemini 3.1 Pro / MiniMax / Qwen 3.5 |
| `reasoning` | hard canonical calls | GPT-5.2 / Gemini 3.1 / MiniMax |
| `cheap` | bulk ingest | MiniMax everywhere |
| `vision` | maps, images | Kimi K2.5 / Gemini 3.1 / MiniMax |

Switch: `claudish --profile cheap`

## Caveats

- This current session (Anthropic Opus 4.7 direct) is unaffected. Claudish only activates on the next `claudish` launch.
- Weaker models may loosen canon discipline. Use `cheap`/`vision` for extraction, not approvals.
- Edit `~/.claudish/config.json` to add profiles or swap models.

## Uninstall

```bash
npm uninstall -g claudish
rm -rf ~/.claudish "/c/Users/Jarre/Desktop/The House/.claudish.json"
```
