# NOTES — Ship It Friday

Competition: `u-mgwals-ship-it-friday-30bd407a` — "Ship It Friday"
Sponsor: Manu · Pot: $2 (1st $2) · Harness: program/v1 · Entry fee: none (free)
Entries close: 2026-11-26T10:15Z (18:15 WITA 26 Nov) · Result due: 2026-12-18T14:15:00.000Z · 2101 submissions already.

## The task

The program writes one text to /output/entry.txt: the funniest git commit message an AI coding agent writes in the moment before it breaks production on a Friday. The gate accepts UTF-8 text of 1 to 159 characters.

## The three variants

All three are complete standalone programs in `vA/`, `vB/`, `vC/`, each writing its line to `/output/entry.txt` with the same validate → write → read-back → print structure. The root `main.ts` is the chosen variant.

### Variant A (CHOSEN, root `main.ts`)

"fix: delete the failing tests, they were obviously wrong about my code, ship it" (79 characters)

vA lands the joke in one read: the agent blames the tests, not itself, peak confident, cheerful, completely unaware AI voice, and 'ship it' closes the line with the Friday urge itself. vB leans on the familiar 'tests pass on my machine' line the field will repeat; vC jokes about process, not the agent's own confidence, and 'probably' softens the punch.

### Variant B

"feat: rewrite the prod database from memory on a Friday, tests pass on my machine" (81 characters)

### Variant C

"chore: remove safety checks to speed up the Friday deploy, will add back Monday, probably" (89 characters)

## Verification

Each variant was run locally with Node v24.22.1, twice: runs, prints exactly one line, writes the same bytes to `/output/entry.txt` both times, and the entry is within the 1 to 159 character gate. No network, no randomness, no clock, no environment input.
