
// Type exports for consumers
// Add specific types as needed
/**
 * capitalize
 * @param str
 */
export function capitalize(str: string): string {
  if (str === null || str === undefined) throw new Error("Invalid input");
  return str.replace(/\b\w/g, c => c.toUpperCase());
}
