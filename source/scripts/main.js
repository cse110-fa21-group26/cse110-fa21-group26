
import { Router } from './Router.js';
import { initializeServiceWorker } from './ServiceWorker.js';
import * as json from "./json.js";
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
document.querySelector('#openbtn').onclick = toggleNav;
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
    let json = recipeData[recipes[categoryIndex][i]];
    recipeCard.data = json; // Note, recipeCard.data is "abstract", use recipe_data

    const page = recipeData[recipes[categoryIndex][i]]['page-name'];
    router.addPage(page, function() {
       document.querySelector('.section--recipe-cards').classList.remove('shown');
       document.querySelector('.section--recipe-expand').classList.add('shown');
       document.querySelector('recipe-expand').data = recipeData[recipes[categoryIndex][i]];
    });

    bindRecipeCard(recipeCard, page, json);
    document.querySelector('.recipe-cards--wrapper').appendChild(recipeCard);
    }
}

function bindPopstate() {
  window.addEventListener("popstate", (event) => {
    if(event.state != null && event.state.state_page != null) router.navigate(event.state.state_page, true);
    else router.navigate("home", true);
  })
}

function bindRecipeCard(recipeCard, pageName, jsonData) {
  recipeCard.addEventListener('click', e => {
    // if (e.path[0].nodeName == 'A') return;
    // router.navigate(pageName, false);
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

        // REUSING SCRIPT LEADS TO ISSUES, FUNCTIONS ARE DEFINE AT BOTTOM
        // let recipeScript = document.createElement("script");
        // recipeScript.setAttribute("src", "scripts/recipe.js");
        // recipeScript.setAttribute("type", "module");
        // recipePage.appendChild(recipeScript);

        let container = document.createElement("div");
        container.setAttribute("class", "float-container");
        container.setAttribute("id", "recipe-template");

            let leftChild = document.createElement("div");
            leftChild.setAttribute("class", "float-child");
            leftChild.setAttribute("id", "left-child");

                let imgButton = document.createElement("button");
                imgButton.setAttribute("id", "image-button");
                imgButton.innerHTML = "Image";

                let ingredientsButton = document.createElement("button");
                ingredientsButton.setAttribute("id", "ingredients-button");
                ingredientsButton.innerHTML = "Ingredients";
                
                let img = document.createElement("img");
                img.setAttribute("src", json.getImage(jsonData));
                img.setAttribute("id", "recipe-img");
                
                let ingredients = document.createElement("div");
                ingredients.setAttribute("id", "ingredients");
                ingredients.innerHTML = json.getIngredients(jsonData);

            leftChild.appendChild(imgButton);
            leftChild.appendChild(ingredientsButton);
            leftChild.appendChild(img);
            leftChild.appendChild(ingredients);
            
            let data = document.createElement("div");
            data.setAttribute("class", "data");
            data.innerHTML = json.getInstructions(jsonData);

        container.appendChild(leftChild);
        container.appendChild(data);

    recipePage.appendChild(container);

    body.appendChild(recipePage);

    /* Recipe.js Start */
    
    // THESE ARE ALREADY DEFINED ABOVE
    // let imgButton = document.querySelector('#image-button');
    // let ingredients = document.querySelector('#ingredients');              
    // let ingredientsButton = document.querySelector('#ingredients-button');
    // let img = document.querySelector('img');

    imgButton.onclick = function() {
        if (ingredients.style.display !== 'none') {
            ingredients.style.display = 'none'; 
            img.style.display = 'block';
        }
    };

    ingredientsButton.onclick = function() {
        if (img.style.display !== 'none') {
            img.style.display = 'none';
            ingredients.style.display = 'block';
        }
    };

    let dropdown = document.getElementsByClassName("dropdown-btn");
    let i;
    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } 
            else {
                dropdownContent.style.display = "block";
            }
        });
    }
    /* Recipe.js End */

}

function bindEscKey() {
  document.addEventListener("keydown", (event) => {
    if(event.key == "Escape") router.navigate("home", false);
  });
}