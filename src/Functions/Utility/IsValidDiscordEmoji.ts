/**
 * Checks if a string is a Discord emoji
 * @param {string} emoji - The string to check if it's an emoji
 * @returns {boolean} True if the string is in a Discord emoji format, false otherwise
 */
export function IsValidDiscordEmoji(emoji: string): boolean {
	const regex = /<?(a)?:?(\w{2,32}):(\d{17,19})>/gu;

	return regex.test(emoji);
}
