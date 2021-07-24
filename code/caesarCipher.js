const convertedArray = [];

const codeChange = (string) => {
  for (let i = 0; i < string.length; i += 1) {
    if (string.charCodeAt(i) === 122) {
      const code = string.charCodeAt(i) - 25;
      convertedArray.push(String.fromCharCode(code));
    } else if (string.charCodeAt(i) === 90) {
      const code = string.charCodeAt(i) - 25;
      convertedArray.push(String.fromCharCode(code));
    } else if (string.charAt(i).match(/^[a-zA-Z]+$/)) {
      const code = string.charCodeAt(i) + 1;
      convertedArray.push(String.fromCharCode(code));
    } else {
      convertedArray.push(string.charAt(i));
    }
  }
};

const makeString = () => {
  const newString = convertedArray.toString();
  return newString.replace(/,/g, "");
};

const caesarCipher = (string) => {
  codeChange(string);
  return makeString();
};

export default caesarCipher;
