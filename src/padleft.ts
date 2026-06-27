
// Type exports for consumers
// Add specific types as needed
export function padLeft(str: string, length: number, char = " "): string {
  if (str === null || str === undefined) throw new Error("Invalid input");
  return str.padStart(length, char);
}
