/**
 * padRight
 * @param str
 * @param length
 * @param char = " "
 */
export function padRight(str: string, length: number, char = " "): string {
  return str.padEnd(length, char);
}
