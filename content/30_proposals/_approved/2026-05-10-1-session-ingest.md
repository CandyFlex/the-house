---
title: "1-transcript Ingestion — Raw Session (Caesar's Fall, Floor 1 Aftermath)"
status: pending
created: 2026-05-10
source: "[[00_inbox/1-transcript]]"
proposal_type: new_entities + updates
---

# Proposal: 1-transcript Ingestion

## Source
`00_inbox/1-transcript.md` — Raw ~3.3-hour TTRPG session recording. This is the **source session** for the previously-processed `untitled-transcript` recap. Contains detailed mechanical/location descriptions the recap condensed.

## Reconciliation Note
The `untitled-transcript` (24-min recap) already extracted most campaign-narrative entities. This proposal covers what the recap omitted or condensed: new locations, detailed mechanics, faction positioning, and corrected values.

---

## New Entities

### 1. The Transformation School (place)

**Reasoning**: Entirely new. Caesar's castle morphed into IO's stronghold. Not in canon.

**File**: `10_canon/places/the-transformation-school.md`

```
---
entity_type: place
status: canon
timelines: [prime]
visibility: private
floor: 1
aliases: [IO's Stronghold, Black Obsidian School, the transformed castle]
tags: [canon/place, floor/1]
first_source: "[[00_inbox/_processed/1-transcript]]"
last_updated: 2026-05-10
---

# The Transformation School

## Summary
Caesar's castle, metamorphically transformed upon IO's takeover of Floor 1's mantle. Now a dark obsidian magic school with six unequal towers and red energy veins. RC's base and IO's seat of power.

## Established
- **Origin**: Caesar's castle reshaped during the transformation sequence. An "explosion of manifestation" caused by the mantle transfer — everything morphed from Caesar's tower into its current form.
- **Architecture**: 6-tower black obsidian magic school. Red energy veins pulse through the structure. Baldurian-style mixed with high fantasy geometry. Gothic vaulted ceilings.
- **Gate system**: Red energy diamond-shaped gates surrounding the school. Hollow diamond form with red translucent barrier. Retracts for registered individuals (via IO's book). Burns unregistered entrants alive. Registration records name, origin, background notes, possible lost knowledge. Constituent/guest access levels.

### Interior Locations

**Madridian Hall** — Main hall. RC's base of operations. Vaulted ceilings with ribbed gothic curves. Red and blue energy lightning. Minimal decoration. RC has a 3-foot stool here.

**Administration Hall** — Connected to Madridian Hall. Long obsidian Roman Gothic filing systems. Stores records of everything/everyone who ever passed through Floor 1. Not fully operational due to power constraints. Only major events auto-stored. RC can pull physical paperwork.

**Watch Stations** — On each tower, accessible via spiral stairs. Reinforced multi-layered magical lenses (Caesar's aperture magic). Can see to the edge of Floor 1's spatial limits. One station can see Outpost July on clear view.

**Chamber of Appointment** — Circular room with glyph. Null-magic zone — almost all magic levels void here. Anti-scrying. Connected to gallery.

**Gallery / Armory** — 300-foot hall. Recessed vaulted alcoves with magical sentient barriers (activate within 10 feet). Currently empty. Can store items with magical locks.

**Practice Courts** — Green scaped courts. Double courts for ball games and combat. Nullification magic. On/off magical protection toggle.

**The Descent** — Dark black obsidian door beneath the school. Spiral stairs down 50-60 ft to multiple black box sites. The Descent itself: an amorphic pool of residue left by Caesar — hatred, awful memories, the remainder of every person who died on Floor 1. Extremely dangerous. RC refuses to go near it. Described as "hatred-slash-portal to a world of awful memories." Party discussed sealing it.

**Tombs of Travel (Undercroft)** — Fast-travel teleportation arches. Caesar had two built: north and east. ~1 hour subjective travel for hours/days distance. RC can install one in the undercroft. North gate exits at edge of northern circumference.

**Dormitories** — Obsidian rooms with drapes and fabrics (only rooms with soft furnishings). Low amber light. Presence-based lights. IO gets headmaster's suite — furnished, four-poster bed, window overlooking eternal night.

## Relationships
- [[rc-the-rock]] — his base; tied to this location and IO
- [[the-descent]] — located beneath the school
- [[floor-01-red]] — located on this floor
- [[caesar]] — the castle was his before the transformation
- [[outpost-july]] — watch stations can see it

## Open Questions
- Are there additional chambers not yet discovered?
- Can the gate system's access levels be expanded?
- What is the full extent of the Descent — can it be explored or only sealed?
- What other functions does the Chamber of Appointment serve?

## Key Takeaways
- The center of IO's power on Floor 1. Fully fortified school-city.
- Contains Caesar's accumulated residue in its depths (the Descent).
- RC lives here now.

## Sources
- [[00_inbox/_processed/1-transcript]]
```

