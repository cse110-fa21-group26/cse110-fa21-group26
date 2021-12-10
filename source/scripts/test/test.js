const { add, subtract, multiply } = require("./math_test");

describe("simple arithmetic", () => {
  describe("addition", () => {
    test("expect 2 + 3 = 5", () => {
      expect(add(2, 3)).toEqual(5);
    });
  });

  describe("subtract", () => {
    test("expect 5 - 2 = 3", () => {
      expect(subtract(5, 2)).toEqual(3);
    });
  });

  describe("multiply", () => {
    test("expect 2 * 3 = 6", () => {
      expect(multiply(2, 3)).toEqual(6);
    });
  });
}); 

const allStorage = require("./customtest");

describe("allStorage", () => {
  test("expect same size of array and local storage", () => {
    expect(allStorage().length).toEqual(localStorage.length);
  });
});