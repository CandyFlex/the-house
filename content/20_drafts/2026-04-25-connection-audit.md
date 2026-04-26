---
date: 2026-04-25
purpose: Bidirectional link audit for pending Red1 proposals
applies_to: [2026-04-25-red1, 2026-04-25-red1-interview, 2026-04-25-red1-places]
status: planning — used to drive the proposal fix-up edits
---

# Connection Audit — Red1 Proposal Set

Working document. Maps every entity to its complete bidirectional Relationships set. Used to fix the three pending proposals before approval.

After approval, this audit is stale — the source of truth becomes the canon files themselves.

## Entity Roster

After all three proposals merge, the following entities will exist in `10_canon/`:

**Cosmology / House:** the-house, floor-01-red, floor-02-orange, floor-03-yellow, floor-04-green, floor-05-blue, floor-06-indigo, floor-07-violet
**People:** ball, valus, the-architect, caesar, four-squared, nero
**Places:** outpost-july, the-spire, the-scaffolding, pre-caesar-floor-1
**Factions:** the-wight, chimerakind
**Mechanics:** originators, carrier-creatures, crafter-diffusion, floor-extension, outpost-system, house-mirroring, temporal-hierarchy
**Magic:** nonite, the-will
**Items:** anchor-suits, blood-box
**Events:** the-great-calamity

## Complete Bidirectional Relationship Map

Each line is one undirected edge. Each edge means BOTH entities must list the other in their `## Relationships` section.

### Person ↔ Person
- ball ↔ valus (surrogate guardian; long erosion witness)
- ball ↔ caesar (former employee; active bounty)
- valus ↔ the-architect (recruited Valus; assigned Outpost July)
- valus ↔ four-squared (creator-of-creators turned victim)
- valus ↔ caesar (executed/performed-execution-of Valus; hostile)
- caesar ↔ nero (Originator peer; relationship deferred)
- the-architect ↔ caesar (none confirmed — DO NOT add)

### Person ↔ Place
- ball ↔ outpost-july (longtime haunt; wanted poster)
- ball ↔ floor-01-red (current floor; assimilation result)
- valus ↔ outpost-july (built and ran)
- valus ↔ floor-01-red (current floor)
- valus ↔ floor-07-violet (opened door to)
- caesar ↔ floor-01-red (conquered, reshaped)
- caesar ↔ pre-caesar-floor-1 (displaced into his pocket realm)
- four-squared ↔ outpost-july (coalesced and broke out)
- four-squared ↔ the-scaffolding (current location)
- four-squared ↔ floor-01-red (origin floor)
- the-architect ↔ the-house (creator)
- the-architect ↔ the-scaffolding (creator)
- the-architect ↔ outpost-july (commissioner)
- the-architect ↔ the-spire (used it)

