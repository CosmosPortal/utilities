/**
 * Checks if the given string is a hex code
 * @param {string} color - The hex code, either containing a # (#FFFFFF) or not (FFFFFF)
 * @returns {boolean} True if the string is a valid hex code, false otherwise
 */
export function IsValidHex(color: string): boolean {
	const regex = /(^#[0-9A-F]{6}$)|(^[0-9A-F]{6}$)/i;

	return regex.test(color);
}
