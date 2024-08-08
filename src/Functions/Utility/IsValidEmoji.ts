/**
 * Checks if a string is a Discord or unicode emoji
 * @param {string} emoji - The string to check if it's an emoji
 * @returns {boolean} True if the string is an emoji or in a Discord emoji format, false otherwise
 */
export function IsValidEmoji(emoji: string): boolean {
	const regex = /<?(a)?:?(\w{2,32}):(\d{17,19})>|\p{Extended_Pictographic}/gu;

	return regex.test(emoji);
}
