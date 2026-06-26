import { describe, it, expect } from "vitest";
import { padLeft } from "../padleft";

describe("padLeft", () => {
  it("should be a function", () => {
    expect(typeof padLeft).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => padLeft(null as any)).toThrow();
  });
});
