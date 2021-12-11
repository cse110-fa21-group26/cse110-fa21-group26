
const { recipeData } = require('./AllRecipes.js');
const { add, subtract, multiply, spoonacularSearch, strictSearch, looseSearch, searchJSON} = require("./test-functions");

var item1 = "Easy Sheet Pan Pancakes";
var item1vegan = item1 + ": vegan == false";
var item1smoothie = item1 + ": smoothie == false";
var item1pancake = item1 + ": pancake == true";
var item1bread = item1 + ": bread == false";
var item1egg = item1 + ": egg == true";
var item1potato = item1 + ": potato == false";

var item2 = "Delicious Limeade Triple Berry Smoothies";
var item2vegan = item2 + ": vegan == false";
var item2smoothie = item2 + ": smoothie == false";
var item2pancake = item2 + ": pancake == false";
var item2bread = item2 + ": bread == false";
var item2egg = item2 + ": egg == false";
var item2potato = item2 + ": potato == false";

var item3 = "Cheesy Potato Corn Scones";
var item3vegan = item3 + ": vegan == false";
var item3smoothie = item3 + ": smoothie == false";
var item3pancake = item3 + ": pancake == false";
var item3bread = item3 + ": bread == false";
var item3egg = item3 + ": egg == false";
var item3potato = item3 + ": potato == false";

var item4 = "Crushed Lentil Soup- Granola Style";
var item4vegan = item4 + ": vegan == false";
var item4smoothie = item4 + ": smoothie == false";
var item4pancake = item4 + ": pancake == false";
var item4bread = item4 + ": bread == false";
var item4egg = item4 + ": egg == false";
var item4potato = item4 + ": potato == false";

describe("Search Functions Success", () => {
  /* Spoonacular Search */

  describe("Spoonacular Search", () => {

    test(item1vegan, () => {
      expect(spoonacularSearch(recipeData[item1], "vegan")).toEqual(false)
    })
    test(item1smoothie, () => {
      expect(spoonacularSearch(recipeData[item1], "smoothie")).toEqual(false)
    })
    test(item1pancake, () => {
      expect(spoonacularSearch(recipeData[item1], "pancake")).toEqual(true)
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

    test(item2vegan, () => {
      expect(spoonacularSearch(recipeData[item2], "vegan")).toEqual(false)
    })
    test(item2smoothie, () => {
      expect(spoonacularSearch(recipeData[item2], "smoothie")).toEqual(false)
    })
    test(item2pancake, () => {
      expect(spoonacularSearch(recipeData[item2], "pancake")).toEqual(true)
    })
    test(item2bread, () => {
      expect(spoonacularSearch(recipeData[item2], "bread")).toEqual(false)
    })
    test(item2egg, () => {
      expect(spoonacularSearch(recipeData[item2], "egg")).toEqual(true)
    })
    test(item2potato, () => {
      expect(spoonacularSearch(recipeData[item2], "potato")).toEqual(false)
    })

    test(item3vegan, () => {
      expect(spoonacularSearch(recipeData[item3], "vegan")).toEqual(false)
    })
    test(item3smoothie, () => {
      expect(spoonacularSearch(recipeData[item3], "smoothie")).toEqual(false)
    })
    test(item3pancake, () => {
      expect(spoonacularSearch(recipeData[item3], "pancake")).toEqual(true)
    })
    test(item3bread, () => {
      expect(spoonacularSearch(recipeData[item3], "bread")).toEqual(false)
    })
    test(item3egg, () => {
      expect(spoonacularSearch(recipeData[item3], "egg")).toEqual(true)
    })
    test(item3potato, () => {
      expect(spoonacularSearch(recipeData[item3], "potato")).toEqual(false)
    })

    test(item4vegan, () => {
      expect(spoonacularSearch(recipeData[item4], "vegan")).toEqual(false)
    })
    test(item4smoothie, () => {
      expect(spoonacularSearch(recipeData[item4], "smoothie")).toEqual(false)
    })
    test(item4pancake, () => {
      expect(spoonacularSearch(recipeData[item4], "pancake")).toEqual(true)
    })
    test(item4bread, () => {
      expect(spoonacularSearch(recipeData[item4], "bread")).toEqual(false)
    })
    test(item4egg, () => {
      expect(spoonacularSearch(recipeData[item4], "egg")).toEqual(true)
    })
    test(item4potato, () => {
      expect(spoonacularSearch(recipeData[item4], "potato")).toEqual(false)
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