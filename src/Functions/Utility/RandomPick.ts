/**
 * Picks a random data from the array
 * @param {T[]} array - The array of data
 * @returns {T} The random data
 */
export function RandomPick<T>(array: T[]): T {
	return array[Math.floor(Math.random() * array.length)];
}
