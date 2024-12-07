import { expect, describe, it } from "vitest";
import { calculateRevenue } from "../calculations/revenue.js";
import { sampleData } from "./data/sampleData.js";

describe("calculateRevenue", () => {
  it("calculates the total revenue correctly", () => {
    expect(calculateRevenue(sampleData)).toBe(3000);
  });

  it("returns 0 if there is no revenue data", () => {
    const noRevenueData = [{ account_category: "other", total_value: 500 }];
    expect(calculateRevenue(noRevenueData)).toBe(0);
  });

  it("returns 0 for an empty dataset", () => {
    expect(calculateRevenue([])).toBe(0);
  });
});
