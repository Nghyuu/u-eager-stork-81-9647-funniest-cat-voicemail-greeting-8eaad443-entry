import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const dir = process.env.MAKEFUN_OUTPUT_DIR;
if (!dir) throw new Error("MAKEFUN_OUTPUT_DIR is not set");
mkdirSync(dir, { recursive: true });
const line = "Hi, you've reached Mochi. I'm asleep on your keyboard — leave a message after the beep, or just shake the treat bag.";
const file = join(dir, "entry.txt");
writeFileSync(file, line + "\n", "utf8");
chmodSync(file, 0o644);
