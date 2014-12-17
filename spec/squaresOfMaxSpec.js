var squaresOfMax = require('../squaresOfMax');

describe("squaresOfMax", function() {
  describe("all permutations", function() {
    it("(1, 2, 3)", function() {
      expect(squaresOfMax(1, 2, 3)).toBe(13);
    });

    it("(1, 3, 2)", function() {
      expect(squaresOfMax(1, 3, 2)).toBe(13);
    });

    it("(2, 1, 3)", function() {
      expect(squaresOfMax(2, 1, 3)).toBe(13);
    });

    it("(2, 3, 1)", function() {
      expect(squaresOfMax(2, 3, 1)).toBe(13);
    });

    it("(3, 2, 1)", function() {
      expect(squaresOfMax(3, 2, 1)).toBe(13);
    });

    it("(3, 1, 2)", function() {
      expect(squaresOfMax(3, 1, 2)).toBe(13);
    });
  });

  describe("same numbers", function() {
    it("(1, 1, 3)", function() {
      expect(squaresOfMax(1, 1, 3)).toBe(10);
    });

    it("(1, 3, 3)", function() {
      expect(squaresOfMax(1, 3, 3)).toBe(18);
    });

    it("(1, 1, 1)", function() {
      expect(squaresOfMax(1, 1, 1)).toBe(2);
    });
  });


  describe("negative numbers", function() {
    it("(-1, -2, -3)", function() {
      expect(squaresOfMax(-1, -2, -3)).toBe(5);
    });

    it("(-1, -1, -3)", function() {
      expect(squaresOfMax(-1, -1, -3)).toBe(2);
    });

    it("(-1, -2, 3)", function() {
      expect(squaresOfMax(-1, -2, 3)).toBe(10);
    });
  });
});
