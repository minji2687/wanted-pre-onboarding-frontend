const factorial = require("../src/test");

describe("factorial function", () => {
  it("correctly computes factorial of a positive integer number", () => {
    expect(factorial(3)).toEqual(6);
  });

  it("throw an error if a ngative input is povided", () => {
    expect(() => factorial(-1)).toThrow(
      "Factorial is only defined for non-nagative integer"
    );
  });
});
