
import { CustomRecipeCard } from './objects/CustomRecipeCard.js';
import { CustomRecipeProfile } from './objects/CustomRecipeProfile.js';
import { CreatePage } from '../../admin/archives/CreatePage.js';
import { RecipeCard } from './objects/RecipeCard.js';
import { addCreateFunc } from "./update.js";


//adds event listeners when page is loaded and shows recipes saved in local storage
window.addEventListener('DOMContentLoaded', (event) => {
    configButtons();
    createCustomRecipeCards();
});

/**
 * Adds event listeners to buttons at the top of the create page: Home, custom library, and create new recipe
 */
function configButtons() {
    //config home button
    document.getElementById('home').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    //config library button
    document.getElementById('library').addEventListener('click', () => {
        window.location.href = './custom.html';
    });
    //config create new button
    document.getElementById('create').addEventListener('click', () => {
        window.location.href = 'create.html';
    });
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
 * Creates the recipe cards for user entries from the local storage, binds recipe card to event listener to open on click, and appends card to create.html
 */
function createCustomRecipeCards() {
    //gets all objects stored in local storage
    let values = allStorage();
    for (let i = 0; i < values.length; i++) {
        let recipeCard = document.createElement('custom-recipe-card');
        //get array from values stored as strings in local storage
        let array =JSON.parse(values[i]);
        recipeCard.data = array; 
        bindRecipeCard(recipeCard, array);
        //append to create.html
        document.querySelector('.recipe-cards--wrapper').appendChild(recipeCard);

    }
}

/**
 * add event listener to card so that card opens when clicked on
 * @param {RecipeCard} recipeCard 
 * @param {String[]} data 
 */
function bindRecipeCard(recipeCard  , data) {
    recipeCard.addEventListener('click', e => {
        openRecipe(data);
    });
}

/**
 * Open the recipe card by displaying the recipe data on the page
 * @param {*} data  content of the recipe
 */
function openRecipe(data) {
    // Prune Current Main
    let body = document.getElementById("body");
    let priorState = document.getElementById("main");
    body.removeChild(priorState);

    let wrapper = document.createElement("main");

    //create back button
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

    //create delete button
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', 'delete-button');
    deleteButton.setAttribute('class', 'category');
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = () => {
        localStorage.removeItem(data[0]);
        window.location.href = "./custom.html"
    };
    wrapper.appendChild(deleteButton);

    //create edit button
    let editButton = document.createElement('a');
    editButton.setAttribute('id', 'edit-button');
    editButton.setAttribute('class', 'category');
    editButton.onclick = () => {
        sessionStorage.setItem('toDelete', data[0]);
        window.location.href = "./update.html"
    }
    editButton.innerHTML = "Edit";

    wrapper.appendChild(editButton);

    let h1 = document.createElement("h1");
    h1.innerHTML = data[0];
    wrapper.appendChild(h1)

    let recipeProfile = document.createElement("custom-recipe-profile");
    recipeProfile.data = data;
    wrapper.appendChild(recipeProfile);

    body.appendChild(wrapper);

}
