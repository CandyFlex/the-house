# Proposal — Genesis Conformance
**Date:** 2026-04-23
**Source:** Internal audit of `10_canon/house/` against CLAUDE.md spec
**Status:** Approved 2026-04-24

---

## Summary

Three structural issues affect all 8 entity files in `10_canon/house/`. This
proposal corrects all three: (A) malformed source citations, (B) missing
standard body sections (`## Details` and `## Relationships`), and (C) missing
namespaced `canon/` and `floor/` tags in frontmatter. No new entities.
No invented content. All existing tags and custom sections are preserved.

---

## New Entities

None.

---

## Updates to Existing Entities

### Issue A — Malformed source citations

Every file currently cites the source as:
```
- Genesis — [[2026-04-23-world-frame-the-house]]
```
Spec requires the full path form: `[[00_inbox/_processed/source-file]]`.

**Correct form for all 8 files:**
```
- [[00_inbox/_processed/2026-04-23-world-frame-the-house]]
```

---

### Issue B — Missing `## Details` and `## Relationships` sections

Spec mandates both sections in every entity file. All 8 files omit them.
The floor files also use `## Adjacency` (a custom section) which must be
preserved alongside the new standard sections.

---

### 1. `10_canon/house/the-house.md`

**Sources — replace:**
```
- Genesis — [[2026-04-23-world-frame-the-house]]
```
**with:**
```
- [[00_inbox/_processed/2026-04-23-world-frame-the-house]]
```

**Add after `## Load-Bearing Concepts`:**
```markdown
## Details
*(to be expanded)*

## Relationships
- [[floor-01-red]] — first floor; entrance threshold from outside
- [[floor-02-orange]] — second floor; sequential neighbor of Floor 1
- [[floor-03-yellow]] — third floor; sequential neighbor of Floor 2
- [[floor-04-green]] — fourth floor; center floor by count
- [[floor-05-blue]] — fifth floor; sequential neighbor of Floor 4
- [[floor-06-indigo]] — sixth floor; sequential neighbor of Floor 5
- [[floor-07-violet]] — seventh floor; the spectrum's terminus
- [[_concepts]] — defines load-bearing terms (Mesophysical, Scale, No Outside, Adjacency)
- [[_timelines]] — timeline structure
```

---

### 2. `10_canon/house/floor-01-red.md`

**Sources — replace:**
```
- Genesis — [[2026-04-23-world-frame-the-house]]
```
**with:**
```
- [[00_inbox/_processed/2026-04-23-world-frame-the-house]]
```

**Add after `## Adjacency`:**
```markdown
## Details
*(to be expanded)*

## Relationships
- [[the-house]] — parent; Floor 1 is the entrance to The House from outside
- [[floor-02-orange]] — adjacent above; the next floor in the sequential chain
```

---

### 3. `10_canon/house/floor-02-orange.md`

**Sources — replace:**
```
- Genesis — [[2026-04-23-world-frame-the-house]]
```
**with:**
```
- [[00_inbox/_processed/2026-04-23-world-frame-the-house]]
```

**Add after `## Adjacency`:**
```markdown
## Details
*(to be expanded)*

## Relationships
- [[the-house]] — parent; one of the seven floors
- [[floor-01-red]] — adjacent below; the entrance floor
- [[floor-03-yellow]] — adjacent above; the next floor in the sequential chain
```

---

### 4. `10_canon/house/floor-03-yellow.md`

**Sources — replace:**
```
- Genesis — [[2026-04-23-world-frame-the-house]]
```
**with:**
```
- [[00_inbox/_processed/2026-04-23-world-frame-the-house]]
```

**Add after `## Adjacency`:**
```markdown
## Details
*(to be expanded)*

## Relationships
- [[the-house]] — parent; one of the seven floors
- [[floor-02-orange]] — adjacent below; the previous floor in the sequential chain
- [[floor-04-green]] — adjacent above; the next floor in the sequential chain
```

---

### 5. `10_canon/house/floor-04-green.md`

**Sources — replace:**
```
- Genesis — [[2026-04-23-world-frame-the-house]]
```
**with:**
```
- [[00_inbox/_processed/2026-04-23-world-frame-the-house]]
```

**Add after `## Adjacency`:**
```markdown
## Details
*(to be expanded — note: established as center floor by count; whether "center" carries cosmological significance is an open question)*

## Relationships
- [[the-house]] — parent; one of the seven floors; center floor by count
- [[floor-03-yellow]] — adjacent below; the previous floor in the sequential chain
- [[floor-05-blue]] — adjacent above; the next floor in the sequential chain
```

---

### 6. `10_canon/house/floor-05-blue.md`

**Sources — replace:**
```
- Genesis — [[2026-04-23-world-frame-the-house]]
```
**with:**
```
- [[00_inbox/_processed/2026-04-23-world-frame-the-house]]
```

