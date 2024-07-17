/**
 * Checks if a string is an unicode emoji
 * @param {string} emoji - The string to check if it's an emoji
 * 
 * @example
 * ```ts
 * if (!IsValidUnicodeEmoji("🤷‍♂️")) return;
 * ```
 */
export function IsValidUnicodeEmoji(emoji: string): boolean {
    const regex = /\p{Extended_Pictographic}/gu;

    return regex.test(emoji);
};