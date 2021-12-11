
const { recipeData } = require('./AllRecipes.js');
const { add, subtract, multiply, spoonacularSearch, strictSearch, looseSearch, searchJSON} = require("./test-functions");

describe("Search Functions Success", () => {
  /* Spoonacular Search */
  
  var item1 = "Strawberry Shortcake Pancakes";
  describe("Spoonacular Search", () => {
    test("Strawberry Shortcake Pancakes, Vegan == True", () => {
      expect(spoonacularSearch(recipeData[item1], "vegan")).toEqual(true)
    })
    test("Strawberry Shortcake Pancakes, Smoothie == True", () => {
      expect(spoonacularSearch(recipeData[item1], "smoothie")).toEqual(true)
    })
    test("Strawberry Shortcake Pancakes, Pancake == True", () => {
      expect(spoonacularSearch(recipeData[item1], "pancake")).toEqual(true)
    })
    test("Strawberry Shortcake Pancakes, Bread == True", () => {
      expect(spoonacularSearch(recipeData[item1], "bread")).toEqual(true)
    })
    test("Strawberry Shortcake Pancakes, Egg == True", () => {
      expect(spoonacularSearch(recipeData[item1], "egg")).toEqual(true)
    })
    test("Strawberry Shortcake Pancakes, Potato == True", () => {
      expect(spoonacularSearch(recipeData[item1], "potato")).toEqual(true)
    })

  });

  /* Strict Search */
  describe("Strict Search", () => {

  });

  /* Loose Search */
  describe("Loose Search", () => {

  });
})





/* Baseline Tests */

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