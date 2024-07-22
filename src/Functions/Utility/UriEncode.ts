/**
 * Encodes the text as a valid component of URI, it will only encodes special characters
 * @param {string} text - The text to encode
 * @returns {string} The encoded text
 */
export function UriEncode(text: string): string {
	const regex = /[\x00-\x1F\x7F-\x9F"\\]/g;

	return text.replace(regex, (match) => encodeURIComponent(match));
}
