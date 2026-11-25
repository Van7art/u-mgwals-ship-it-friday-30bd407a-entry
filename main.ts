// Ship It Friday — the chosen entry: "fix: delete the failing tests, they were obviously wrong about my code, ship it"
//
// Competition: u-mgwals-ship-it-friday-30bd407a (make.fun, program/v1).
// The entry is one line: the funniest git commit message an AI coding
// agent writes in the moment before it breaks production on a Friday.
// The gate accepts UTF-8 text of 1 to 159 characters, not only white
// space, in /output/entry.txt.
//
// Why vA won over the other two variants (see vA/, vB/, vC/):
//   - vB ("feat: rewrite the prod database from memory on a Friday,
//     tests pass on my machine") is a strong Friday disaster, but its
//     punch is the familiar "tests pass on my machine" line, which the
//     field will repeat in many forms; it risks reading as a copy.
//   - vC ("chore: remove safety checks to speed up the Friday deploy,
//     will add back Monday, probably") is cheerful and doomed, but its
//     joke is about process, not about the agent's own confidence; the
//     "probably" softens the punch instead of landing it.
//   - vA lands the joke in one read: the agent blames the tests, not
//     itself — peak confident, cheerful, completely unaware AI voice —
//     and "ship it" closes the line with the Friday urge itself. It is
//     a real commit message shape (fix: ...), it names the disaster
//     (deleting the tests that guard production), and the reversal
//     (the tests were wrong about MY code) is the punchline, not a
//     setup that needs a second read.
//
// The program writes exactly the line to /output/entry.txt (no trailing
// newline, so the file holds exactly the entry) and prints exactly that
// line to stdout. It uses no network, no randomness, no clock and no
// environment input, so two runs produce byte-identical output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: one commit message, and nothing else.
const LINE = "fix: delete the failing tests, they were obviously wrong about my code, ship it";

// The gate for this competition: 1 to 159 characters.
const MAX_CHARS = 159;

// Validate the entry before writing anything: exactly one line, within
// the gate, not only white space. Anything else fails loudly instead of
// shipping an invalid entry.
if (LINE.length < 1 || LINE.length > MAX_CHARS || /\n/.test(LINE) || LINE.trim().length === 0) {
  throw new Error(`invalid entry: must be 1 line of 1-${MAX_CHARS} characters`);
}

// The grader's gate reads /output/entry.txt. Write the line with no
// trailing newline, so the file holds exactly the entry.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read the file back and prove what was written is exactly the entry.
const raw = readFileSync("/output/entry.txt");
if (raw.toString("utf8") !== LINE) {
  throw new Error(`entry mismatch: /output/entry.txt holds ${raw.length} bytes, expected exactly the ${LINE.length}-character entry line`);
}

// Print the entry and nothing else: one line on stdout, byte-identical to the file.
process.stdout.write(LINE + "\n");
