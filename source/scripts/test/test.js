
const { recipeData } = require('./AllRecipes.js');
const { add, subtract, multiply, spoonacularSearch, strictSearch, looseSearch, searchJSON} = require("./test-functions");

describe("Search Functions Success", () => {
  /* Spoonacular Search */
  describe("Spoonacular Search", () => {
    console.log("TEST", spoonacularSearch(recipeData["Berry Banana Breakfast Smoothie"], "vegan"));
    test("Berry Banana Breakfast Smoothie, Vegan == True", () => {
      console.log("TEST", spoonacularSearch(recipeData["Berry Banana Breakfast Smoothie"], "vegan"));
      expect(spoonacularSearch(data["Berry Banana Breakfast Smoothie"], "vegan")).toEqual(true)
    })
    test("Berry Banana Breakfast Smoothie, Smoothie == True", () => {
      expect(spoonacularSearch(data["Berry Banana Breakfast Smoothie"], "smoothie")).toEqual(true)
    })
    test("Berry Banana Breakfast Smoothie, Pancake == True", () => {
      expect(spoonacularSearch(data["Berry Banana Breakfast Smoothie"], "pancake")).toEqual(true)
    })
    test("Berry Banana Breakfast Smoothie, Bread == True", () => {
      expect(spoonacularSearch(data["Berry Banana Breakfast Smoothie"], "bread")).toEqual(true)
    })
    test("Berry Banana Breakfast Smoothie, Egg == True", () => {
      expect(spoonacularSearch(data["Berry Banana Breakfast Smoothie"], "egg")).toEqual(true)
    })
    test("Berry Banana Breakfast Smoothie, Potato == True", () => {
      expect(spoonacularSearch(data["Berry Banana Breakfast Smoothie"], "potato")).toEqual(true)
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