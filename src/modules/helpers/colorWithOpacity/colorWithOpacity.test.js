import colorWithOpacity from './colorWithOpacity.jsx';

test('should throw an error if the color is not a string', () => {
  const color = 23;
  const opacity = 22;
  const result = () => colorWithOpacity(color, opacity);
  expect(result).toThrow(Error);
});

test('should throw an error if the opacity is not a number', () => {
  const color = '#333';
  const opacity = NaN;
  const result = () => colorWithOpacity(color, opacity);
  expect(result).toThrow(Error);
});

test('should throw an error if the color is not valid because it has the incorrect length', () => {
  const color = '#ABCF';
  const opacity = 32;
  const result = () => colorWithOpacity(color, opacity);
  expect(result).toThrow(Error);
});

test('should throw an error if the color is not valid because it has some non-hexadecimal numbers', () => {
  const color = '#ABG';
  const opacity = 32;
  const result = () => colorWithOpacity(color, opacity);
  expect(result).toThrow(Error);
});

test('should return the correct color with 6 numbers', () => {
  const color = '#333335';
  const opacity = 86;
  const result = colorWithOpacity(color, opacity);
  expect(result).toBe('#333335DB');
});

test('should return the correct color with 3 numbers', () => {
  const color = '#abc';
  const opacity = 25;
  const result = colorWithOpacity(color, opacity);
  expect(result).toBe('#aabbcc40');
});

test('should return the correct color if # is not passed', () => {
  const color = '#AABBCC';
  const opacity = 25;
  const result = colorWithOpacity(color, opacity);
  expect(result).toBe('#AABBCC40');
});
