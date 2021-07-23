import capitalize from './../code/capitalize'

test('takes a string and returns string with first letter capitalized', () => {
  expect(capitalize('quality')).toBe('Quality');
});