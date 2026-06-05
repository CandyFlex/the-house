/**
 * sync-balance-items.js
 *
 * Reads magic item .md files from the Balance 5e items source directory,
 * converts them to Quartz-compatible markdown with callout-based formatting,
 * and writes the output to the Quartz content directory.
 *
 * Usage: node scripts/sync-balance-items.js
 *
 * Source:  ../Balance 5e items/items/
 * Target:  content/40_output/items/balance-5e/
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ── Configuration ──────────────────────────────────────────────
const SOURCE_DIR = path.resolve(__dirname, "..", "..", "Balance 5e items", "items");
const TARGET_DIR = path.resolve(__dirname, "..", "content", "40_output", "items", "balance-5e");

const SETS = {
  "crystal-trench": {
    description: "Floor 1, The House. A frozen chasm of blue-white geode crystal.",
    tags: ["crystal-trench", "floor-1"],
  },
};

const STANDALONE_TAGS = ["standalone"];

// ── Helpers ────────────────────────────────────────────────────

/** Parse YAML-like frontmatter from a markdown string. */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  const lines = match[1].split("\n");
  let currentKey = null;
  let inList = false;

  for (const line of lines) {
    // List item under a key
    if (inList && /^\s{2,4}-\s/.test(line)) {
      const val = line.replace(/^\s{2,4}-\s*/, "").replace(/"/g, "").trim();
      if (currentKey && Array.isArray(fm[currentKey])) {
        fm[currentKey].push(val);
      }
      continue;
    }

    // Key with list indicator
    const listKeyMatch = line.match(/^(\w[\w_]*)\s*:\s*$/);
    if (listKeyMatch) {
      currentKey = listKeyMatch[1];
      fm[currentKey] = [];
      inList = true;
      continue;
    }

    inList = false;
    const kvMatch = line.match(/^(\w[\w_]*)\s*:\s*(.+)$/);
    if (kvMatch) {
      let value = kvMatch[2].trim();
      // Strip surrounding quotes
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      // Parse numbers
      if (/^\d+(\.\d+)?$/.test(value)) {
        value = parseFloat(value);
      }
      // Parse booleans
      if (value === "true") value = true;
      if (value === "false") value = false;
      // Handle em-dash
      if (value === "—" || value === "—") value = null;
      fm[kvMatch[1]] = value;
      currentKey = kvMatch[1];
    }
  }
  return fm;
}

/** Remove frontmatter block from raw markdown. */
function stripFrontmatter(raw) {
  return raw.replace(/^---\s*\n[\s\S]*?\n---\s*\n/, "");
}

/**
 * Extract a section from markdown by heading name.
 * Uses string search (not regex) to avoid multiline flag issues with $.
 */
