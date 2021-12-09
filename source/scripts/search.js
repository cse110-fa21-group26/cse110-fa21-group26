import { RecipeCard } from './RecipeCard.js';
import { recipeData } from '../recipes/AllRecipes.js';
import { RecipeProfile } from './RecipeProfile.js';
import { CreatePage } from '../../admin/archives/CreatePage.js';
import { searchJSON } from './searchJSON.js';
import { bindRecipeCard } from './main.js'
const apiKey = "apiKey=6e66a0ae735e4b0b953d40b95f60eb8c"; //ckl002
//const apiKey = "apiKey=de2cfc27ba4545b18f4cdd99b0c5cec0"; //caitlinlee2000
const generic = "https://api.spoonacular.com/recipes/";

/* Search Bar Script */
var searchForm = document.getElementById("search-form"); // NOTE this is note actually a "form" element, but a "label" element
var searchField = document.getElementById("search-field");
var searchButton = document.getElementById("search-submit");
var searchLoose = document.getElementById("search-loose");

async function searchQuery(strictSearch = true) {
    let query = searchField.value;
    console.log("Search:", query);
    searchField.value = "";
    if (query == "") return;
    let search = generic + "complexSearch?" + apiKey + "&query=breakfast+" + query + "&number=100";
    let searchResults = await fetch(search)
        .then(response => response.json())
        .then(data => {
            return data;
        });

    try {
        searchFilter(searchResults);
    }
    catch (e) {
        console.log("Error: Daily Maximum of 150 Spoonacular Point Reached");
        searchFilterAlt(query, strictSearch);
    }
}
searchButton.addEventListener("click", searchQuery);
searchField.addEventListener("keyup", event => {
    if (event.code === "Enter") {
        searchQuery();
    }
});
searchLoose.addEventListener("click", looseSearch => {
    searchQuery(false);
});
/* Search Bar Script End */

/* Search by Pruning from recipeData */
function searchFilter(searchResults) {
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
function searchFilterAlt(query, strictSearch = true) {
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
            bindRecipeCard(recipeCard, json);
            document.querySelector('.recipe-cards--wrapper').appendChild(recipeCard);
        }
    }
    console.log("Count", number);
}