function capitalize(string) {
	capitalizedLetter = string.charAt(0).toUpperCase();
	return string.replace(string.charAt(0), capitalizedLetter);
  }
  module.exports = capitalize;