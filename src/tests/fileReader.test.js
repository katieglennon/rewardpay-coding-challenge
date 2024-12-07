import { readData } from "../utils/fileReader.js";
import fs from "fs/promises";
import { vi, expect, describe, it } from "vitest";

vi.mock("fs/promises");

describe("readData", () => {
  it("successfully reads valid JSON data from file", async () => {
    const mockData = '{"key": "value"}';
    fs.readFile.mockResolvedValue(mockData);

    const result = await readData(".path/to/validFile.json");
    expect(result).toEqual({ key: "value" });
  });

  it("returns empty object for empty file", async () => {
    fs.readFile.mockResolvedValue("");

    const result = await readData("./path/to/emptyFile.json");
    expect(result).toEqual({});
  });
});
