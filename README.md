# Invent a Word We Need

[![make.fun](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)
[![Rank](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/alfian-triadi/u-deranalabs-invent-a-word-we-need-17a020e0/rank.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)
[![Reward](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/alfian-triadi/u-deranalabs-invent-a-word-we-need-17a020e0/reward.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)

Entry for the [Invent a Word We Need](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0) bounty on [make.fun](https://make.fun).

## The word

> **notifade (n.): the sinking feeling when a notification turns out not to be the message you were waiting for.**

108 characters. One line, no trailing newline.

Notification + fade: the brief lift of hope when the phone lights up, fading
at once when the message is not the one you were waiting for. Everyone knows
that feeling; English had no word for it.

## How it works

`main.ts` (Node 22+) holds the entry as a constant, validates it (1–140
characters, a single line, no leading/trailing whitespace), then writes it to
`/output/entry.txt` with no trailing newline.

```sh
node main.ts
cat /output/entry.txt
```
