// On Windows, `next build` with `output: "export"` writes nested segment
// prefetch files as folders (out/__next.!X/__PAGE__.txt) because it builds the
// name from a backslash path. The client requests the flat name
// (out/__next.!X.__PAGE__.txt), so every prefetch 404s and navigation falls
// back to a full load. This renames them to the flat form. On Linux and macOS
// the folders never exist, so it does nothing. Runs after every build (see
// package.json "postbuild").
import fs from "node:fs";
import path from "node:path";

const out = "out";

function filesIn(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? filesIn(full) : [full];
  });
}

let moved = 0;
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);
    if (!entry.name.startsWith("__next.")) {
      walk(full);
      continue;
    }
    for (const file of filesIn(full)) {
      const flat = entry.name + "." + path.relative(full, file).split(path.sep).join(".");
      fs.renameSync(file, path.join(dir, flat));
      moved++;
    }
    fs.rmSync(full, { recursive: true });
  }
}

if (fs.existsSync(out)) walk(out);
if (moved) console.log(`fix-segment-files: flattened ${moved} segment prefetch files`);
