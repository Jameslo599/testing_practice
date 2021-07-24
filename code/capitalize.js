const capitalize = (string) => {
  const capitalizedLetter = string.charAt(0).toUpperCase();
  return string.replace(string.charAt(0), capitalizedLetter);
};
export default capitalize;
