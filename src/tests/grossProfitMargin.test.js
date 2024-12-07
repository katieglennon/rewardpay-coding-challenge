import { expect, describe, it } from "vitest";
import { calculateGrossProfitMargin } from "../calculations/grossProfitMargin.js";
import { calculateRevenue } from "../calculations/revenue.js";
import { sampleData } from "./data/sampleData.js";

describe("calculateGrossProfitMargin", () => {
  it("calculates the gross profit margin correctly", () => {
    const revenue = calculateRevenue(sampleData);

    const gpm = calculateGrossProfitMargin(sampleData, revenue);

    const expectedGpm = (1500 / revenue) * 100;

    expect(gpm).toBeCloseTo(expectedGpm, 1);
  });

  it("throws an error when revenue is 0", () => {
    const data = [
      { account_category: "revenue", total_value: 0 },
      { account_category: "expense", total_value: 500 },
    ];
    expect(() => calculateGrossProfitMargin(data, 0)).toThrow(
      "Gross Profit Margin cannot be calculated as Revenue is zero"
    );
  });
});
