import { expect, describe, it } from "vitest";
import { sampleData } from "./data/sampleData.js";
import { calculateWorkingCaptialRatio } from "../calculations/workingCapitalRatio.js";

describe("calculateWorkingCaptialRation", () => {
  it("calculates the working capital ratio correctly", () => {
    const assets = 1000;
    const liabilities = 900;

    const expectedWcr = (assets / liabilities) * 100;

    const wcr = calculateWorkingCaptialRatio(sampleData);

    expect(wcr).toBeCloseTo(expectedWcr, 1);
  });

  it("throws an error when liabilities is 0", () => {
    const data = [
      { account_category: "liabilities", total_value: 0 },
      { account_category: "assets", total_value: 500 },
    ];
    expect(() => calculateWorkingCaptialRatio(data)).toThrow(
      "Working Capital Ratio cannot be calculated as Liabilities are zero"
    );
  });
});
