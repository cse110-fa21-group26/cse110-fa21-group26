/**
 * helper function for search functionality 
 * @param {} jsonObj 
 * @param {*} query 
 * @param {*} strictSearch 
 * @returns 
 */
export function searchJSON(jsonObj, query, strictSearch = true){

    // Determines if we want a tight contraint for searching strings
    let constrainStrings = strictSearch;
    let maxLength = query.length;       // Strict Constraint constrains read strings to the same lenggth of the expected string 
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
            found ||= searchJSON(jsonObj[i], query, strictSearch);
        }
        return found;
    }
    else if(jsonObj instanceof Object){
        let found = false;
        for (const [key, value] of Object.entries(jsonObj)) {
            //If they key is a boolean for true / false for the key like -> Vegan : True
            if(searchJSON(key, query)){
                if(typeof(value) == "boolean") found ||= value;
            }
            else{
                found ||= searchJSON(jsonObj[key], query, strictSearch);
            }
        }
        return found;
    }
    return false;
}