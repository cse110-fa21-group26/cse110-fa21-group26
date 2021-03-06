

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
  function spoonacularSearch(jsonObj, query){
    return searchJSON(jsonObj, query, true);
  }
   /**
  * Strict Search
  *
  * @param {JSONObject} jsonObj JSON object to query within
  * @param {string} query string to query in the JSON
  * @returns {boolean} true if query string was found in JSON
  */
  function strictSearch(jsonObj, query){
    return searchJSON(jsonObj, query, true);
  }

   /**
  * Loose Search
  *
  * @param {JSONObject} jsonObj JSON object to query within
  * @param {string} query string to query in the JSON
  * @returns {boolean} true if query string was found in JSON
  */
  function looseSearch(jsonObj, query){
    return searchJSON(jsonObj, query, false);
  }

module.exports = {
  add,
  subtract,
  multiply,
  spoonacularSearch,
  strictSearch,
  looseSearch,
  searchJSON
}; 


 function searchJSON(jsonObj, query, strictSearch = true){

  let constrainStrings = strictSearch;  // Determines if we want a tight contraint for searching strings
  let maxLength = query.length;         // Strict Constraint constrains read strings to the same lenggth of the expected string 
  if(query == "" || typeof(query) != "string"){
      return false;
  }
  query = query.toLowerCase();

  let type = typeof(jsonObj);
  if(jsonObj == null){
      return false;
  }
  else if(type == "string"){
      if(constrainStrings) jsonObj = jsonObj.substring(0, maxLength);
      return (jsonObj.toLowerCase().search(query) != -1);
  }
  else if(type == "number"){
      return false;
  }
  else if(type == "boolean"){
      return false;
  }
  else if(jsonObj instanceof Array){
      let found = false;
      for(let i = 0; i < jsonObj.length; i++){
          local = searchJSON(jsonObj[i], query, strictSearch);
          found = (found || local)
      }
      return found;
  }
  else if(jsonObj instanceof Object){
      let found = false;
      for (const [key, value] of Object.entries(jsonObj)) {
          //If they key is a boolean for true / false for the key like -> Vegan : True
          if(searchJSON(key, query)){
              if(typeof(value) == "boolean") found = found || value;
          }
          else{
              local = searchJSON(jsonObj[key], query, strictSearch);
              found = (found || local)
          }
      }
      return found;
  }
  return false;
}