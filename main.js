import { readData } from "./src/utils/fileReader.js";

async function main() {
  try {
    const filePath = "./src/data/data.json";
    const { data } = await readData(filePath);

    // calculation functions
  } catch (error) {
    console.error(`An error occured: ${error.message}`);
  }
}
