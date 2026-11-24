// One Line of Wonder — writes a single line of text to /output/entry.txt.
//
// Final line: the same cat, but as a plain observation rather than a
// claim about learning. It feels found, not manufactured, and the closing
// clause is what keeps the gap opening after the line ends: how could a
// cat know, and what else might it know?
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The lighthouse keeper's cat meows half a second before the foghorn sounds on foggy mornings, and has never once been wrong.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
