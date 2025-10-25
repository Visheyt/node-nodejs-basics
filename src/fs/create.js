import fs from "fs/promises";
import path from "path";
import { __dirname } from ".";

const create = async () => {
  try {
    await fs.writeFile(
      path.resolve(__dirname, "files/fresh.txt"),
      "I am fresh and young",
      { flag: "wx" }
    );
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();
