/**
 * Encodes the text as a valid component of URI, it will only encodes special characters
 * @param {string} text - The text to encode
 *
 * @example
 * ```ts
 * console.log(UriEncode("Random symbols: !@#$")); // URI encode the symbols only
 * ```
 */
export function UriEncode(text: string): string {
  const regex = /[\x00-\x1F\x7F-\x9F"\\]/g;

  return text.replace(regex, (match) => encodeURIComponent(match));
}
