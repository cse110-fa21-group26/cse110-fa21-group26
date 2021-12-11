
const { recipeData } = require('./AllRecipes.js');
const { add, subtract, multiply, spoonacularSearch, strictSearch, looseSearch, searchJSON} = require("./test-functions");

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
    test("Recipe[1], Vegan == False", () => {
      expect(spoonacularSearch(recipeData[1], "vegan")).toEqual(true)
    })

    test("Recipe[1], Smoothie == True", () => {
      expect(spoonacularSearch(recipeData[0], "berry")).toEqual(true)
    })
    test("Recipe[0], Smoothie == False", () => {
      expect(spoonacularSearch(recipeData[1], "berry")).toEqual(false)
    })

    test("Recipe[1], Pancake == True", () => {
      expect(spoonacularSearch(recipeData[6], "pancake")).toEqual(true)
    })
    test("Recipe[0], Pancake == False", () => {
      expect(spoonacularSearch(recipeData[1], "pancake")).toEqual(false)
    })
  });

  /* Strict Search */
  describe("Strict Search", () => {

  });

  /* Loose Search */
  describe("Loose Search", () => {

  });
})