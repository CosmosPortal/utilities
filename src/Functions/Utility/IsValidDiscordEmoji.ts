/**
 * Checks if a string is a Discord emoji
 * @param {string} emoji - The string to check if it's an emoji
 * 
 * @example
 * ```ts
 * if (!IsValidDiscordEmoji("🤷‍♂️")) return;
 * ```
 */
export function IsValidDiscordEmoji(emoji: string): boolean {
    const regex = /<a?:.+?:\d{18}>/gu;

    return regex.test(emoji);
};