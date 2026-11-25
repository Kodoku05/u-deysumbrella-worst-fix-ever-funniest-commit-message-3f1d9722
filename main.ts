// Entry line: 60 characters; the gate allows 1–100 code points.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "fix: deduper merged the twins; baby B now resolves to baby A";
const count = [...LINE].length;
if (count < 1 || count > 100) {
  throw new Error(`Entry must be 1–100 code points; got ${count}.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
} catch (error) {
  const detail = error instanceof Error ? error.message : String(error);
  console.error(`Unable to write entry.txt: ${detail}`);
  process.exitCode = 1;
}
