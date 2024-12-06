import fs from "fs/promises";

export async function readData(filePath) {
  try {
    const fileContents = await fs.readFile(filePath, "utf-8");
    return JSON.parse(fileContents);
  } catch (error) {
    throw new Error(`Error reading file at ${filePath}: ${error.message}`);
  }
}
