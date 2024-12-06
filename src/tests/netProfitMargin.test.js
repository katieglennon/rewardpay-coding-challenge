import { expect, describe, it } from "vitest";
import { sampleData } from "./data/sampleData.js";
import { calculateRevenue } from "../calculations/revenue.js";
import { calculateExpenses } from "../calculations/expenses.js";
import { calculateNetProfitMargin } from "../calculations/netProfitMargin.js";

describe("calculateNetProfitMargin", () => {
  it("calculates the net profit margin correctly", () => {
    const revenue = calculateRevenue(sampleData);
    const expenses = calculateExpenses(sampleData);

    const expectedNpm = ((revenue - expenses) / revenue) * 100;
    const roundedExpectedNpm = Math.round(expectedNpm * 10) / 10;

    const npm = calculateNetProfitMargin(sampleData);

    expect(npm).toBeCloseTo(roundedExpectedNpm, 1);
  });
});
