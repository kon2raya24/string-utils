export function padRight(str: string, length: number, char = " "): string {
  return str.padEnd(length, char);
}
