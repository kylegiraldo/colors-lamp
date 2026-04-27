const fs = require("fs");
const path = require("path");

test("API folder contains required PHP endpoints", () => {
  const apiPath = path.join(__dirname, "../api");

  expect(fs.existsSync(path.join(apiPath, "AddColor.php"))).toBe(true);
  expect(fs.existsSync(path.join(apiPath, "Login.php"))).toBe(true);
  expect(fs.existsSync(path.join(apiPath, "SearchColors.php"))).toBe(true);
});

test("SearchColors endpoint is a PHP file", () => {
  const searchColorsPath = path.join(__dirname, "../api/SearchColors.php");
  const fileContent = fs.readFileSync(searchColorsPath, "utf8");

  expect(fileContent).toContain("<?php");
});