### 2. The Descent (place)

**Reasoning**: New distinct location beneath the school. Should also exist as a standalone entity for reference and possible future dungeon.

**File**: `10_canon/places/the-descent.md`

```
---
entity_type: place
status: canon
timelines: [prime]
visibility: spoiler
floor: 1
aliases: [Caesar's Residue Pool, The Hatred]
tags: [canon/place, floor/1]
first_source: "[[00_inbox/_processed/1-transcript]]"
last_updated: 2026-05-10
---

# The Descent

## Summary
A pool of amorphic residue beneath the Transformation School — the accumulated hatred, awful memories, and remainder of Caesar and every being who ever died on Floor 1. Extremely dangerous. RC refuses to approach it.

## Established
- Located beneath the Transformation School via a black obsidian door and 50-60 ft spiral staircase.
- Preceded by multiple black box sites (undefined).
- The Descent itself: an amorphic pool of everything left behind by Caesar and every being who died on Floor 1.
- Contains: hatred, awful memories, residue, the "remainder" of every person who ever died on this floor.
- Described as a "hatred-slash-portal to a world of awful memories."
- RC refuses to go near it — considers it extremely dangerous.
- Party discussed sealing it off.

## Relationships
- [[the-transformation-school]] — located beneath it
- [[caesar]] — principal source of the residue
- [[floor-01-red]] — on Floor 1; accumulates its dead
- [[rc-the-rock]] — refuses to approach it

## Open Questions
- Is the Descent a physical pool, a dimensional portal, or both?
- Can it be sealed, cleansed, or harnessed?
- Does it grow as more beings die on Floor 1?
- What are the "black box sites" that precede it?
- Is there anything alive within it?

## Key Takeaways
- The dark secret of Floor 1 beneath the school.
- Caesar's accumulated cruelty + every death on the floor.
- Do not enter.

## Sources
- [[00_inbox/_processed/1-transcript]]
```

### 3. The Bazaar (place)

**Reasoning**: New location. Time-dilated marketplace accessible from school grounds.

**File**: `10_canon/places/the-bazaar.md`

```
---
entity_type: place
status: canon
timelines: [prime]
visibility: private
floor: 1
aliases: [The Time Market]
tags: [canon/place, floor/1]
first_source: "[[00_inbox/_processed/1-transcript]]"
last_updated: 2026-05-10
---

# The Bazaar

## Summary
A marketplace accessible from the Transformation School grounds. Has severe time dilation — approximately 15 minutes outside equates to up to 16+ hours inside. The Smith operates a weaponsmithing business here.

## Established
- Located on Floor 1, accessible from the school grounds.
- Severe time dilation: ~15 min external = up to 16+ hours internal.
- Contains at least one weaponsmith (the Smith).
- Ball may be hiding here (unconfirmed).

## Relationships
- [[the-transformation-school]] — accessible from its grounds
- [[the-smith]] — operates here
- [[ball]] — may be hiding here (speculative)

## Open Questions
- What other merchants or entities operate in the Bazaar?
- What causes the time dilation?
- Is the Bazaar a fixed location or does it shift?
- Are there any rules or authorities governing the Bazaar?

## Key Takeaways
- Time-dilated market accessible from the school.
- The Smith is the only known vendor.

## Sources
- [[00_inbox/_processed/1-transcript]]
```

### 4. The Smith (person)

**Reasoning**: New NPC. Weaponsmith working in the Bazaar.

**File**: `10_canon/people/the-smith.md`

