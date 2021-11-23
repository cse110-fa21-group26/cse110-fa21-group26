export { 
    searchForKey, 
    getTitle, 
    getYield, 
    getCategories, 
    getDescription, 
    getImage,
    getUrl,
    getOrganization,
    convertTime,
    getIngredients,
    getInstructions
}

/**
 * Recursively search for a key nested somewhere inside an object
 * @param {Object} object the object with which you'd like to search
 * @param {String} key the key that you are looking for in the object
 * @returns {*} the value of the found key
 */
 function searchForKey(object, key) {
    var value;
    Object.keys(object).some(function (k) {
      if (k === key) {
        value = object[k];
        return true;
      }
      if (object[k] && typeof object[k] === 'object') {
        value = searchForKey(object[k], key);
        return value !== undefined;
      }
    });
    return value;
  }
  
  /**
   * Extract the title of the recipe from the given recipe schema JSON obejct
   * @param {Object} data Raw recipe JSON to find the image of
   * @returns {String} If found, returns the recipe title
   */
  function getTitle(data) {
    if (data.name) return data.name;
    if (data['@graph']) {
      for (let i = 0; i < data['@graph'].length; i++) {
        if (data['@graph'][i]['@type'] == 'Recipe') {
          if (data['@graph'][i]['name']) return data['@graph'][i]['name'];
        };
      }
    }
    return null;
  }
  
  /**
   * Extract the yield of the recipe from the given recipe schema JSON obejct
   * @param {Object} data Raw recipe JSON to find the image of
   * @returns {String} If found, returns the recipe yield
   */
  function getYield(data) {
    if (data.recipeYield) return data.recipeYield;
    if (data['@graph']) {
      for (let i = 0; i < data['@graph'].length; i++) {
        if (data['@graph'][i]['@type'] == 'Recipe') {
          if (data['@graph'][i]['recipeYield']) {
            if (Array.isArray(data['@graph'][i]['recipeYield'])) {
              return data['@graph'][i]['recipeYield'][0];
            } else if (typeof data['@graph'][i]['recipeYield'] == 'string') {
              return data['@graph'][i]['recipeYield'];
            }
          }
        }
      }
    }
    return null;
  }
  
  /**
   * Extract the categories of the recipe from the given recipe schema JSON obejct
   * @param {Object} data Raw recipe JSON to find the image of
   * @returns {String} If found, returns the recipe categories as a string
   */
  function getCategories(data) {
    let categories = null;
    if (data.recipeCategory) {
      categories = data.recipeCategory
    } else if (data['@graph']) {
      for (let i = 0; i < data['@graph'].length; i++) {
        if (data['@graph'][i]['@type'] == 'Recipe') {
          if (data['@graph'][i]['recipeCategory']) {
            categories = data['@graph'][i]['recipeCategory'];
          }
        };
      }
    }
    if (Array.isArray(categories)) categories = categories.join(', ');
    return categories.toLowerCase();
  }
  
  /**
   * Extract the description of the recipe from the given recipe schema JSON obejct
   * @param {Object} data Raw recipe JSON to find the image of
   * @returns {String} If found, returns the recipe description
   */
  function getDescription(data) {
    if (data.description) return data.description;
    if (data['@graph']) {
      for (let i = 0; i < data['@graph'].length; i++) {
        if (data['@graph'][i]['@type'] == 'Recipe') {
          return data['@graph'][i]['description'];
        }
      }
    }
    return null;
  }
  
  /**
   * Extract a usable image from the given recipe schema JSON object
   * @param {Object} data Raw recipe JSON to find the image of
   * @returns {String} If found, returns the URL of the image as a string, otherwise null
   */
  function getImage(data) {
    if (data.image?.url) return data.image.url;
    if (data.image?.contentUrl) return data.image.contentUrl;
    if (data.image?.thumbnail) return data.image.thumbnail;
    if (data['@graph']) {
      for (let i = 0; i < data['@graph'].length; i++) {
        if (data['@graph'][i]['@type'] == 'ImageObject') {
          if (data['@graph'][i]['url']) return data['@graph'][i]['url'];
          if (data['@graph'][i]['contentUrl']) return data['@graph'][i]['contentUrl'];
          if (data['@graph'][i]['thumbnailUrl']) return data['@graph'][i]['thumbnailUrl'];
        };
      }
    }
    return null;
  }
  
  /**
   * Extract the URL from the given recipe schema JSON object
   * @param {Object} data Raw recipe JSON to find the URL of
   * @returns {String} If found, it returns the URL as a string, otherwise null
   */
  function getUrl(data) {
    if (data.url) return data.url;
    if (data['@graph']) {
      for (let i = 0; i < data['@graph'].length; i++) {
        if (data['@graph'][i]['@type'] == 'Recipe') return data['@graph'][i]['@id'];
      }
    };
    return null;
  }
  
  /**
   * Similar to getUrl(), this function extracts the organizations name from the
   * schema JSON object. It's not in a standard location so this function helps.
   * @param {Object} data Raw recipe JSON to find the org string of
   * @returns {String} If found, it retuns the name of the org as a string, otherwise null
   */
  function getOrganization(data) {
    if (data.publisher?.name) return data.publisher?.name;
    if (data['@graph']) {
      for (let i = 0; i < data['@graph'].length; i++) {
        if (data['@graph'][i]['@type'] == 'WebSite') {
          return data['@graph'][i].name;
        }
      }
    };
    return null;
  }
  
  /**
   * Converts ISO 8061 time strings to regular english time strings.
   * Not perfect but it works for this lab
   * @param {String} time time string to format
   * @return {String} formatted time string
   */
  function convertTime(time) {
    let timeStr = '';
  
    // Remove the 'PT'
    time = time.slice(2);
  
    let timeArr = time.split('');
    if (time.includes('H')) {
      for (let i = 0; i < timeArr.length; i++) {
        if (timeArr[i] == 'H') return `${timeStr} hr`;
        timeStr += timeArr[i];
      }
    } else {
      for (let i = 0; i < timeArr.length; i++) {
        if (timeArr[i] == 'M') return `${timeStr} min`;
        timeStr += timeArr[i];
      }
    }
  
    return '';
  }
  
  /**
   * Extract the ingredients of the recipe from the given recipe schema JSON obejct
   * @param {Object} data Raw recipe JSON to find the image of
   * @returns {Array} If found, returns the recipe ingredients
   */
  function getIngredients(data) {
    if (data.recipeIngredient) {
      if (typeof data.recipeIngredient == 'string') {
        return data.recipeIngredient.slit('. ');
      }
      return data.recipeIngredient;
    };
    if (data['@graph']) {
      for (let i = 0; i < data['@graph'].length; i++) {
        if (data['@graph'][i]['@type'] == 'Recipe') {
          if (typeof data['@graph'][i]['recipeIngredient'] == 'string') {
            return data['@graph'][i]['recipeIngredient'].slit('. ');
          }
          return data['@graph'][i]['recipeIngredient'];
        };
      }
    }
    return null;
  }
  
  /**
   * Extract the instructions of the recipe from the given recipe schema JSON obejct.
   * This ones a bit messy and optimally should be refactored but it works.
   * @param {Object} data Raw recipe JSON to find the image of
   * @returns {Array} If found, returns the recipe instructions
   */
  function getInstructions(data) {
    if (data.recipeInstructions) {
      if (typeof data.recipeInstructions == 'string') {
        return data.recipeInstructions.split('. ');
      }
      return data.recipeInstructions;
    };
    if (data['@graph']) {
      for (let i = 0; i < data['@graph'].length; i++) {
        if (data['@graph'][i]['@type'] == 'Recipe') {
          if (data['@graph'][i]['recipeInstructions'] == 'string') {
            return data['@graph'][i]['recipeInstructions'].split('. ');
          }
          if (data['@graph'][i]['recipeInstructions'][0]['itemListElement']) {
            const instructionArr = [];
            data['@graph'][i]['recipeInstructions'].forEach(instrObj => {
              instrObj.itemListElement.forEach(instruction => {
                instructionArr.push(instruction.text);
              });
            });
            return instructionArr;
          } else {
            return data['@graph'][i]['recipeInstructions'].map(instr => instr.text);
          }
        };
      }
    }
    return null;
  }