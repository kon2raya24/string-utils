
// Type exports for consumers
// Add specific types as needed
/**
 * padRight
 * @param str
 * @param length
 * @param char = " "
 */
export function padRight(str: string, length: number, char = " "): string {
  return str.padEnd(length, char);
}
