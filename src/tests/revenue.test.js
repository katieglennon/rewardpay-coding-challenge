import { expect, describe, it } from "vitest";
import { calculateRevenue } from "../calculations/revenue.js";
import { sampleData } from "./data/sampleData.js";

describe("calculateRevenue", () => {
  it("calculates the total revenue correctly", () => {
    expect(calculateRevenue(sampleData)).toBe(3000);
  });
});
