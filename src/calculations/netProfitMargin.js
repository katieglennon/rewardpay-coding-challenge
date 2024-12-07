import { calculateRevenue } from "./revenue.js";
import { calculateExpenses } from "./expenses.js";

export function calculateNetProfitMargin(data) {
  const revenue = calculateRevenue(data);
  const expenses = calculateExpenses(data);

  if (revenue === 0) {
    throw new Error(
      "Net Profit Margin cannot be calculated as Revenue is zero"
    );
  }

  const netProfitMargin = ((revenue - expenses) / revenue) * 100;

  return Math.round(netProfitMargin * 10) / 10;
}
