import { expect, describe, it } from "vitest";
import { calculateExpenses } from "../calculations/expenses.js";
import { sampleData } from "./data/sampleData.js";

describe("calculateExpenses", () => {
  it("calculates the total expenses correctly", () => {
    expect(calculateExpenses(sampleData)).toBe(800);
  });
});
