/**
 * Shuffles the elements of an array
 * @param {T[]} array - The array to shuffle
 * @returns {T[]} The shuffled array
 */
export function ArrayShuffle<T>(array: T[]): T[] {
    const data = [...array]

    for (let index = array.length - 1; index > 0; index--) {
        const i = Math.floor(Math.random() * (index + 1));
        [data[index], data[i]] = [data[i], data[index]];
    }

    return data;
}