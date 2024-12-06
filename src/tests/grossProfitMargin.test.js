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
});