### Person ↔ Faction
- caesar ↔ the-wight (leveraged the WIGHT's hunt against the players)
- caesar ↔ chimerakind (unknowingly worshipped through scattered organs)

### Person ↔ Magic
- the-architect ↔ the-will (creator)
- the-architect ↔ nonite (origin / byproduct association)
- valus ↔ the-will (informed players of it)

### Person ↔ Mechanic
- caesar ↔ originators (Originator of Cruelty)
- nero ↔ originators (an Originator)
- caesar ↔ floor-extension (exemplar)
- caesar ↔ temporal-hierarchy (his lieutenants)
- caesar ↔ outpost-system (destroyed some)
- valus ↔ crafter-diffusion (exemplar)
- valus ↔ carrier-creatures (built the arachnid)
- the-architect ↔ crafter-diffusion (possible intentional version)
- the-architect ↔ house-mirroring (likely designer)
- the-architect ↔ outpost-system (commissioned)

### Person ↔ Item
- ball ↔ anchor-suits (maker)
- valus ↔ blood-box (repurposed one for the arachnid)

### Person ↔ Event
- caesar ↔ the-great-calamity (cause)
- ball ↔ the-great-calamity (disappeared in aftermath)
- valus ↔ the-great-calamity (witness)

### Place ↔ Place
- outpost-july ↔ floor-01-red (host floor)
- the-spire ↔ the-house (internal structure)
- the-spire ↔ the-scaffolding (sibling sub-realm)
- the-scaffolding ↔ the-house (sub-realm of)
- pre-caesar-floor-1 ↔ floor-01-red (the original of what is now Floor 1)
- floor-01-red ↔ floor-02-orange (adjacency, already in genesis canon)
- (other floor adjacencies remain as in genesis canon)

### Place ↔ Faction
- chimerakind ↔ floor-01-red (operates within)
- chimerakind ↔ pre-caesar-floor-1 (in the displaced old pocket realm)

### Place ↔ Mechanic
- floor-01-red ↔ floor-extension (Caesar's pocket-realm reshaping)
- floor-01-red ↔ outpost-system (the twelve outposts)
- floor-01-red ↔ temporal-hierarchy (Caesar's Hours/Minutes/Seconds)
- floor-01-red ↔ carrier-creatures (Floor 1 phenomenon)
- the-house ↔ house-mirroring (foundational principle)
- the-house ↔ temporal-hierarchy (cross-floor mechanic)
- outpost-july ↔ outpost-system (one of twelve)

### Place ↔ Magic
- the-scaffolding ↔ nonite (built from)
- the-house ↔ the-will (Architect's proxy across it)

### Place ↔ Item
- outpost-july ↔ anchor-suits (where players first arrived; not where suits were applied — applied at threshold)
- floor-01-red ↔ blood-box (item type found here)
- floor-01-red ↔ anchor-suits (the floor whose erosion they resist)

### Place ↔ Event
- floor-01-red ↔ the-great-calamity (subject)
- pre-caesar-floor-1 ↔ the-great-calamity (the event that displaced it)

### Faction ↔ Faction
- the-wight ↔ the-house (House-level authority)

### Mechanic ↔ Mechanic
- originators ↔ floor-extension (Originators commonly do this)
- house-mirroring ↔ temporal-hierarchy (clock-mirror manifestation)
- house-mirroring ↔ outpost-system (calendar-mirror manifestation)
- crafter-diffusion ↔ nonite (near-nothing state triggers diffusion)

### Magic ↔ Mechanic
- (covered above via crafter-diffusion ↔ nonite)

### Item ↔ Item
- (none for now)

### Item ↔ Mechanic
- blood-box ↔ carrier-creatures (Valus used a blood box to make a carrier creature)

### Event ↔ Magic / Mechanic
- the-great-calamity ↔ floor-extension (canonical example)

## Per-Entity Complete Relationships (target state)

This is what each entity's `## Relationships` section should look like after the fix-up pass.

### ball
- [[valus]] — surrogate guardian; observed his long erosion
- [[caesar]] — former employer; active bounty
- [[outpost-july]] — longtime haunt; wanted poster posted here
- [[floor-01-red]] — current floor; full assimilation result of long exposure
- [[the-house]] — analog for what it does to outsiders
- [[anchor-suits]] — maker; crafted them onto the players
- [[the-great-calamity]] — disappeared in its aftermath

### valus
- [[ball]] — surrogate ward; knew him as a child
- [[outpost-july]] — built and ran it; possibly still distributed through it
- [[the-architect]] — recruited him; commissioned the outpost
- [[caesar]] — Caesar staged or performed Valus's execution; hostile
- [[four-squared]] — Valus's constructs and upgrades coalesced into it
- [[blood-box]] — repurposed one to make the arachnid carrier creature
- [[carrier-creatures]] — created a spider-type carrier creature (the arachnid)
- [[crafter-diffusion]] — exemplar of involuntary diffusion
- [[the-will]] — informed the players of its existence
- [[the-great-calamity]] — surviving witness; limited knowledge
- [[floor-01-red]] — current floor; built his work here
- [[floor-07-violet]] — opened a cross-floor door here during the Four-Squared crisis
- [[nonite]] — encountered its temporal-distortion property in the time-skip incident

### the-architect
- [[valus]] — recruited; assigned Outpost July
- [[the-will]] — created it as his intended proxy
- [[the-scaffolding]] — created it
- [[the-house]] — created it
- [[outpost-july]] — original commissioner
- [[outpost-system]] — commissioned the twelve-outpost network
- [[the-spire]] — used it; possibly built it
- [[nonite]] — origin / byproduct association
- [[crafter-diffusion]] — possible intentional exemplar (vs. Valus's involuntary version)
- [[house-mirroring]] — likely designer of the mirroring principle

### caesar
- [[ball]] — former employee; active bounty
- [[valus]] — executed (or performed execution of) Valus in front of Ball; hostile
- [[nero]] — fellow Originator; relationship deferred
- [[the-wight]] — leveraged the WIGHT's hunt as coercion over the players
- [[floor-01-red]] — conquered and reshaped as his cruelty-scape pocket realm
- [[chimerakind]] — religion seeded through his scattered organs
- [[four-squared]] — sought it as a weapon before crisis self-resolved
- [[pre-caesar-floor-1]] — displaced into his pocket realm during conquest
- [[the-great-calamity]] — his conquest IS the Calamity
- [[originators]] — the Originator of Cruelty
- [[floor-extension]] — exemplar of floor-reshaping conquest
- [[temporal-hierarchy]] — his Hours, Minutes, Seconds were his top lieutenants
- [[outpost-system]] — destroyed several of the twelve outposts deliberately

### four-squared
- [[valus]] — creator of the constructs that coalesced into it
- [[outpost-july]] — coalesced and broke out from the dueling courts
- [[the-scaffolding]] — current location; absorbing nonite there
- [[floor-01-red]] — origin floor
- [[nonite]] — currently absorbing it at scale

### nero
- [[caesar]] — fellow Originator; situation used as leverage over the players
- [[originators]] — an Originator (concept unknown)

### outpost-july
- [[valus]] — built it, ran it, possibly still present through diffusion
- [[the-architect]] — original commissioner
- [[ball]] — childhood resident; decrepit presence on return visits; wanted poster here
- [[four-squared]] — coalesced and broke out from the dueling courts
- [[outpost-system]] — one of the twelve monthly outposts; July is a survivor
- [[floor-01-red]] — host floor
- [[anchor-suits]] — players arrived here protected by them
- [[nonite]] — site of the liquefied-nonite time-distillation incident

### the-spire
- [[the-house]] — internal structure spanning all floors
- [[the-architect]] — used it; may have built it
- [[the-scaffolding]] — sibling sub-realm; both are House infrastructure beyond floor sequence
- [[floor-01-red]] — connects here (and to all other floors)

### the-scaffolding
- [[the-architect]] — creator
- [[nonite]] — primary substance
- [[the-house]] — sub-realm of
- [[the-spire]] — sibling sub-realm
- [[four-squared]] — current resident; absorbing nonite here

### pre-caesar-floor-1
- [[floor-01-red]] — what Floor 1 was before Caesar reshaped it
- [[caesar]] — conquered and displaced it
- [[the-great-calamity]] — the event that displaced it
- [[chimerakind]] — religion that emerged within the displaced pocket realm

### the-wight
- [[caesar]] — Caesar leveraged the WIGHT's pursuit of the players
- [[the-house]] — House-level authority entity

### chimerakind
- [[caesar]] — unknowingly worships him through his scattered organs
- [[floor-01-red]] — operates within (in the old pocket realm)
- [[pre-caesar-floor-1]] — present in the displaced pocket realm Caesar holds

### originators
- [[caesar]] — the Originator of Cruelty
- [[nero]] — an Originator (concept unknown)
- [[floor-extension]] — Originators commonly reshape conquered floors

### carrier-creatures
- [[floor-01-red]] — Floor 1 phenomenon
- [[valus]] — built a spider-type carrier creature (the arachnid mount)
- [[blood-box]] — Valus repurposed one to make his arachnid

### crafter-diffusion
- [[valus]] — exemplar of involuntary diffusion
- [[the-architect]] — possible intentional exemplar
- [[nonite]] — near-nothing states (nonite-adjacent) trigger diffusion

### floor-extension
- [[caesar]] — exemplar; reshaped Floor 1 as his cruelty-scape
- [[floor-01-red]] — site of the canonical example
- [[originators]] — Originators commonly express their power this way
- [[pre-caesar-floor-1]] — what was displaced by the canonical example
- [[the-great-calamity]] — the canonical example itself

### outpost-system
- [[floor-01-red]] — the twelve outposts are on this floor
- [[the-architect]] — commissioner of the system
- [[outpost-july]] — one of the twelve survivors
- [[caesar]] — destroyed several of them deliberately
- [[house-mirroring]] — calendar-mirror manifestation

### house-mirroring
- [[the-architect]] — likely designer of the principle
- [[temporal-hierarchy]] — clock-mirror manifestation
- [[outpost-system]] — calendar-mirror manifestation
- [[the-house]] — foundational principle of the House's structure

### temporal-hierarchy
- [[caesar]] — exemplar; his Hours/Minutes/Seconds ran Floor 1
- [[floor-01-red]] — site of the canonical example
- [[house-mirroring]] — clock-mirror manifestation
- [[the-house]] — cross-floor mechanic

### nonite
- [[the-architect]] — origin / byproduct association
- [[the-scaffolding]] — primary substance there
- [[four-squared]] — currently absorbing nonite at scale
- [[outpost-july]] — site of the liquefied-nonite temporal-distortion incident
- [[valus]] — encountered nonite's temporal-distortion property
- [[crafter-diffusion]] — near-nothing (nonite-adjacent) states trigger diffusion

### the-will
- [[the-architect]] — creator
- [[valus]] — informed the players of its existence
- [[the-house]] — Architect's intended proxy across the entire House

### blood-box
- [[valus]] — repurposed one to make the arachnid carrier creature
- [[carrier-creatures]] — became the foundation for a spider-type carrier creature
- [[floor-01-red]] — item type found here

### anchor-suits
- [[ball]] — maker; crafted from consumed magical components
- [[outpost-july]] — players arrived here protected by them
- [[floor-01-red]] — the floor whose erosion they resist

### the-great-calamity
- [[caesar]] — cause; his conquest IS the Calamity
- [[floor-01-red]] — subject; the floor reshaped by it
- [[ball]] — disappeared in the aftermath
- [[valus]] — surviving witness
- [[pre-caesar-floor-1]] — what was displaced by it
- [[floor-extension]] — the canonical example of this mechanic

### floor-01-red (canon — needs major Relationships expansion)
- [[the-house]] — parent
- [[floor-02-orange]] — adjacent above
- [[ball]] — current resident; assimilation analog
- [[valus]] — current resident; built Outpost July here
- [[caesar]] — conqueror; reshaped this floor as his pocket realm
- [[four-squared]] — origin here; now in Scaffolding
- [[outpost-july]] — primary arrival hub
- [[outpost-system]] — twelve-outpost network on this floor
- [[the-great-calamity]] — Caesar's reshaping event
- [[pre-caesar-floor-1]] — original reality, displaced
- [[chimerakind]] — religion in the displaced pocket realm
- [[carrier-creatures]] — Floor 1 phenomenon
- [[floor-extension]] — canonical example of this mechanic happens here
- [[temporal-hierarchy]] — Caesar's Hours/Minutes/Seconds ran here
- [[blood-box]] — item type found here
- [[anchor-suits]] — the floor whose erosion they resist

### the-house (canon — needs Relationships expansion)
- [[the-architect]] — creator
- [[floor-01-red]] through [[floor-07-violet]] — the seven floors
- [[the-spire]] — internal sub-realm
- [[the-scaffolding]] — internal sub-realm
- [[the-will]] — Architect's intended proxy
- [[the-wight]] — House-level authority
- [[ball]] — assimilation analog
- [[house-mirroring]] — foundational principle
- [[temporal-hierarchy]] — cross-floor mechanic

### floor-07-violet (canon — needs minor expansion)
- [[the-house]] — parent (existing)
- [[floor-06-indigo]] — adjacent below (existing)
- [[valus]] — opened a cross-floor door from Floor 1 to Floor 7

## Application Order

1. Edit `2026-04-25-red1-interview.md` — fix Relationships in 5 people files + 9 new entity files
2. Edit `2026-04-25-red1-places.md` — fix Relationships in 4 place/item files + 3 new mechanic files + diff updates for floor-01-red and the-house
3. Edit `2026-04-25-red1.md` — fix Relationships only in non-superseded entries (nonite, scaffolding, blood-box doesn't exist there, etc.) — most people are superseded so skip them

## Stale Detection

If a future session adds a new entity, this audit is stale. Use it as a snapshot only — re-derive from canon files when verifying current state.
