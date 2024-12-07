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
});
