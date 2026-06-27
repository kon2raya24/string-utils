
// Type exports for consumers
// Add specific types as needed
/**
 * padRight
 * @param str
 * @param length
 * @param char = " "
 */
export function padRight(str: string, length: number, char = " "): string {
  if (str === null || str === undefined) throw new Error("Invalid input");
  return str.padEnd(length, char);
}
