/**
 * Crops the given text if it reaches the max length
 * @param {string} text - The text to crop
 * @param {number} maxLength - The maximum length the text can reach
 * @param {boolean} addEllipsis - Adds ellipsis (...) if the max length is reached
 * @param {number} startFrom - The lenght to start the cropping
 * @returns {string} The cropped text
 */
export function CropText(text: string, maxLength: number, addEllipsis: boolean = false, startFrom: number = 0): string {
	if (text.length <= maxLength) return text;
	if (addEllipsis) return text.substring(startFrom, maxLength) + "...";

	return text.substring(startFrom, maxLength);
}