function extractSection(raw, heading) {
  const marker = `\n## ${heading}`;
  const idx = raw.indexOf(marker);
  if (idx === -1) return null;

  // Skip past the marker line to the content start
  let contentStart = idx + marker.length;
  while (contentStart < raw.length && raw[contentStart] === "\n") contentStart++;
  if (contentStart >= raw.length) return "";

  // Find the next H2 heading or --- separator after contentStart
  const rest = raw.slice(contentStart);
  const nextMatch = rest.match(/\n(?:## \w|---)/);
  const endIdx = nextMatch ? contentStart + nextMatch.index : raw.length;

  return raw.slice(contentStart, endIdx).trim();
}

/** Format a number with commas. */
function fmt(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// ── Item Conversion ────────────────────────────────────────────

/**
 * Convert a Balance 5e item markdown string into Quartz markdown.
 */
function convertItem(rawMd, fileStem, source) {
  const fm = parseFrontmatter(rawMd);
  const body = stripFrontmatter(rawMd);

  // Extract sections
  const description = extractSection(body, "Description") || "";
  const imagePrompt = extractSection(body, "Image Prompt") || "";
  const properties = extractSection(body, "Properties") || "";
  const mechanicsBlock = extractSection(body, "Mechanics Block (DM Quick Reference)") || "";
  const balanceNotes = extractSection(body, "Balance Notes") || "";
  const variants = extractSection(body, "Variants") || "";
  const dndBeyond = extractSection(body, "D&D Beyond Homebrew") || "";

  const itemName = fm.name || fm.title || fileStem;
  const rarity = fm.rarity || "unknown";
  const type = fm.type || "wondrous-item";
  const subtype = fm.subtype ? ` (${fm.subtype})` : "";
  const typeLabel = type === "wondrous-item" ? "Wondrous item" : type.charAt(0).toUpperCase() + type.slice(1);
  const attunement = fm.attunement ? " (requires attunement)" : "";
  const saveDc = fm.save_dc || null;
  const value = fm.cost_soulstones || null;
  const tags = fm.tags || [];

  // Build Quartz frontmatter
  const fmOut = {
    title: itemName,
    rarity: rarity,
    type: type,
    ...(subtype && { subtype: fm.subtype }),
    ...(fm.source && { source: fm.source }),
    tags: [...tags],
  };

  // ── Quick Stats callout ──
  const statsLines = [];
  statsLines.push(`- **Rarity:** ${rarityTitle(rarity)} | **Attunement:** ${attunement ? "Yes" : "No"}`);
  if (attunement) statsLines.push(`- **Type:** ${typeLabel}${subtype}`);
  if (saveDc) statsLines.push(`- **Save DC:** ${saveDc} | **Value:** ${fmt(value)} soul stones`);
  else statsLines.push(`- **Value:** ${fmt(value)} soul stones`);
  if (fm.charges) statsLines.push(`- **Charges:** ${fm.charges}${fm.recharge ? ` (${fm.recharge})` : ""}`);
  const statsBlock = statsLines.join("\n");

  // ── Build output ──
  const lines = [];

  // Frontmatter
  lines.push("---");
  for (const [key, val] of Object.entries(fmOut)) {
    if (Array.isArray(val)) {
      lines.push(`${key}:`);
      for (const item of val) {
        lines.push(`  - ${item}`);
      }
    } else if (typeof val === "string") {
      lines.push(`${key}: "${val}"`);
    } else {
      lines.push(`${key}: ${val}`);
    }
  }
  lines.push("date_created: " + (fm.date_created || new Date().toISOString().slice(0, 10)));
  lines.push("---");
  lines.push("");

  // Title
  lines.push(`# ${itemName}`);
  lines.push(`*${typeLabel}${subtype}, ${rarityTitle(rarity)}${attunement}*`);
  lines.push("");

  // Quick Stats callout
  lines.push("> [!tip]+ Quick Stats");
  lines.push("> " + statsBlock.split("\n").join("\n> "));
  lines.push("");

  // Description
  lines.push("---");
  lines.push("");
  lines.push("## Description");
  lines.push(description);
  lines.push("");

  // Image Prompt
  if (imagePrompt) {
    lines.push("---");
    lines.push("");
    lines.push("## Image Prompt");
    lines.push("");
    lines.push(imagePrompt);
    lines.push("");
  }

  // Properties (the core section — always visible)
  lines.push("---");
  lines.push("");
  lines.push("## Properties");
  lines.push(properties);
  lines.push("");

  // Mechanics Block — collapsible callout
  if (mechanicsBlock) {
    lines.push("> [!abstract]- Mechanics (DM Reference)");
    lines.push("> " + mechanicsBlock.split("\n").join("\n> "));
    lines.push("");
  }

  // Balance Notes — collapsible callout
  if (balanceNotes) {
    lines.push("> [!example]- Balance Notes");
    lines.push("> " + balanceNotes.split("\n").join("\n> "));
    lines.push("");
  }

  // Variants — collapsible callout
  if (variants) {
    lines.push("> [!note]- Variants");
    lines.push("> " + variants.split("\n").join("\n> "));
    lines.push("");
  }

  // D&D Beyond Homebrew — always visible (not collapsible) for easy access
  if (dndBeyond) {
    lines.push("---");
    lines.push("");
    lines.push("## D&D Beyond Homebrew");
    lines.push("");
    lines.push("> [!info] Copy-Paste Ready");
    lines.push("> Click the copy button (top-right of the code block below) to copy the entire HTML. Paste directly into the **Description** field of a D&D Beyond homebrew magic item.");
    lines.push(">");
    lines.push("> " + dndBeyond.split("\n").join("\n> "));
    lines.push("");
  }

  return lines.join("\n");
}

function rarityTitle(r) {
  const map = {
    common: "Common",
    uncommon: "Uncommon",
    rare: "Rare",
    "very-rare": "Very Rare",
    legendary: "Legendary",
  };
  return map[r] || r;
}

// ── Index Generation ───────────────────────────────────────────

function generateMainIndex(standaloneItems, setNames) {
  const lines = [];
  lines.push("---");
  lines.push("title: Balanced 5e Magic Items");
  lines.push("tags:");
  lines.push("  - balance-5e");
  lines.push("  - item-index");
  lines.push("  - magic-items");
  lines.push("  - dnd-5e");
  lines.push("---");
  lines.push("");
  lines.push("# Balanced 5e Magic Items");
  lines.push("");
  lines.push("Standardized, balanced D&D 5e magic items with D&D Beyond copy-paste support.");
  lines.push("");
  lines.push("## Item Sets");
  lines.push("");

  for (const setName of setNames) {
    const info = SETS[setName] || { description: "" };
    const count = fs.existsSync(path.join(TARGET_DIR, setName, "INDEX.md")) ? "—" : "—";
    lines.push(`### [${titleCase(setName)}](${setName}/INDEX.md)`);
    lines.push(`${info.description}`);
    lines.push("");
  }

  lines.push("---");
  lines.push("");
  lines.push("## Standalone Items");
  lines.push("");
  lines.push("| Item | Rarity | Type | Tags |");
  lines.push("|------|--------|------|------|");

  for (const item of standaloneItems) {
    const name = item.name;
    const rarity = rarityTitle(item.rarity);
    const typeLabel = typeLabelNice(item.type, item.subtype);
    const tags = (item.tags || []).filter(t => !STANDALONE_TAGS.includes(t) && t !== "balance-5e").slice(0, 4).join(", ");
    lines.push(`| [${name}](${item.stem}.md) | ${rarity} | ${typeLabel} | ${tags} |`);
  }

  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## How to Use");
  lines.push("");
  lines.push("Each item page includes:");
  lines.push("");
  lines.push("1. **Full stat block** — flavor description, properties, mechanics, balance notes, and variants");
  lines.push("2. **D&D Beyond Homebrew** — scroll to the bottom of any item page. Hover over the HTML code block, click the copy button, then paste directly into D&D Beyond's homebrew item Description field.");
  lines.push("");
  lines.push("> [!note] Auto-Synced");
  lines.push("> These pages are auto-generated by `npm run sync-items` from the Balance 5e Items source. Run that command, then `git commit` and `git push` to update the site.");
  lines.push("");

  return lines.join("\n");
}

function generateSetIndex(setName, items) {
  const info = SETS[setName] || { description: "" };
  const lines = [];
  const title = titleCase(setName) + " Item Index";

  lines.push("---");
  lines.push(`title: ${title}`);
  lines.push("tags:");
  lines.push("  - balance-5e");
  lines.push("  - item-index");
  lines.push(`  - ${setName}`);
  if (info.tags) info.tags.forEach(t => lines.push(`  - ${t}`));
  lines.push("---");
  lines.push("");
  lines.push(`# ${titleCase(setName)} — Magic Items`);
  lines.push("");
  lines.push(`*${info.description}*`);
  lines.push("");

  // Group by rarity
  const byRarity = {};
  for (const item of items) {
    if (!byRarity[item.rarity]) byRarity[item.rarity] = [];
    byRarity[item.rarity].push(item);
  }

  const rarityOrder = ["common", "uncommon", "rare", "very-rare", "legendary"];

  lines.push("## Items by Rarity");
  lines.push("");

  for (const rarity of rarityOrder) {
    const group = byRarity[rarity];
    if (!group || group.length === 0) continue;

    lines.push(`### ${rarityTitle(rarity)}`);
    lines.push("");
    lines.push("| Item | Type | Key Mechanic | Cost |");
    lines.push("|------|------|-------------|------|");

    for (const item of group) {
      const name = item.name;
      const typeLabel = typeLabelNice(item.type, item.subtype);
      const mechanic = getKeyMechanic(item);
      const cost = fmt(item.value || 0);
      lines.push(`| [${name}](${item.stem}.md) | ${typeLabel} | ${mechanic} | ${cost} |`);
    }

    lines.push("");
  }

  lines.push("---");
  lines.push("");
  lines.push(`*${items.length} items. Source: The House — Floor 1, ${titleCase(setName)}.*`);

  return lines.join("\n");
}

function titleCase(str) {
  return str
    .split(/[-_ ]/)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function typeLabelNice(type, subtype) {
  const map = {
    weapon: "Weapon",
    armor: "Armor",
    "wondrous-item": "Wondrous item",
    rod: "Rod",
    staff: "Staff",
    wand: "Wand",
    ring: "Ring",
    potion: "Potion",
    scroll: "Scroll",
  };
  const base = map[type] || type;
  return subtype ? `${base} (${subtype})` : base;
}

function getKeyMechanic(item) {
  // Return a short mechanic summary from tags or properties
  const tags = item.tags || [];
  const keyTags = tags.filter(
    t => !["balance-5e", "crystal-trench", "floor-1", "geode", "crystal", "standalone"].includes(t)
  );
  if (keyTags.length > 0) return keyTags.slice(0, 3).join(", ");
  return "See item";
}

// ── Main ───────────────────────────────────────────────────────

function main() {
  console.log("Syncing Balance 5e items → Quartz content...\n");

  // Ensure target directory exists
  fs.mkdirSync(TARGET_DIR, { recursive: true });

  const allStandalone = [];
  const setItems = {};

  // Process standalone items (direct .md files in items/)
  const standaloneDir = SOURCE_DIR;
  if (fs.existsSync(standaloneDir)) {
    const entries = fs.readdirSync(standaloneDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith(".md") && entry.name !== "INDEX.md") {
        const filePath = path.join(standaloneDir, entry.name);
        const raw = fs.readFileSync(filePath, "utf-8");
        const fm = parseFrontmatter(raw);
        const stem = entry.name.replace(/\.md$/, "");
        const name = fm.name || stem;
        console.log(`  Converting standalone: ${name}`);

        const converted = convertItem(raw, stem, "standalone");
        const outPath = path.join(TARGET_DIR, entry.name);
        fs.writeFileSync(outPath, converted, "utf-8");

        allStandalone.push({
          name,
          stem,
          rarity: fm.rarity || "unknown",
          type: fm.type || "wondrous-item",
          subtype: fm.subtype || null,
          tags: fm.tags || [],
          value: fm.cost_soulstones || 0,
        });
      }
    }
  }

  // Process item sets (subdirectories)
  for (const setName of Object.keys(SETS)) {
    const setDir = path.join(SOURCE_DIR, setName);
    if (!fs.existsSync(setDir)) continue;

    const targetSetDir = path.join(TARGET_DIR, setName);
    fs.mkdirSync(targetSetDir, { recursive: true });

    const entries = fs.readdirSync(setDir, { withFileTypes: true });
    const items = [];

    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith(".md") && entry.name !== "INDEX.md") {
        const filePath = path.join(setDir, entry.name);
        const raw = fs.readFileSync(filePath, "utf-8");
        const fm = parseFrontmatter(raw);
        const stem = entry.name.replace(/\.md$/, "");
        const name = fm.name || stem;
        console.log(`  Converting ${setName}: ${name}`);

        const converted = convertItem(raw, stem, setName);
        const outPath = path.join(targetSetDir, entry.name);
        fs.writeFileSync(outPath, converted, "utf-8");

        items.push({
          name,
          stem,
          rarity: fm.rarity || "unknown",
          type: fm.type || "wondrous-item",
          subtype: fm.subtype || null,
          tags: fm.tags || [],
          value: fm.cost_soulstones || 0,
        });
      }
    }

    setItems[setName] = items;

    // Generate set index
    if (items.length > 0) {
      const indexContent = generateSetIndex(setName, items);
      fs.writeFileSync(path.join(targetSetDir, "INDEX.md"), indexContent, "utf-8");
      console.log(`  Generated index: ${setName}/INDEX.md`);
    }
  }

  // Generate main index
  const indexContent = generateMainIndex(allStandalone, Object.keys(SETS));
  fs.writeFileSync(path.join(TARGET_DIR, "INDEX.md"), indexContent, "utf-8");
  console.log("  Generated main index: INDEX.md");

  // Summary
  let total = allStandalone.length;
  for (const items of Object.values(setItems)) total += items.length;
  console.log(`\nDone! Synced ${total} items (${Object.keys(setItems).length} sets, ${allStandalone.length} standalone).`);
  console.log(`Target: ${TARGET_DIR}`);
  console.log("\nNext: npx quartz build && git add . && git commit -m 'sync items' && git push");
}

main();
