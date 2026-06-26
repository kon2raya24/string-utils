import { describe, it, expect } from "vitest";
import { truncate } from "../truncate";

describe("truncate", () => {
  it("should be a function", () => {
    expect(typeof truncate).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => truncate(null as any)).toThrow();
  });
});
