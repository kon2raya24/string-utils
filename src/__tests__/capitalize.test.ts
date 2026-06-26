import { describe, it, expect } from "vitest";
import { capitalize } from "../capitalize";

describe("capitalize", () => {
  it("should be a function", () => {
    expect(typeof capitalize).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => capitalize(null as any)).toThrow();
  });
});
