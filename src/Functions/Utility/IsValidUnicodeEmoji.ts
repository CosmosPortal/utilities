/**
 * Checks if a string is an unicode emoji
 * @param {string} emoji - The string to check if it's an emoji
 * @returns {boolean} True if the string is an emoji, false otherwise
 */
export function IsValidUnicodeEmoji(emoji: string): boolean {
	const regex = /\p{Extended_Pictographic}/gu;

	return regex.test(emoji);
}
