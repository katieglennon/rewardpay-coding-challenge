import { readData } from "./src/utils/fileReader.js";
import { calculateRevenue } from "./src/calculations/revenue.js";
import { calculateExpenses } from "./src/calculations/expenses.js";

async function main() {
  try {
    const filePath = "./src/data/data.json";
    const { data } = await readData(filePath);

    // calculation functions
    const revenue = calculateRevenue(data);
    const expenses = calculateExpenses(data);

    console.log(revenue);
    console.log(expenses);
  } catch (error) {
    console.error(`An error occured: ${error.message}`);
  }
}

main();
