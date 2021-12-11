
const { recipeData } = require('./AllRecipes.js');
const { add, subtract, multiply, spoonacularSearch, strictSearch, looseSearch, searchJSON} = require("./test-functions");

describe("Search Functions Success", () => {
  /* Spoonacular Search */
  
  var item1 = "Easy Sheet Pan Pancakes";
  var item1vegan = item1 + ": vegan == false";
  var item1smoothie = item1 + ": smoothie == false";
  var item1pancake = item1 + ": pancake == false";
  var item1bread = item1 + ": bread == false";
  var item1egg = item1 + ": egg == false";
  var item1potato = item1 + ": potato == false";

  describe("Spoonacular Search", () => {
    test(item1vegan, () => {
      expect(spoonacularSearch(recipeData[item1], "vegan")).toEqual(false)
    })
    test(item1smoothie, () => {
      expect(spoonacularSearch(recipeData[item1], "smoothie")).toEqual(false)
    })
    test(item1pancake, () => {
      expect(spoonacularSearch(recipeData[item1], "pancake")).toEqual(false)
    })
    test(item1bread, () => {
      expect(spoonacularSearch(recipeData[item1], "bread")).toEqual(false)
    })
    test(item1egg, () => {
      expect(spoonacularSearch(recipeData[item1], "egg")).toEqual(true)
    })
    test(item1potato, () => {
      expect(spoonacularSearch(recipeData[item1], "potato")).toEqual(false)
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