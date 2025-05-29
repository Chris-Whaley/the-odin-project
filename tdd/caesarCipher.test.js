import caesarCipher from "./caesarCipher";

test("wxyz shifts 3 places to zabc", () => {
  expect(caesarCipher("wxyz", 3)).toBe("zabc");
});

test("xyz shifts 26 places (i.e. alphabet length) back to xyz", () => {
  expect(caesarCipher("xyz", 26)).toBe("xyz");
});

test("HeLLo return KhOOr which preserves case sensitivity", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("punctuation is ignored", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
