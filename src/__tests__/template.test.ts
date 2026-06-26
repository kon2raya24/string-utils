import { describe, it, expect } from "vitest";
import { template } from "../template";

describe("template", () => {
  it("should be a function", () => {
    expect(typeof template).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => template(null as any)).toThrow();
  });
});
