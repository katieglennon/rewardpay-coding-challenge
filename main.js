import { readData } from "./src/utils/fileReader.js";
import { calculateRevenue } from "./src/calculations/revenue.js";
import { calculateExpenses } from "./src/calculations/expenses.js";
import { calculateGrossProfitMargin } from "./src/calculations/grossProfitMargin.js";
import { calculateNetProfitMargin } from "./src/calculations/netProfitMargin.js";
import { calculateWorkingCaptialRatio } from "./src/calculations/workingCapitalRatio.js";
import { formatCurrency, formatPercentage } from "./src/utils/helpers.js";

async function main() {
  try {
    const filePath = "./src/data/data.json";
    const { data } = await readData(filePath);

    const revenue = calculateRevenue(data);
    const expenses = calculateExpenses(data);
    const grossProfitMargin = calculateGrossProfitMargin(data, revenue);
    const netProfitMargin = calculateNetProfitMargin(data);
    const workingCapitalRatio = calculateWorkingCaptialRatio(data);

    console.log(`Accounting Metrics:`);
    console.log(`Revenue: ${formatCurrency(revenue)}`);
    console.log(`Expenses: ${formatCurrency(expenses)}`);
    console.log(`Gross Profit Margin: ${formatPercentage(grossProfitMargin)}`);
    console.log(`Net Profit Margin: ${formatPercentage(netProfitMargin)}`);
    console.log(
      `Working Capital Ratio: ${formatPercentage(workingCapitalRatio)}`
    );
  } catch (error) {
    console.error(`An error occured: ${error.message}`);
  }
}

main();
