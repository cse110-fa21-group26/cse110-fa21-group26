
import { Router } from './Router.js';
import { initializeServiceWorker } from './ServiceWorker.js';
import { Category } from './Category.js';
import { RecipeCard } from './RecipeCard.js';

const recipes = [
  [
    'https://introweb.tech/assets/json/ghostCookies.json',
    'https://introweb.tech/assets/json/birthdayCake.json',
    'https://introweb.tech/assets/json/chocolateChip.json'
  ],
  [
    'https://introweb.tech/assets/json/stuffing.json',
    'https://introweb.tech/assets/json/turkey.json',
    'https://introweb.tech/assets/json/pumpkinPie.json'
  ]
];
const recipeData = {} // You can access all of the Recipe Data from the JSON files in this variable

const router = new Router(function() {
    document.querySelector("section.section--recipe-cards").classList.add("shown");
    document.querySelector("section.section--recipe-expand").classList.remove("shown");
});

window.addEventListener('DOMContentLoaded', init);

// Initialize function, begins all of the JS code in this file
async function init() {
    initializeServiceWorker();
    for(let i = 0; i < recipes.length; i++){
      try {
          await fetchRecipes(i);
      } catch (err) {
          console.log(`Error fetching recipes: ${err}`);
          return;
      }
    }
    //createRecipeCards();
    bindEscKey();
    bindPopstate();
}

/* Dropdown Functionality */
function toggleNav() {
    if(document.getElementById("mySidebar").getAttribute("open") == "true"){
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("body").style.marginLeft = "250px";
        document.getElementById("mySidebar").setAttribute("open", "false")
    }
    else{
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("body").style.marginLeft= "0";
        document.getElementById("mySidebar").setAttribute("open", "true")
    }
}
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
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
document.querySelector('.openbtn').onclick = toggleNav;
/* Dropdown Functionality End */

/* Create Category Buttons with functionality to create recipe cards on click */
for(let i = 0; i < recipes.length; i++){
    let category = document.createElement('button');
    category.setAttribute('class', 'category');
    //category.setAttribute('onclick', "window.location.href='category.html';");
    category.addEventListener('click', (event) => {
      while(document.querySelector('.recipe-cards--wrapper').firstChild){
        document.querySelector('.recipe-cards--wrapper').removeChild(document.querySelector('.recipe-cards--wrapper').firstChild);
      }
      createRecipeCards(i);
    });
    category.innerHTML = 'Category';
    document.querySelector("#category-wrapper").appendChild(category);
}

/**/

/**
 * Loading JSON into a JS file is oddly not super straightforward (for now), so
 * I built a function to load in the JSON files for you. It places all of the recipe data
 * inside the object recipeData like so: recipeData{ 'ghostcookies': ..., 'birthdayCake': ..., etc }
 */
async function fetchRecipes(categoryIndex) {
  return new Promise((resolve, reject) => {
    recipes[categoryIndex].forEach(recipe => {
      fetch(recipe)
        .then(response => response.json())
        .then(data => {
          // This grabs the page name from the URL in the array above
          data['page-name'] = recipe.split('/').pop().split('.')[0];
          recipeData[recipe] = data;
          if (Object.keys(recipeData).length == recipes.length) {
            resolve();
          }
        })
        .catch(err => {
          console.log(`Error loading the ${recipe} recipe`);
          reject(err);
        });
    });
  });
}

/**
 * Generates the <recipe-card> elements from the fetched recipes and
 * appends them to the page
 */
function createRecipeCards(categoryIndex) {

  for(let i = 0; i < recipes[categoryIndex].length; i++){
    const recipeCard = document.createElement('recipe-card');
    recipeCard.data = recipeData[recipes[categoryIndex][i]];

    const page = recipeData[recipes[categoryIndex][i]]['page-name'];
    router.addPage(page, function() {
       document.querySelector('.section--recipe-cards').classList.remove('shown');
       document.querySelector('.section--recipe-expand').classList.add('shown');
       document.querySelector('recipe-expand').data = recipeData[recipes[categoryIndex][i]];
    });

    bindRecipeCard(recipeCard, page);
    document.querySelector('.recipe-cards--wrapper').appendChild(recipeCard);
    }
}

function bindPopstate() {
  window.addEventListener("popstate", (event) => {
    if(event.state != null && event.state.state_page != null) router.navigate(event.state.state_page, true);
    else router.navigate("home", true);
  })
}

function bindRecipeCard(recipeCard, pageName) {
  recipeCard.addEventListener('click', e => {
    // if (e.path[0].nodeName == 'A') return;
    // router.navigate(pageName, false);
    window.location.href='recipe.html';
  });
}

function openRecipe(recipe){

}

function closeRecipe(recipe){

}

function bindEscKey() {
  document.addEventListener("keydown", (event) => {
    if(event.key == "Escape") router.navigate("home", false);
  });
}