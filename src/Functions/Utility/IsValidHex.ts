/**
 * Checks if the given string is a hex code
 * @param {string} color - The hex code, either containing a # (#FFFFFF) or not (FFFFFF)
 *
 * @example
 * ```
 * if (!IsValidHex("FFB7C5")) return;
 * ```
 */
export function IsValidHex(color: string): boolean {
  const regex = /(^#[0-9A-F]{6}$)|(^[0-9A-F]{6}$)/i;

  return regex.test(color);
}
