import { formatCurrency, formatPercentage } from "../utils/helpers.js";
import { expect, describe, it } from "vitest";

describe("helpers", () => {
  it("formats number as currency without decimal places", () => {
    const result = formatCurrency(12345.67);
    expect(result).toBe("$12,346");
  });

  it("throws error if input is not a number for percentage formatting", () => {
    const formatInvalidPercentage = () => formatPercentage("string");
    expect(formatInvalidPercentage).toThrow("Input must be a number");
  });

  it("formats percentage value with one decimal place", () => {
    const result = formatPercentage(12.345);
    expect(result).toBe("12.3%");
  });

  it("formats zero percentage value with one decimal place", () => {
    const result = formatPercentage(0);
    expect(result).toBe("0.0%");
  });
});
