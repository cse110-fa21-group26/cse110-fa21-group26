
import { RecipeCard } from './objects/RecipeCard.js';
import { recipeData } from '../recipes/AllRecipes.js';
import { RecipeProfile } from './objects/RecipeProfile.js';
import { CreatePage } from '../../admin/archives/CreatePage.js';
import { searchJSON } from './searchJSON.js';

const categories = [
    'All Recipes', 'Popular', 'Healthy', 'Vegetarian', 'Vegan', 'Dairy Free', 'Gluten Free'
]

const categoryJson = [
    'all', 'veryPopular', 'veryHealthy', 'vegetarian', 'vegan', 'dairyFree', 'glutenFree'
]

//const recipeData = {} // You can access all of the Recipe Data from the JSON files in this variable
document.getElementById('home').addEventListener('click', (event) => {
    window.location.href = 'index.html';
});

document.getElementById('library').addEventListener('click', (event) => {
    window.location.href = './custom.html';
});

document.getElementById('create').addEventListener('click', (event) => {
    window.location.href = 'create.html';
}); 

window.addEventListener('DOMContentLoaded', (event) => {
    createCategoryCards();
    createRecipeCards(0);
});


//document.querySelector('#openbtn').onclick = toggleNav;
/* Dropdown Functionality End */

/* Create Category Buttons with functionality to create recipe cards on click */
function createCategoryCards() {
    for (let i = 0; i < categories.length; i++) {
        let category = document.createElement('button');
        category.setAttribute('class', 'category');
        //category.setAttribute('onclick', "window.location.href='category.html';");
        category.addEventListener('click', (event) => {
            while (document.querySelector('.recipe-cards--wrapper').firstChild) {
                document.querySelector('.recipe-cards--wrapper').removeChild(document.querySelector('.recipe-cards--wrapper').firstChild);
            }
            createRecipeCards(i)
        });
        category.innerHTML = categories[i];
        document.querySelector("#category-wrapper").appendChild(category);
    }
}

/**/

/**
 * Generates the <recipe-card> elements from the fetched recipes and
 * appends them to the page
 * @param category name of the category to create the card
 */
function createRecipeCards(category) {
    for (const [key, value] of Object.entries(recipeData)) {
        //console.log(key, recipeData[key]);              
        if (category == 0 || recipeData[key][categoryJson[category]]) {
            let recipeCard = document.createElement('recipe-card');
            let json = recipeData[key];
            recipeCard.data = json; // Note, recipeCard.data is "abstract", use recipe_data
            document.getElementsByClassName('recipe-cards--wrapper')[0].appendChild(recipeCard)
            bindRecipeCard(recipeCard, json)

        }
    }
}

/**
 * This function binds the functionality of our recipe cards to open when clicked on
 * @param {*} recipeCard recipe card html element that represents the recipe on the page
 * @param {*} pageName name of the page to route to
 * @param {*} jsonData Json data of the recipe we want to open
 */
export function bindRecipeCard(recipeCard, jsonData) {
    recipeCard.addEventListener('click', e => {
        openRecipe(jsonData);
    });
}

/**
 * Displays the content of the opened recipe card 
 * @param {*} jsonData data of the recipe to display when opened
 */
function openRecipe(jsonData) {
    let body = document.getElementById("body");
    let priorState = document.getElementById("main");
    // Prune Current Main
    body.removeChild(priorState);

    let wrapper = document.createElement("main");
    wrapper.setAttribute("id", "main");

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

    let recipeProfile = document.createElement("recipe-profile");
    recipeProfile.data = jsonData;
    wrapper.appendChild(recipeProfile);

    body.appendChild(wrapper);

}

