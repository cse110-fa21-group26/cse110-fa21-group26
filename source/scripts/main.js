
import { Router, bindRecipeCard, bindEscKey,bindPopstate } from './Router.js';
import { initializeServiceWorker } from './ServiceWorker.js';
import { Category } from './Category.js';
import { RecipeCard } from './RecipeCard.js';

const recipes = [
  'https://introweb.tech/assets/json/ghostCookies.json',
  'https://introweb.tech/assets/json/birthdayCake.json',
  'https://introweb.tech/assets/json/chocolateChip.json',
  'https://introweb.tech/assets/json/stuffing.json',
  'https://introweb.tech/assets/json/turkey.json',
  'https://introweb.tech/assets/json/pumpkinPie.json'
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
    try {
        await fetchRecipes();
    } catch (err) {
        console.log(`Error fetching recipes: ${err}`);
        return;
    }
    createRecipeCards();
    bindEscKey();
    bindPopstate();
}

/**/
function toggleNav() {
    if(document.getElementById("mySidebar").getAttribute("open") == "true"){
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("mySidebar").setAttribute("open", "false")
    }
    else{
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
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

for(var i = 0; i < recipes.length; i++){
    var category = document.createElement('button');
    category.setAttribute('class', 'category');
    category.setAttribute('onclick', "no link");
    category.innerHTML = 'Category';
    document.querySelector('body main').appendChild(category);
}

/* Placeholder to view the recipe card thing */
var category = document.createElement('button');
category.setAttribute('class', 'category');
category.setAttribute('onclick', "window.location.href='recipe.html';");
category.innerHTML = 'Link to Recipe';
document.querySelector('.placeholder').appendChild(category);

/**/

/**
 * Loading JSON into a JS file is oddly not super straightforward (for now), so
 * I built a function to load in the JSON files for you. It places all of the recipe data
 * inside the object recipeData like so: recipeData{ 'ghostcookies': ..., 'birthdayCake': ..., etc }
 */
async function fetchRecipes() {
  return new Promise((resolve, reject) => {
    recipes.forEach(recipe => {
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
function createRecipeCards() {

  for(let i = 0; i < recipes.length; i++){
    const recipeCard = document.createElement('recipe-card');
    recipeCard.data = recipeData[recipes[i]];

    const page = recipeData[recipes[i]]['page-name'];
    router.addPage(page, function() {
    //   document.querySelector('.section--recipe-cards').classList.remove('shown');
    //   document.querySelector('.section--recipe-expand').classList.add('shown');
    //   document.querySelector('recipe-expand').data = recipeData[recipes[i]];
    });

    bindRecipeCard(recipeCard, page);

    document.querySelector('.recipe-cards--wrapper').appendChild(recipeCard);
    }
}

function createCategories() {

    for(let i = 0; i < recipes.length; i++){
      const category = document.createElement('category');
      category.data = recipeData[recipes[i]];
  
      const page = recipeData[recipes[i]]['page-name'];
      router.addCategory(page, function() {});
  
      bindCategory(recipeCard, page);
      document.querySelector('.recipe-cards--wrapper').appendChild(recipeCard);
      }
  }