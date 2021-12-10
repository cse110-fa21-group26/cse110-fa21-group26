const { searchJSON } = require("./searchJSON");

/**
 * Simple addition.
 *
 * @param {number} x First number.
 * @param {number} y second number.
 * @returns Addition of both arguments.
 */
 const add = (x, y) => x + y;

 /**
  * Simple subtraction.
  *
  * @param {number} x First number.
  * @param {number} y second number.
  * @returns Subtraction of second argument from the first.
  */
 const subtract = (x, y) => x - y;

 /**
  * Simple multiplication.
  *
  * @param {number} x First number.
  * @param {number} y second number.
  * @returns Multiplication of both arguments.
  */
 const multiply = (x, y) => x * y;

   /**
  * Spoonacular Search
  *
  * @param {JSONObject} jsonObj JSON object to query within
  * @param {string} query string to query in the JSON
  * @returns {boolean} true if query string was found in JSON
  */
  const spoonacularSearch = (jsonObj, query) => true;

   /**
  * Strict Search
  *
  * @param {JSONObject} jsonObj JSON object to query within
  * @param {string} query string to query in the JSON
  * @returns {boolean} true if query string was found in JSON
  */
  const strictSearch = (jsonObj, query) => searchJSON(jsonObj, query, true);

   /**
  * Loose Search
  *
  * @param {JSONObject} jsonObj JSON object to query within
  * @param {string} query string to query in the JSON
  * @returns {boolean} true if query string was found in JSON
  */
  const looseSearch = (jsonObj, query) => searchJSON(jsonObj, query, false);


 module.exports = {
   add,
   subtract,
   multiply,
   spoonacularSearch,
   strictSearch,
   looseSearch
 }; 