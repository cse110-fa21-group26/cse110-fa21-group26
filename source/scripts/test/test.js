import { searchJSON } from "./searchJSON";
import { recipeData } from '../recipes/AllRecipes.js';

const { add, subtract, multiply, strictSearch } = require("./test-functions");

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

describe("Search Functions Success", () => {
  /* Spoonacular Search */
  describe("Spoonacular Search", () => {
    test("Recipe[0], Vegan == True", () => {
      expect(spoonacularSearch(recipeData[0], "vegan")).toEqual(true)
    })
  });

  /* Strict Search */
  describe("Strict Search", () => {
    test("Recipe[0], Vegan == True", () => {
      expect(strictSearch(recipeData[0], "vegan")).toEqual(true)
    })
  });

  /* Loose Search */
  describe("Loose Search", () => {
    test("Recipe[0], Vegan == True", () => {
      expect(looseSearch(recipeData[0], "vegan")).toEqual(true)
    })
  });
})