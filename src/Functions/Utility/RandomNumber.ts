/**
 * Returns a random number between the two given
 * @param {number} start - The minimum number to start from
 * @param {number} end - The maximum number to end at
 *
 * @example
 * ```ts
 * console.log(RandomNumber(100, 1000)); // Ouputs a number from 100-1000
 * ```
 */
export function RandomNumber(start: number, end: number): number {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}
