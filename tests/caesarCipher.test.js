import caesarCipher from "../code/caesarCipher";

test("encrypt messages with a shift of 1", () => {
  expect(caesarCipher("Rulez. !")).toBe("Svmfa. !");
});
