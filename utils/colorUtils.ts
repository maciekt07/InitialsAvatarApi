/**
 * Returns the appropriate font color (either black or white) based on the provided background color in hex format.
 * @param {string} backgroundColor - The background color in hexformat (e.g., "#FFFFFF").
 * @returns {string} The font color in hex format.
 */
export const getFontColor = (backgroundColor: string): string => {
  const hexColor = backgroundColor.replace("#", "");
  const red = parseInt(hexColor.substr(0, 2), 16);
  const green = parseInt(hexColor.substr(2, 2), 16);
  const blue = parseInt(hexColor.substr(4, 2), 16);
  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
  return brightness > 125 ? "#101727" : "#f0f0f0";
};

/**
 * Checks if a given string represents a valid hexadecimal color code.
 * @param {string} value The string to be checked.
 * @returns {boolean} True if the string is a valid hexadecimal color code, false otherwise.
 */
export const isHexColor = (value: string): boolean =>
  /^#[0-9A-Fa-f]{6}$/.test(value);

/**
Creates a new shade of a given hex color by changing its brightness by a given magnitude.
@param {string} hexColor - A hexadecimal color code.
@param {number} magnitude - A value to adjust the brightness of the color.
@returns {string} - A new hex color code with adjusted brightness.
@example newShade("#03a688", 30)
*/
export const lightenColor = (hexColor: string, magnitude: number): string => {
  hexColor = hexColor.replace(`#`, ``);
  if (hexColor.length === 6) {
    const decimalColor = parseInt(hexColor, 16);
    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  } else {
    return hexColor;
  }
};
