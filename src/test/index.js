function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is only defined for non-nagative integer");
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

module.exports = factorial;
