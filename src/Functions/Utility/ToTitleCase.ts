/**
 * Converts a text to title case
 * @param {string} text - The text to convert to title case
 *
 * @example
 * ```ts
 * console.log(ToTitleCase("hello world")); // Output: "Hello World"
 * ```
 */
export function ToTitleCase(text: string, separator: string = " "): string {
  const data = text
    .split(separator)
    .map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
    .join(separator);

  return data;
}
