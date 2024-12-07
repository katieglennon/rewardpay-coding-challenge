import { expect, describe, it } from "vitest";
import { calculateExpenses } from "../calculations/expenses.js";
import { sampleData } from "./data/sampleData.js";

describe("calculateExpenses", () => {
  it("calculates the total expenses correctly", () => {
    expect(calculateExpenses(sampleData)).toBe(800);
  });

  it("returns 0 if there is no expenses data", () => {
    const noExpensesData = [{ account_category: "other", total_value: 500 }];
    expect(calculateExpenses(noExpensesData)).toBe(0);
  });

  it("returns 0 for an empty dataset", () => {
    expect(calculateExpenses([])).toBe(0);
  });
});
