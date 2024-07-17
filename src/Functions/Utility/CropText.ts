/**
 * Crops the given text if it reaches the max length
 * @param {string} text - The text to crop
 * @param {number} max_length - The maximum length the text can reach
 * @param {boolean} add_ellipsis - Adds ellipsis (...) if the max length is reached
 * @param {number} start_from - The lenght to start the cropping
 *
 * @example
 * ```ts
 * console.log(CropText("Hello World", 5, true)); // Ouputs "Hello..."
 * ```
 */
export function CropText(
  text: string,
  max_length: number,
  add_ellipsis: boolean = false,
  start_from: number = 0,
): string {
  if (text.length <= max_length) return text;
  if (add_ellipsis) return text.substring(start_from, max_length) + "...";

  return text.substring(start_from, max_length);
}
