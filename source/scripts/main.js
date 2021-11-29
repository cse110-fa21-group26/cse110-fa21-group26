
import { Router } from './Router.js';
import { initializeServiceWorker } from './ServiceWorker.js';
import * as json from "./json.js";
import { RecipeCard } from './RecipeCard.js';
import { recipeData } from './AllRecipes.js';
import { RecipeProfile } from './RecipeProfile.js';

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

// Initialize function, begins all of the JS code in this file
async function init() {
    initializeServiceWorker();
    createRecipeCards(0);
    bindEscKey();
    bindPopstate();
}

/* Dropdown Functionality */
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

function bindPopstate() {
    window.addEventListener("popstate", (event) => {
        if (event.state != null && event.state.state_page != null) router.navigate(event.state.state_page, true);
        else router.navigate("home", true);
    })
}

function bindRecipeCard(recipeCard, pageName, jsonData) {
    recipeCard.addEventListener('click', e => {
        //if (e.path[0].nodeName == 'A') return;
        //router.navigate(pageName, false);
        
        openRecipe(jsonData);
        
    });
}

function openRecipe(jsonData){
    let body = document.getElementById("body");
    let priorState = document.getElementById("main");
    // Prune Current Main
    body.removeChild(priorState);

    let recipePage = document.createElement("main");

    let backButton = document.createElement("button");
    backButton.setAttribute('class', 'category');
    backButton.setAttribute('id', 'back-button');
    backButton.innerHTML = "Return";
    backButton.onclick = (closeRecipe) => {
        // Remove Current State
        body.removeChild(recipePage);
        // Return to Previous State
        body.appendChild(priorState);
    };
    recipePage.appendChild(backButton);

    let element = document.createElement("recipe-profile");
    element.data = jsonData;
    recipePage.appendChild(element);

    body.appendChild(recipePage);

}

function bindEscKey() {
    document.addEventListener("keydown", (event) => {
        if (event.key == "Escape") router.navigate("home", false);
    });
}