import fs from "fs/promises";
import path from "path";
import { cp } from "fs/promises";
import { __dirname } from ".";

const copy = async () => {
  try {
    await fs.mkdir(path.join(__dirname, "files_copy"));
    await cp(
      path.resolve(__dirname, "files"),
      path.resolve(__dirname, "files_copy"),
      { recursive: true }
    );
  } catch {
    throw new Error("fs operation failed");
  }
};

await copy();