```
---
entity_type: person
status: canon
timelines: [prime]
visibility: private
origin_floor: 1
current_floor: 1
significant_floors: [1]
aliases: [Bazaar Smith]
tags: [canon/person, floor/1]
first_source: "[[00_inbox/_processed/1-transcript]]"
last_updated: 2026-05-10
---

# The Smith

## Summary
A weaponsmith operating in the Bazaar on Floor 1. Works on weapon upgrades for an "exquisite" (100K soul stones). Currently working on upgrading a player's returning dagger.

## Established
- Located in the Bazaar (time-dilated marketplace).
- Payment: 1 exquisite soul gem (~100K) per upgrade job.
- Offerings: damage upgrades, thirst/second-attack properties, or combo upgrades.
- Currently has a player's returning dagger for upgrade.
- Has his own space/time within the Bazaar.

## Relationships
- [[the-bazaar]] — operates here
- [[soul-stone-currency]] — paid in exquisite soul gems

## Open Questions
- What is the Smith's origin — is he native to Floor 1 or an outside entity?
- How long has he been in the Bazaar?
- Does he only work on weapons, or other items too?
- What is the full extent of his upgrade capabilities?

## Key Takeaways
- The only known vendor in the Bazaar.
- Accepts weapon upgrade commissions for 100K soul stones.

## Sources
- [[00_inbox/_processed/1-transcript]]
```

---

## Updates to Existing Entities

### 1. RC the Rock (person)
**Additions:**
- Fragment of the Altar of Knowledge — the altar is also described as a "statue of knowledge" that was broken. RC is one of its remaining stones.
- Pre-exists the Architect's conception of the world in this area (primordial).
- Was omnipresent via rock senses across all sentient creatures on Floor 1 before the shackling.
- **The Wight sent him** — instructed by the Wight to meet/teach IO.
- Rock magic manifests as a white glow (stone manifestation, viewing panels, furniture transformation, door locking).
- Tied to IO: if she dies, he crumbles.
- **Rule**: "RC" does NOT stand for "remote control." Asking what it stands for is the only rule of interacting with him. He will not answer.
- Demeanor: tumble-able; appears to move like a normal rock but can be anywhere if you look away; stays within sight if tracked but still moves impossibly.

**Canon conflicts**: None. All new detail not in existing `rc-the-rock.md`.

### 2. Caesar (person)
**Additions:**
- Was once a "long wizard of magic and mischief" who corrupted himself into an "android/monster of machine."
- His 12 sons/heralds pulled ~200M soul stones per day through the Outpost December system.
- His old wand (First Mark of Cruelty) is explicitly "pure" magic, not cursed — but power corrupts.

**Canon conflicts**: Reaffirms existing descriptions. No contradictions.

### 3. Woe (person)
**Additions:**
- Called herself "god of magic" in Caesar's world (superficially made but powerful).
- Vampires worshipped her — she enabled them a day/night cycle (walking during the day at least one festival night).
- Physically: "largest fucking hands that would reach down and eat people" — ritualistic sacrifice figure.
- **Dying vision/final warnings:**
  - West: Mr. Fine gathering forces with a "flurry of enemies" — may have an originator ally.
  - Skies: Warlocks flying, rich with soul stones, hidden in moon's shadow.
  - South: Witches, weaker overall but with masterful items.
  - East: Dark green hue around the old Floor 1 (pre-Caesar) dark castle area — the merged pocket realm territory.
  - "The old claim": the same merged pocket realm — the old Floor 1 rejoining current reality.

**Canon conflicts**: None. Vision positioning is new detail.

### 4. Mr. Fine (person) — renamed from "Mister Nice"
**Corrections/Additions:**
- **Name correction**: Mr. Fine, NOT "Mister Nice." The transcript used "Mr. Fine" — my prior "Mister Nice" was a transcription artifact. Update all canon references.
- **Value correction**: ~500 million soul stones, not ~1B.
- Was Caesar's **first rival** — had grown powerful enough to challenge Caesar directly, likely would have killed him before the party intervened.
- Has a weapon with a large soul stone (worth ~100K) embedded.
- Moon Goddess vision confirms: gathering forces in west, may have originator ally.

**Canon conflicts**: 
- Existing canon says ~500M. One transcript reference says ~1B. Flagged in Ambiguities.
- Existing canon: "looking for the next successor." New detail: was going to kill Caesar himself (active rival, not observer).

