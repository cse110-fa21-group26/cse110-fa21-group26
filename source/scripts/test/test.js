
const { recipeData } = require('./AllRecipes.js');
const { add, subtract, multiply, spoonacularSearch, strictSearch, looseSearch, searchJSON} = require("./test-functions");

var item1 = "Easy Sheet Pan Pancakes";
var item1vegan = item1 + ": vegan";
var item1smoothie = item1 + ": smoothie";
var item1pancake = item1 + ": pancake";
var item1bread = item1 + ": bread";
var item1egg = item1 + ": egg";
var item1potato = item1 + ": potato";

var item2 = "Delicious Limeade Triple Berry Smoothies";
var item2vegan = item2 + ": vegan";
var item2smoothie = item2 + ": smoothie";
var item2pancake = item2 + ": pancake";
var item2bread = item2 + ": bread";
var item2egg = item2 + ": egg";
var item2potato = item2 + ": potato";

var item3 = "Cheesy Potato Corn Scones";
var item3vegan = item3 + ": vegan";
var item3smoothie = item3 + ": smoothie";
var item3pancake = item3 + ": pancake";
var item3bread = item3 + ": bread";
var item3egg = item3 + ": egg";
var item3potato = item3 + ": potato";

var item4 = "Crushed Lentil Soup- Granola Style";
var item4vegan = item4 + ": vegan";
var item4smoothie = item4 + ": smoothie";
var item4pancake = item4 + ": pancake";
var item4bread = item4 + ": bread";
var item4egg = item4 + ": egg";
var item4potato = item4 + ": potato";

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
      expect(spoonacularSearch(recipeData[item2], "smoothie")).toEqual(true)
    })
    test(item2pancake, () => {
      expect(spoonacularSearch(recipeData[item2], "pancake")).toEqual(false)
    })
    test(item2bread, () => {
      expect(spoonacularSearch(recipeData[item2], "bread")).toEqual(false)
    })
    test(item2egg, () => {
      expect(spoonacularSearch(recipeData[item2], "egg")).toEqual(false)
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
      expect(spoonacularSearch(recipeData[item3], "pancake")).toEqual(false)
    })
    test(item3bread, () => {
      expect(spoonacularSearch(recipeData[item3], "bread")).toEqual(false)
    })
    test(item3egg, () => {
      expect(spoonacularSearch(recipeData[item3], "egg")).toEqual(false)
    })
    test(item3potato, () => {
      expect(spoonacularSearch(recipeData[item3], "potato")).toEqual(true)
    })

    test(item4vegan, () => {
      expect(spoonacularSearch(recipeData[item4], "vegan")).toEqual(true)
    })
    test(item4smoothie, () => {
      expect(spoonacularSearch(recipeData[item4], "smoothie")).toEqual(false)
    })
    test(item4pancake, () => {
      expect(spoonacularSearch(recipeData[item4], "pancake")).toEqual(false)
    })
    test(item4bread, () => {
      expect(spoonacularSearch(recipeData[item4], "bread")).toEqual(false)
    })
    test(item4egg, () => {
      expect(spoonacularSearch(recipeData[item4], "egg")).toEqual(false)
    })
    test(item4potato, () => {
      expect(spoonacularSearch(recipeData[item4], "potato")).toEqual(false)
    })
  });

  /* Strict Search */
  describe("Strict Search", () => {
    test(item1vegan, () => {
      expect(strictSearch(recipeData[item1], "vegan")).toEqual(false)
    })
    test(item1smoothie, () => {
      expect(strictSearch(recipeData[item1], "smoothie")).toEqual(false)
    })
    test(item1pancake, () => {
      expect(strictSearch(recipeData[item1], "pancake")).toEqual(true)
    })
    test(item1bread, () => {
      expect(strictSearch(recipeData[item1], "bread")).toEqual(false)
    })
    test(item1egg, () => {
      expect(strictSearch(recipeData[item1], "egg")).toEqual(true)
    })
    test(item1potato, () => {
      expect(strictSearch(recipeData[item1], "potato")).toEqual(false)
    })

    test(item2vegan, () => {
      expect(strictSearch(recipeData[item2], "vegan")).toEqual(false)
    })
    test(item2smoothie, () => {
      expect(strictSearch(recipeData[item2], "smoothie")).toEqual(true)
    })
    test(item2pancake, () => {
      expect(strictSearch(recipeData[item2], "pancake")).toEqual(false)
    })
    test(item2bread, () => {
      expect(strictSearch(recipeData[item2], "bread")).toEqual(false)
    })
    test(item2egg, () => {
      expect(strictSearch(recipeData[item2], "egg")).toEqual(false)
    })
    test(item2potato, () => {
      expect(strictSearch(recipeData[item2], "potato")).toEqual(false)
    })

    test(item3vegan, () => {
      expect(strictSearch(recipeData[item3], "vegan")).toEqual(false)
    })
    test(item3smoothie, () => {
      expect(strictSearch(recipeData[item3], "smoothie")).toEqual(false)
    })
    test(item3pancake, () => {
      expect(strictSearch(recipeData[item3], "pancake")).toEqual(false)
    })
    test(item3bread, () => {
      expect(strictSearch(recipeData[item3], "bread")).toEqual(false)
    })
    test(item3egg, () => {
      expect(strictSearch(recipeData[item3], "egg")).toEqual(false)
    })
    test(item3potato, () => {
      expect(strictSearch(recipeData[item3], "potato")).toEqual(true)
    })

    test(item4vegan, () => {
      expect(strictSearch(recipeData[item4], "vegan")).toEqual(true)
    })
    test(item4smoothie, () => {
      expect(strictSearch(recipeData[item4], "smoothie")).toEqual(false)
    })
    test(item4pancake, () => {
      expect(strictSearch(recipeData[item4], "pancake")).toEqual(false)
    })
    test(item4bread, () => {
      expect(strictSearch(recipeData[item4], "bread")).toEqual(false)
    })
    test(item4egg, () => {
      expect(strictSearch(recipeData[item4], "egg")).toEqual(false)
    })
    test(item4potato, () => {
      expect(strictSearch(recipeData[item4], "potato")).toEqual(false)
    })
  });

  /* Loose Search */
  describe("Loose Search", () => {
    test(item1vegan, () => {
      expect(looseSearch(recipeData[item1], "vegan")).toEqual(false)
    })
    test(item1smoothie, () => {
      expect(looseSearch(recipeData[item1], "smoothie")).toEqual(false)
    })
    test(item1pancake, () => {
      expect(looseSearch(recipeData[item1], "pancake")).toEqual(true)
    })
    test(item1bread, () => {
      expect(looseSearch(recipeData[item1], "bread")).toEqual(true)
    })
    test(item1egg, () => {
      expect(looseSearch(recipeData[item1], "egg")).toEqual(true)
    })
    test(item1potato, () => {
      expect(looseSearch(recipeData[item1], "potato")).toEqual(false)
    })

    test(item2vegan, () => {
      expect(looseSearch(recipeData[item2], "vegan")).toEqual(false)
    })
    test(item2smoothie, () => {
      expect(looseSearch(recipeData[item2], "smoothie")).toEqual(true)
    })
    test(item2pancake, () => {
      expect(looseSearch(recipeData[item2], "pancake")).toEqual(false)
    })
    test(item2bread, () => {
      expect(looseSearch(recipeData[item2], "bread")).toEqual(false)
    })
    test(item2egg, () => {
      expect(looseSearch(recipeData[item2], "egg")).toEqual(true)
    })
    test(item2potato, () => {
      expect(looseSearch(recipeData[item2], "potato")).toEqual(false)
    })

    test(item3vegan, () => {
      expect(looseSearch(recipeData[item3], "vegan")).toEqual(false)
    })
    test(item3smoothie, () => {
      expect(looseSearch(recipeData[item3], "smoothie")).toEqual(false)
    })
    test(item3pancake, () => {
      expect(looseSearch(recipeData[item3], "pancake")).toEqual(false)
    })
    test(item3bread, () => {
      expect(looseSearch(recipeData[item3], "bread")).toEqual(false)
    })
    test(item3egg, () => {
      expect(looseSearch(recipeData[item3], "egg")).toEqual(true)
    })
    test(item3potato, () => {
      expect(looseSearch(recipeData[item3], "potato")).toEqual(true)
    })

    test(item4vegan, () => {
      expect(looseSearch(recipeData[item4], "vegan")).toEqual(true)
    })
    test(item4smoothie, () => {
      expect(looseSearch(recipeData[item4], "smoothie")).toEqual(false)
    })
    test(item4pancake, () => {
      expect(looseSearch(recipeData[item4], "pancake")).toEqual(false)
    })
    test(item4bread, () => {
      expect(looseSearch(recipeData[item4], "bread")).toEqual(false)
    })
    test(item4egg, () => {
      expect(looseSearch(recipeData[item4], "egg")).toEqual(false)
    })
    test(item4potato, () => {
      expect(looseSearch(recipeData[item4], "potato")).toEqual(false)
    })
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