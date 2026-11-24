import fs from "node:fs";
import path from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = "After three years of night shifts, my mother finally signed her name on the deed to the house she had cleaned for twenty years.";

fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, "entry.txt");
fs.writeFileSync(outFile, line, "utf8");
fs.chmodSync(outFile, 0o644);
