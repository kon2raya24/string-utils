
// Type exports for consumers
// Add specific types as needed
/**
 * padLeft
 * @param str
 * @param length
 * @param char = " "
 */
export function padLeft(str: string, length: number, char = " "): string {
  if (str === null || str === undefined) throw new Error("Invalid input");
  return str.padStart(length, char);
}
