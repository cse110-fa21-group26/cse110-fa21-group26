/**
 * function to return the content of local storage as an array
 * @returns array of the contents of the local storage
 */

 function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }

    return values;
}

module.exports = allStorage;