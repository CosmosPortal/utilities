/**
 * Checks if the given string is a hex code
 * @param {string} color - The hex code, either containing a # (#FFFFFF) or not (FFFFFF)
 * @param {boolean} allowHash - If true, allows # (#FFFFFF) in the hex code
 * @returns {boolean} True if the string is a valid hex code, false otherwise
 */
export function IsValidHex(color: string, allowHash: boolean = true): boolean {
	const regex = !allowHash ? /^[0-9A-F]{6}$/i : /^#[0-9A-F]{6}$|^[0-9A-F]{6}$/i;

	return regex.test(color);
}
