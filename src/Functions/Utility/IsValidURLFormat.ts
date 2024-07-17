/**
 * Checks if a URL is in a valid format
 * @param {string} url - The URL to check
 *
 * @example
 * ```ts
 * if (!IsValidURLFormat("https://example.com/")) return;
 * ```
 */
export function IsValidURLFormat(url: string): boolean {
  const regex =
    /^(https?:\/\/)?((([a-zA-Z\d]([a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%@_.~+&:]*)*(\?[;&a-zA-Z\d%@_.,~+&:=-]*)?(#[-a-zA-Z\d_]*)?$/i;

  return regex.test(url);
}
