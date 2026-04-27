const { isValidColor } = require("../public/js/colorUtils");

test("valid color name passes validation", () => {
  expect(isValidColor("blue")).toBe(true);
});

test("empty color name fails validation", () => {
  expect(isValidColor("")).toBe(false);
});