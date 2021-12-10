import { searchJSON } from "./searchJSON";

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

describe("Search Functions", () => {
  /* Spoonacular Search */
  describe("Spoonacular Search", () => {
    test("test", () => {
      expect(true);
    })
  });

  /* Strict Search */
  describe("Strict Search", () => {
    test("test", () => {
      expect(true);
    })
  });

  /* Loose Search */
  describe("Loose Search", () => {
    test("test", () => {
      expect(true);
    })
  });
})