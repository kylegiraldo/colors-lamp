function isValidColor(color) {
    return typeof color === "string" && color.trim().length > 0;
  }
  
  module.exports = { isValidColor };