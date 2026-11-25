import { mkdirSync, writeFileSync } from "node:fs";

// Invented word: "notifade" — notification + fade. The brief lift of hope
// when the phone lights up, fading at once when the message is not the one
// you were waiting for. Sayable (no-ti-fade), spellable, memorable.
const entry =
  "notifade (n.): the sinking feeling when a notification turns out not to be the message you were waiting for.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// a single line, not only whitespace.
if (entry.length < 1 || entry.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${entry.length}`);
}
if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (entry !== entry.trim()) {
  throw new Error("entry must have no leading or trailing whitespace");
}
if (entry.includes("\n") || entry.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry); // no trailing newline
console.log(entry);
