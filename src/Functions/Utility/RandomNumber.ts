/**
 * Returns a random number between the two given
 * @param {number} start - The minimum number to start from
 * @param {number} end - The maximum number to end at
 * @returns {number} A random number
 */
export function RandomNumber(start: number, end: number): number {
	return Math.floor(Math.random() * (end - start + 1)) + start;
}
