function squaresOfMax(a, b, c) {
  return (c <= b && c <= a) ? a*a + b*b : squaresOfMax(c, a, b);
}

module.exports = squaresOfMax;
