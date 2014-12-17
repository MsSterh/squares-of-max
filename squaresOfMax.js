function sq(a) { return a * a } 

function squaresOfMax(a, b, c) {
  var res;

  if (a >= b && b >= c) {
    res = sq(a) + sq(b);
  } else if (a <= b && b <= c) {
    res = sq(b) + sq(c);
  } else {
    res = squaresOfMax(c, a, b);
  }

  return res;
}

module.exports = squaresOfMax;