**Add after `## Adjacency`:**
```markdown
## Details
*(to be expanded)*

## Relationships
- [[the-house]] — parent; one of the seven floors
- [[floor-04-green]] — adjacent below; the previous floor in the sequential chain
- [[floor-06-indigo]] — adjacent above; the next floor in the sequential chain
```

---

### 7. `10_canon/house/floor-06-indigo.md`

**Sources — replace:**
```
- Genesis — [[2026-04-23-world-frame-the-house]]
```
**with:**
```
- [[00_inbox/_processed/2026-04-23-world-frame-the-house]]
```

**Add after `## Adjacency`:**
```markdown
## Details
*(to be expanded)*

## Relationships
- [[the-house]] — parent; one of the seven floors
- [[floor-05-blue]] — adjacent below; the previous floor in the sequential chain
- [[floor-07-violet]] — adjacent above; the next floor in the sequential chain
```

---

### 8. `10_canon/house/floor-07-violet.md`

**Sources — replace:**
```
- Genesis — [[2026-04-23-world-frame-the-house]]
```
**with:**
```
- [[00_inbox/_processed/2026-04-23-world-frame-the-house]]
```

**Add after `## Adjacency`:**
```markdown
## Details
*(to be expanded)*

## Relationships
- [[the-house]] — parent; one of the seven floors
- [[floor-06-indigo]] — adjacent below; the previous floor in the sequential chain
- (No floor above — the spectrum ends here)
```

---

---

### Issue C — Missing floor/type tags

All 8 files have existing tags (`[floor, foundational]` or `[foundational]`) but
lack namespaced `canon/` and `floor/` tags required for consistent filtering.
The new tags are **appended** — existing tags are preserved.

#### 1. `10_canon/house/the-house.md`

```diff
-tags: [foundational]
+tags: [foundational, canon/cosmology, floor/all]
```

#### 2. `10_canon/house/floor-01-red.md`

```diff
-tags: [floor, foundational]
+tags: [floor, foundational, canon/place, floor/1]
```

#### 3. `10_canon/house/floor-02-orange.md`

```diff
-tags: [floor, foundational]
+tags: [floor, foundational, canon/place, floor/2]
```

#### 4. `10_canon/house/floor-03-yellow.md`

```diff
-tags: [floor, foundational]
+tags: [floor, foundational, canon/place, floor/3]
```

#### 5. `10_canon/house/floor-04-green.md`

```diff
-tags: [floor, foundational]
+tags: [floor, foundational, canon/place, floor/4]
```

#### 6. `10_canon/house/floor-05-blue.md`

```diff
-tags: [floor, foundational]
+tags: [floor, foundational, canon/place, floor/5]
```

#### 7. `10_canon/house/floor-06-indigo.md`

```diff
-tags: [floor, foundational]
+tags: [floor, foundational, canon/place, floor/6]
```

#### 8. `10_canon/house/floor-07-violet.md`

```diff
-tags: [floor, foundational]
+tags: [floor, foundational, canon/place, floor/7]
```

---

## Floor Inferences

No new floor inferences required. This is an internal conformance pass against
existing canon. All floor assignments were established in the genesis document
and remain unchanged.

| File | Floor | Basis |
|------|-------|-------|
| the-house.md | [all] | Established canon — The House spans all floors |
| floor-01-red.md | [1] | Explicit — Red = Floor 1 |
| floor-02-orange.md | [2] | Explicit — Orange = Floor 2 |
| floor-03-yellow.md | [3] | Explicit — Yellow = Floor 3 |
| floor-04-green.md | [4] | Explicit — Green = Floor 4 |
| floor-05-blue.md | [5] | Explicit — Blue = Floor 5 |
| floor-06-indigo.md | [6] | Explicit — Indigo = Floor 6 |
| floor-07-violet.md | [7] | Explicit — Violet = Floor 7 |

---

## Contradictions Flagged

None.

---

## Ambiguities Needing Your Call

1. **Placement of `## Details` and `## Relationships` relative to custom sections.** This proposal places both after `## Adjacency` (floor files) and after `## Load-Bearing Concepts` (the-house.md), keeping custom sections intact and adding spec sections before `## Open Questions`. If you prefer a different order (e.g., Details immediately after Established, before the custom sections), say so and I'll revise.

2. **Floor 4's "center" status.** The file notes Floor 4 is "the center floor by count." The open question asks whether this carries cosmological significance given the adjacency-not-hierarchy rule. No position taken here — flagging for your call when thematic development begins.

---

## Noted but Not in This Proposal

`10_canon/_timelines.md` is currently near-placeholder. It needs real content whenever dated in-world events appear. Not a conformance issue now — flagging so it's on your radar when the first dated event is canonized.
