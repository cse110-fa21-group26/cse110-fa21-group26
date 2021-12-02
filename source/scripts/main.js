
import { Router } from './Router.js';
import { initializeServiceWorker } from './ServiceWorker.js';
import { RecipeCard } from './RecipeCard.js';
import { recipeData } from './AllRecipes.js';
import { RecipeProfile } from './RecipeProfile.js';
import { CreatePage } from './CreatePage.js';
import { searchJSON } from './searchJSON.js';

const categories = [
    'All Recipes', 'Popular', 'Healthy', 'Vegetarian', 'Vegan', 'Dairy Free', 'Gluten Free'
]

const categoryJson = [
    'all', 'veryPopular', 'veryHealthy', 'vegetarian', 'vegan', 'dairyFree', 'glutenFree'
]

//const recipeData = {} // You can access all of the Recipe Data from the JSON files in this variable


const apiKey = "apiKey=6e66a0ae735e4b0b953d40b95f60eb8c"; //ckl002
//const apiKey = "apiKey=de2cfc27ba4545b18f4cdd99b0c5cec0"; //caitlinlee2000
const generic = "https://api.spoonacular.com/recipes/";


const router = new Router(function () {
    document.querySelector("section.section--recipe-cards").classList.add("shown");
    document.querySelector("section.section--recipe-expand").classList.remove("shown");
});

window.addEventListener('DOMContentLoaded', init);
var homeStateMain;

// Initialize function, begins all of the JS code in this file
async function init() {
    initializeServiceWorker();
    createRecipeCards(0);
    bindEscKey();
    bindPopstate();
    homeStateMain = document.getElementById("main");
}

/* Search Bar Script */
var searchForm = document.getElementById("search-form"); // NOTE this is note actually a "form" element, but a "label" element
var searchField = document.getElementById("search-field");
var searchButton = document.getElementById("search-submit");
var searchLoose = document.getElementById("search-loose");

async function searchQuery(strictSearch = true){
    let query = searchField.value;
    console.log("Search:", query);
    searchField.value = "";
    if(query == "") return;
    let search = generic + "complexSearch?" + apiKey + "&query=breakfast+" + query + "&number=100";
    let searchResults = await fetch(search)
        .then(response => response.json())
        .then(data => {
            return data;
        });
    forceCloseNav();
    try{
        searchFilter(searchResults);
    }
    catch(e){
       console.log("Error: Daily Maximum of 150 Spoonacular Point Reached");
       searchFilterAlt(query, strictSearch);
    }
}
searchButton.addEventListener("click", searchQuery);
searchField.addEventListener("keyup", event => {
    if(event.code === "Enter"){
        searchQuery();
    }
});
searchLoose.addEventListener("click", looseSearch => {
    searchQuery(false);
});
/* Search Bar Script End */

/* Search by Pruning from recipeData */
function searchFilter(searchResults){
    let found = searchResults["results"];
    while (document.querySelector('.recipe-cards--wrapper').firstChild) {
        document.querySelector('.recipe-cards--wrapper').removeChild(document.querySelector('.recipe-cards--wrapper').firstChild);
    }
    for (let i = 0; i < found.length; i++) { 
        let key = found[i]["title"];
        let recipeCard = document.createElement('recipe-card');
        let json = recipeData[key];
        recipeCard.data = json; // Note, recipeCard.data is "abstract", use recipe_data
        const page = key;
        //console.log(page);
        router.addPage(page, function () {
            document.querySelector('.section--recipe-cards').classList.remove('shown');
            document.querySelector('.section--recipe-expand').classList.add('shown');
            document.querySelector('recipe-expand').data = recipeData[key];
        });
        bindRecipeCard(recipeCard, page, json);
        document.querySelector('.recipe-cards--wrapper').appendChild(recipeCard);
    }
}
function searchFilterAlt(query, strictSearch = true){
    // console.log(strictSearch);
    let number = 0;
    for (const [key, value] of Object.entries(recipeData)) {
        let keywordFound = searchJSON(recipeData[key], query, strictSearch);
        // console.log(key, query, keywordFound) 
        if (keywordFound) { // IMPORTED
            number++;
            console.log(recipeData[key]);
            let recipeCard = document.createElement('recipe-card');
            let json = recipeData[key];
            recipeCard.data = json; // Note, recipeCard.data is "abstract", use recipe_data
            const page = key;
            //console.log(page);
            router.addPage(page, function () {
                document.querySelector('.section--recipe-cards').classList.remove('shown');
                document.querySelector('.section--recipe-expand').classList.add('shown');
                document.querySelector('recipe-expand').data = recipeData[key];
            });
            bindRecipeCard(recipeCard, page, json);
            document.querySelector('.recipe-cards--wrapper').appendChild(recipeCard);
        }
    }
    console.log("Count", number);
}

/* Dropdown Functionality */
function toggleNav() {
    if (document.getElementById("mySidebar").getAttribute("open") == "true") {
        // Close -> Open
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("body").style.marginLeft = "250px";
        document.getElementById("mySidebar").setAttribute("open", "false")
    }
    else {
        // Open -> Close
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("body").style.marginLeft = "0";
        document.getElementById("mySidebar").setAttribute("open", "true")
    }
}
function forceCloseNav() {
    if (document.getElementById("mySidebar").getAttribute("open") == "false") {
        // Open -> Close
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
    for (const [key, value] of Object.entries(recipeData)) {
        //console.log(key, recipeData[key]);              
        if (category == 0 || recipeData[key][categoryJson[category]]) {
            let recipeCard = document.createElement('recipe-card');
            let json = recipeData[key];
            recipeCard.data = json; // Note, recipeCard.data is "abstract", use recipe_data
            const page = key;
            //console.log(page);
            router.addPage(page, function () {
                document.querySelector('.section--recipe-cards').classList.remove('shown');
                document.querySelector('.section--recipe-expand').classList.add('shown');
                document.querySelector('recipe-expand').data = recipeData[key];
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

let createNewRecipeNav = document.getElementById("create-new-recipe");
createNewRecipeNav.addEventListener('click', event => {

    forceCloseNav();

    document.getElementById("theme").setAttribute("href", "style/createstyle.css");

    let body = document.getElementById("body");
    let priorState = document.getElementById("main");
    // Prune Current Main
    body.removeChild(priorState);

    let wrapper = document.createElement("main");
    wrapper.setAttribute("id", "main");

    let homeButton = document.createElement("button");
    homeButton.setAttribute('class', 'category');
    homeButton.setAttribute('id', 'home-button');
    homeButton.innerHTML = "Home";
    homeButton.onclick = returnHome;
    wrapper.appendChild(homeButton);

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
        document.getElementById("theme").setAttribute("href", "");
        document.body.style.backgroundColor = "white";
    };
    wrapper.appendChild(backButton);

    let createPage = document.createElement("recipe-create");
    wrapper.appendChild(createPage);
    createPage.data = ""; //Done just to setup create page...

    body.appendChild(wrapper);

    document.body.style.backgroundColor = "thistle";
    // <link rel="stylesheet" href="style/createstyle.css" />

});

let homePageNav = document.getElementById("home-page");
homePageNav.addEventListener('click', returnHome);
function returnHome(){

    document.getElementById("theme").setAttribute("href", "");
    document.body.style.backgroundColor = "white";

    forceCloseNav();

    let body = document.getElementById("body");
    let priorState = document.getElementById("main");

    // Prune Current Main
    body.removeChild(priorState);
    // Append homeState
    body.appendChild(homeStateMain);
}

function bindEscKey() {
    document.addEventListener("keydown", (event) => {
        if (event.key == "Escape") router.navigate("home", false);
    });
}

