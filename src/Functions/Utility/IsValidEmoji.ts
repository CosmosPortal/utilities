/**
 * Checks if a string is a Discord or unicode emoji
 * @param {string} emoji - The string to check if it's an emoji
 *
 * @example
 * ```ts
 * if (!IsValidEmoji("🤷‍♂️")) return;
 * ```
 */
export function IsValidEmoji(emoji: string): boolean {
  const regex = /<a?:.+?:\d{18}>|\p{Extended_Pictographic}/gu;

  return regex.test(emoji);
}
