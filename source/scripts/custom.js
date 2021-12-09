
import { CustomRecipeCard } from './CustomRecipeCard.js';
import { CustomRecipeProfile } from './CustomRecipeProfile.js';
import { CreatePage } from '../../admin/archives/CreatePage.js';


window.addEventListener('DOMContentLoaded', init);
document.getElementById('home').addEventListener('click', (event) => {
    window.location.href = 'index.html';
});

document.getElementById('library').addEventListener('click', (event) => {
    window.location.href = './custom.html';
});

document.getElementById('create').addEventListener('click', (event) => {
    window.location.href = 'create.html';
});


// Initialize function, begins all of the JS code in this file
async function init() {
    createCustomRecipeCards();
}

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


/**
 * Creates the recipe cards for user entries from the local storage
 */
function createCustomRecipeCards() {
    let values = allStorage();
    for (let i = 0; i < values.length; i++) {
        console.log("hi")
        let recipeCard = document.createElement('custom-recipe-card');
        let array =JSON.parse(values[i]);
        recipeCard.data = array; // Note, recipeCard.data is "abstract", use recipe_data
        bindRecipeCard(recipeCard, array);
        document.querySelector('.recipe-cards--wrapper').appendChild(recipeCard);

    }
}

function bindRecipeCard(recipeCard  , jsonData) {
    recipeCard.addEventListener('click', e => {
        //if (e.path[0].nodeName == 'A') return;
        //router.navigate(pageName, false);

        openRecipe(jsonData);

    });
}

/**
 * Open the recipe card by displaying the recipe data on the page
 * @param {*} jsonDataa  content of the recipe
 */
function openRecipe(jsonData) {

    let body = document.getElementById("body");
    let priorState = document.getElementById("main");
    // Prune Current Main
    body.removeChild(priorState);

    let wrapper = document.createElement("main");

    let backButton = document.createElement("button");
    backButton.setAttribute('class', 'category');
    backButton.setAttribute('id', 'back-button');
    backButton.innerHTML = "Return";
    backButton.onclick = (closeRecipe) => {
        // Remove Current State
        body.removeChild(wrapper);
        // Return to Previous State
        body.appendChild(priorState);
    };
    wrapper.appendChild(backButton);

    
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', 'delete-button');
    deleteButton.setAttribute('class', 'category');
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = () => {
        //body.removeChild(recipePage);
        //body.appendChild(priorState);
        //let cardToDelete = document.getElementById(jsonData[0]);
        //cardToDelete.remove();
        localStorage.removeItem(jsonData[0]);
        window.location.href = "./custom.html"
    };
    wrapper.appendChild(deleteButton);

    let editButton = document.createElement('a');
    editButton.setAttribute('id', 'edit-button');
    editButton.setAttribute('class', 'category');
    editButton.onclick = () => {
        localStorage.removeItem(jsonData[0]);
        window.location.href = "./create.html"
    }
    editButton.innerHTML = "Edit";

    wrapper.appendChild(editButton);

    let h1 = document.createElement("h1");
    h1.innerHTML = jsonData[0];
    wrapper.appendChild(h1)

    let recipeProfile = document.createElement("custom-recipe-profile");
    recipeProfile.data = jsonData;
    wrapper.appendChild(recipeProfile);

    body.appendChild(wrapper);

}
