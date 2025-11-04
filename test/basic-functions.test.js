const { expect } = require("chai");
const {validateEmail } = require("../src/basic-functions.js");

it("should return true for a valid email", () => {
  const validEmail = "test@email.com";
  const result = validateEmail(validEmail);
  expect(result).to.be.true; // CHAI Assertion
})