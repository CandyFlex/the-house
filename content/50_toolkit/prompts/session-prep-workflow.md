---
title: Session Prep Workflow
type: workflow
---

# Session Prep Workflow

Run this before every session. Takes 15-20 minutes with Claude.

---

## Step 1 — Pre-Session Questionnaire

Answer these. Claude uses them to generate the session prep doc.

1. **Date and session number?**
2. **Where did we leave off?** (Story state, physical location, emotional beat)
3. **What do you want this session to establish?** (One thing the players learn or feel)
4. **What's the main obstacle or conflict for tonight?**
5. **Which NPCs need to appear?**
6. **What's the wildcard?** (One surprise or reveal you want to deploy)
7. **Which long-game threads need to be seeded?**
8. **Any mechanics that need to be explained or introduced?**

Tell Claude: *"Run session prep for [date]"* — paste your answers and it generates the full doc.

---

## Step 2 — The Prep Doc

Claude outputs `40_output/sessions/session-prep-YYYY-MM-DD.md` with:

- **Where We Left Off** — story state entering this session
- **Opening Scene** — read-aloud for session start
- **The Stage** — active elements and their current state
- **Room/Location Reference** — read-aloud + DM notes for each location
- **NPCs On Deck** — voice, motivation, what they know, arc trigger
- **Variable Areas** — threads the players could pull, with risk/payoff table
- **Session Hooks** — specific deployable moments
- **The Long Game** — what this session seeds for future sessions
- **Post-Session Notes** — blank, fill during/after
- **Next Session Questionnaire** — fill after, feeds next session's prep

The doc is on Quartz. Open it on your tablet during the session.

---

## Step 3 — During the Session

- Keep the prep doc open on the tablet
- Jot anything significant in **Post-Session Notes** at the bottom
- If something new gets established (new NPC, location, mechanic), voice-note it for the next session's ingest

---

## Step 4 — Post-Session (same night or next day)

Answer the **Next Session Questionnaire** at the bottom of the prep doc.

Tell Claude: *"Post-session debrief [date]"* — paste your answers. Claude will:

- Write a canon log entry for anything that got established
- Flag what needs to be canonized
- Generate the next session's prep doc stub
- Surface any mechanics that need building before next session

---

## Naming Convention

`40_output/sessions/session-prep-YYYY-MM-DD.md`

One file per session. The post-session answers live in the same file.
