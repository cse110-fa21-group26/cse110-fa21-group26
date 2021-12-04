
import { Router } from './Router.js';
import { initializeServiceWorker } from './ServiceWorker.js';
import * as json from "./json.js";
import { RecipeCard } from './RecipeCard.js';
import { recipeData } from './AllRecipes.js';
import { RecipeProfile } from './RecipeProfile.js';
import { CreatePage } from './CreatePage.js';

const categories = [
    'All Recipes', 'Popular', 'Healthy', 'Vegetarian', 'Vegan', 'Dairy Free', 'Gluten Free'
]

const categoryJson = [
    'all', 'veryPopular', 'veryHealthy', 'vegetarian', 'vegan', 'dairyFree', 'glutenFree'
]

//const recipeData = {} // You can access all of the Recipe Data from the JSON files in this variable

const router = new Router(function () {
    document.querySelector("section.section--recipe-cards").classList.add("shown");
    document.querySelector("section.section--recipe-expand").classList.remove("shown");
});

window.addEventListener('DOMContentLoaded', init);

/**
 * Initialize function, begins all of the JS code in this file
 */
async function init() {
    initializeServiceWorker();
    createRecipeCards(0);
    bindEscKey();
    bindPopstate();
}

/**
 * Enable functionality of the dropdown menu
 */
function toggleNav() {
    if (document.getElementById("mySidebar").getAttribute("open") == "true") {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("body").style.marginLeft = "250px";
        document.getElementById("mySidebar").setAttribute("open", "false")
    }
    else {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("body").style.marginLeft = "0";
        document.getElementById("mySidebar").setAttribute("open", "true")
    }
}
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
        else {
            dropdownContent.style.display = "block";
        }
    });
}
document.querySelector('#openbtn').onclick = toggleNav;
/* Dropdown Functionality End */

/* Create Category Buttons with functionality to create recipe cards on click */
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

/**/

/**
 * Generates the <recipe-card> elements from the fetched recipes and
 * appends them to the page
 * @param category name of the category to create the card
 */
function createRecipeCards(category) {
    for (let i = 0; i < recipeData.length; i++) {
        console.log( recipeData[i][categoryJson[category]]);
        if (category == 0 || recipeData[i][categoryJson[category]]) {
            let recipeCard = document.createElement('recipe-card');
            let json = recipeData[i];
            recipeCard.data = json; // Note, recipeCard.data is "abstract", use recipe_data

            const page = recipeData[i]['title'];
            console.log(page);
            router.addPage(page, function () {
                document.querySelector('.section--recipe-cards').classList.remove('shown');
                document.querySelector('.section--recipe-expand').classList.add('shown');
                document.querySelector('recipe-expand').data = recipeData[i];
            });
            bindRecipeCard(recipeCard, page, json);
            document.querySelector('.recipe-cards--wrapper').appendChild(recipeCard);
        }
    }
}

/**
 * specify the navigation for our pages
 */
function bindPopstate() {
    window.addEventListener("popstate", (event) => {
        if (event.state != null && event.state.state_page != null) router.navigate(event.state.state_page, true);
        else router.navigate("home", true);
    })
}

/**
 * This function binds the functionality of our recipe cards to open when clicked on
 * @param {*} recipeCard recipe card html element that represents the recipe on the page
 * @param {*} pageName name of the page to route to
 * @param {*} jsonData Json data of the recipe we want to open
 */
function bindRecipeCard(recipeCard, pageName, jsonData) {
    recipeCard.addEventListener('click', e => {
        //if (e.path[0].nodeName == 'A') return;
        //router.navigate(pageName, false);
        
        openRecipe(jsonData);
        
    });
}

/**
 * Displays the content of the opened recipe card 
 * @param {*} jsonData data of the recipe to display when opened
 */
function openRecipe(jsonData){
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

    let recipeProfile = document.createElement("recipe-profile");
    recipeProfile.data = jsonData;
    wrapper.appendChild(recipeProfile);

    body.appendChild(wrapper);

}

let createNewRecipe = document.getElementById("create-new-recipe");
createNewRecipe.addEventListener('click', event => {

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
        //Return background color
        document.body.style.backgroundColor = "white";
    };
    wrapper.appendChild(backButton);

    let createPage = document.createElement("recipe-create");
    wrapper.appendChild(createPage);
    createPage.data = ""; //Done just to setup create page...

    body.appendChild(wrapper);

    document.body.style.backgroundColor = "thistle";

    toggleNav();

});

/**
 * Adds functionality to the escape key to navigate back to the home page
 */
function bindEscKey() {
    document.addEventListener("keydown", (event) => {
        if (event.key == "Escape") router.navigate("home", false);
    });
}