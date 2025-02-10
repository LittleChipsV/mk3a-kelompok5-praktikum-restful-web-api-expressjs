const xss = require("xss");

const sanitizeInput = (input) => {
  if (typeof input === "string") {
    return xss(input);
  }
  
  return input;
};

module.exports = sanitizeInput;
