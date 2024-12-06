import { readData } from "./src/utils/fileReader.js";
import { calculateRevenue } from "./src/calculations/revenue.js";
import { calculateExpenses } from "./src/calculations/expenses.js";
import { calculateGrossProfitMargin } from "./src/calculations/grossProfitMargin.js";
import { calculateNetProfitMargin } from "./src/calculations/netProfitMargin.js";

async function main() {
  try {
    const filePath = "./src/data/data.json";
    const { data } = await readData(filePath);

    // calculation functions
    const revenue = calculateRevenue(data);
    const expenses = calculateExpenses(data);
    const grossProfitMargin = calculateGrossProfitMargin(data, revenue);
    const netProfitMargin = calculateNetProfitMargin(data);

    console.log(revenue);
    console.log(expenses);
    console.log(grossProfitMargin);
    console.log(netProfitMargin);
  } catch (error) {
    console.error(`An error occured: ${error.message}`);
  }
}

main();
