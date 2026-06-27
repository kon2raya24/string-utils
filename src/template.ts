
// Type exports for consumers
// Add specific types as needed
/**
 * template
 * @param str
 * @param vars
 * @param string>
 */
export function template(str: string, vars: Record<string, string>): string {
  if (str === null || str === undefined) throw new Error("Invalid input");
  return str.replace(/\{\{(\w+)\}\}/g, (_, key) => vars[key] ?? `{{${key}}}`);
}
