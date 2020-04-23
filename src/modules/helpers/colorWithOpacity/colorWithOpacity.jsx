// @flow
/*
 * colorWithOpacity(color: string, opacity: number): string
 * Returns the color with opacity
 */
const colorWithOpacity = (color, opacity) => {
  if (typeof color !== 'string') {
    throw new Error('colorWithOpacity: The color must be a string');
  }
  let evaluatingColor = color.replace('#', '');
  let evaluatingOpacity = Math.round(+opacity);
  if (typeof evaluatingOpacity !== 'number' || isNaN(evaluatingOpacity) || !isFinite(evaluatingOpacity) || evaluatingOpacity < 0 || evaluatingOpacity > 100) {
    throw new Error('colorWithOpacity: The opacity must be a number, finite and between 0 and 100 (inclusive)');
  }
  const validColors = '0123456789abcdf'.split('');
  if ((evaluatingColor.length !== 3 && evaluatingColor.length !== 6) || evaluatingColor.split('').some(letter => !validColors.includes(letter.toLowerCase()))) {
    throw new Error('colorWithOpacity: The color is not valid');
  }
  if (evaluatingColor.length === 3) {
    evaluatingColor = evaluatingColor.split('').reduce((acc, letter) => acc + letter + letter, '');
  }

  const parsedOpacity = percentToHex(evaluatingOpacity);
  return '#' + evaluatingColor + parsedOpacity;
};

/*
 * https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
 * percentToHex(percent: number): string
 * Returns the correct hexadecimal value for transparency
 */
const percentToHex = percent => {
  const intValue = Math.round((percent / 100) * 255); // map percent to nearest integer (0 - 255)
  const hexValue = intValue.toString(16); // get hexadecimal representation
  return hexValue.padStart(2, '0').toUpperCase(); // format with leading 0 and upper case characters
};

export default colorWithOpacity;
