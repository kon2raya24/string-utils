import { describe, it, expect } from "vitest";
import { padRight } from "../padright";

describe("padRight", () => {
  it("should be a function", () => {
    expect(typeof padRight).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => padRight(null as any)).toThrow();
  });
});
