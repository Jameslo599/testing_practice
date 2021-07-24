const reverseString = (string) => {
  const stringArray = string.split("");
  const reversedArray = stringArray.reverse().toString();
  return reversedArray.replace(/,/g, "");
};

export default reverseString;
