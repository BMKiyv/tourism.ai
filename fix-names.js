// Замініть вміст fix-names.js на цей "класичний" код:
import { readdirSync, renameSync } from "fs";
import { extname, join } from "path";

const dir = "public/media";
const files = readdirSync(dir);

files.forEach((file) => {
  if (file.length > 60) {
    const ext = extname(file);
    const newName = file.substring(0, 30) + ext;
    console.log(`Renaming ${file} to ${newName}`);
    renameSync(join(dir, file), join(dir, newName));
  }
});