### 5. Nero (person)
**Additions:**
- Malgus's registration connected to Nero showed as **encrypted green text in a different language** (Roonhink) — RC could NOT read it.
- RC strongly advised: do NOT give any Clock Hand position to anyone connected to Nero.
- RC showed visible alarm when detecting the connection ("oh my god").
- Also connected to Alex (party member).
- Nero may be actively seeking the party now that the transformation has occurred.
- The green encrypted text suggests Nero has means of hiding information even from the Wise Rocks' surveillance.

**Canon conflicts**: None. All new.

### 6. Ball (person)
**Additions:**
- RC confirmed Ball is alive — RC can detect this (he's alive "for sure").
- RC considers him one of the largest liabilities the party could have.
- Ball once tried to loot RC's own eye.
- Deliberately avoids areas where RC can perceive — can "get into places RC cannot see."
- Possibly in the Bazaar (time-dilated space where even RC's surveillance is limited).

**Canon conflicts**: None. New detail expands existing stub.

### 7. Valus (person)
**Corrections/Additions:**
- **Was brought in by the Architect, NOT Caesar.** He ran Outpost April (entry point — hospitality). He never ran Outpost July.
- **Existing canon error**: Current canon places Valus at Outpost July. This is incorrect — fix.
- Was selected by the Architect specifically for his hospitality (retired casino/bar owner background).
- He served "elder children" and "first children" of the House.
- RC observed everything Valus did from outside but never personally interacted with him.
- RC confirmed: "one of the safest bets of people that would be great on your side" — but likely NOT around anymore.
- Confirmed as the party's potential greatest ally — now vanished.

### 8. Outpost December (place)
**Additions:**
- Located at "2 o'clock" position on Floor 1's circular geography.
- Caesar's 12 sons/heralds each fed into the reverse osmosis system, contributing to the ~200M/day income.

**Canon conflicts**: None. New location detail.

### 9. Outpost System (mechanic)
**Additions:**
- Only 4-5 of the original 12 outposts remain (was "unknown" in canon). Caesar destroyed the rest.
- Outpost April was a surviving outpost — the entry point of the House, staffed by Valus.

**Conflict check**: Current canon says "survivor count: unknown." Now confirmed: 4-5. Outpost April joins July, December, August as confirmed survivors.

### 10. Soul Stone Currency (mechanic)
**Additions:**
- Tier clarity: Squizzard (Exquisite) ~100K. Additional tiers: Expa (approx 10x squizzard = 1M), Exna Soul Gym (approx 10M).
- Combined factions (witches + warlocks): ~150-250M soul stones total.
- Mr. Fine estimated worth: ~500M soul stones.

### 11. Temporal Hierarchy (mechanic)
**Additions:**
- Hour Space detailed mechanics: x10 speed zone — the Hour gets 10 combat turns before anyone else acts. One minute real-time = 10 turns for Hour bearer.
- Hand weightings: Hour = ~50% of floor mantle, Minute = ~25-40%, Second = ~10%.
- The ritual: key placed on sternum, time stops, whispers of past, key absorbs into arm as black line/tattoo, weapon shape emerges from palm.
- Gideon's outcome: bronze 8-10 ft whip/spear with pulsing dualistic end. "High frequency connection" — one of best possible results. Weapon will grow with him.
- Ritual doubled stabilization timer from ~8 hours to ~16 hours.
- Selection criteria: choose people of merit and power. Innate ability power > item-derived power. Relinquish souls = standardization cost.
- Originators are the ideal hand candidates (Caesar had multiple).

**Canon conflicts**: None. All new mechanical detail expanding existing temporal-hierarchy.md.

### 12. Caesar's Spell Focus (item)
**Additions:**
- Functions as: spell focus (sorcerer/wizard), affinity weapon for Floor 1's claim, magnifying glass for floor power.
- Described as "pure" magic (not cursed) — but carries a "power corrupts" warning.
- Wand appearance: long silver, metamorphic, looks like liquid holding shape — resembles the legs of Floor 1's pulsing veins.
- Gives the wielder synchronization to the floor mantle.

**Canon conflicts**: None. New functional detail.

### 13. Floor 1 — Red (place)
**Additions:**
- The Transformation School is now the central seat of power. Add to Relationships.
- The Descent is a key location beneath it.
- The Bazaar accessible from the school grounds.
- Outpost April exists as a survivor (entry point).
- The soul storm described as the source of cruelty on Floor 1. Caesar never fully controlled it — it grew beyond him.
- New faction detail: Storm entities (demons, morphing shades, high rack demons) are actively hostile types roaming the storm.
- New floor-location positioning: "2 o'clock" reference for Outpost December suggests a clock-face geography.

### 14. Witches (faction)
**Additions:**
- Located: south (from Moon Goddess vision).
- Weaker than warlocks overall, but possess a few "masterful items" rivaling the warlocks' best.
- RC hostility rating: Demons (most) > Witches > Warlocks (least).

**Canon conflicts**: None. All new.

### 15. Warlocks of the Skies (faction)
**Additions:**
- Located: flying in the sky/above (from Moon Goddess vision).
- Originally white-clothed magic users who did "pinball magic" — later became more tribalistic.
- Least hostile of the hostile factions (per RC).
- RC hostility rating: Demons > Witches > Warlocks.

**Canon conflicts**: None. All new.

### 16. The WIGHT (faction)
**Additions:**
- Instructed RC to meet and teach IO — the Wight sent RC.

**Canon conflicts**: Expands on WIGHT's role. Current canon only has "hunts those who violate House order" — this reveals a more nuanced function: sentient agent of the House that can also delegate/instruct.

---

## Ambiguities — Resolved

1. ~~**Valus location conflict**~~ → **Resolved**: Valus was brought in by the Architect. He ran **Outpost April** (entry point/hospitality). He **never** ran Outpost July. Existing canon that ties him to July is a mistake — correct it.

2. ~~**Mister Nice value**~~ → **Resolved**: 500 million soul stones. The ~1B reference was wrong.

3. ~~**"Mr. Fine" vs "Mister Nice"**~~ → **Resolved**: The canonical name is **Mr. Fine**. "Mister Nice" was my transcription error. Correct all references.

4. ~~**Nero's unknown registrant**~~ → **Resolved**: The book is part of a **ledger system** — books that tie to the House in certain ways, similar to how IO has a ledger. Alex is connected to Malgus through pre-session interactions. Nero's connection appears through this ledger system.

5. ~~**Dark green entity east**~~ → **Resolved**: The dark green hue surrounds the **old Floor 1 (pre-Caesar) dark castle area** that merged in from the displaced pocket realm after Caesar's death. This is the merged pocket realm territory, not a separate entity.

6. ~~**"The old claim"**~~ → **Resolved**: Same as the merged pocket realm area (#5). The old claim and the dark green area are the same thing — the old Floor 1 pocket realm that rejoined the current floor.

7. ~~**Mother originator**~~ → **Resolved**: **Mother** is a powerful being originally from Floor 5 (Blue, aquatic). She went to Floor 7 to operate as a mogul/arena runner. The party encountered her on Floor 7, tried to win money from her arena, and she tried to kill them multiple times. She is likely coming after them now.

---

## Floor Inferences
- All content solidly Floor 1 (Red). School, Descent, Bazaar, outposts all on/serving Floor 1.
- Warlocks in the sky — could be Floor 1 sky or a higher floor; color context suggests Floor 1 domain.
- Witches to the south — likely Floor 1 geographic south, not a separate floor.

---

## Back-References Required

When approved, the following back-reference links must be added to existing entities:
- [[the-transformation-school]] → [[rc-the-rock]], [[caesar]], [[floor-01-red]], [[outpost-july]]
- [[the-descent]] → [[the-transformation-school]], [[caesar]], [[floor-01-red]], [[rc-the-rock]]
- [[the-bazaar]] → [[the-transformation-school]], [[the-smith]]
- [[the-smith]] → [[the-bazaar]], [[soul-stone-currency]]
- [[rc-the-rock]] → [[the-wight]] (instructed by), [[the-transformation-school]] (based at)
- [[woe]] → [[mr-fine]] (vision), [[witches]] (vision), [[warlocks-of-the-skies]] (vision)
- [[mr-fine]] → [[woe]] (vision target)
- [[floor-01-red]] → [[the-transformation-school]], [[the-descent]], [[the-bazaar]], [[storm-entities]]
- [[outpost-july]] → [[valus]] (remove association — Valus never ran July)