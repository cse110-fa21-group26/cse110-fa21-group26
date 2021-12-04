//import { Router, bindRecipeCard, bindEscKey,bindPopstate } from './Router.js';
import { Router } from './Router.js';
import { Category } from './Category.js';
import { RecipeCard } from './RecipeCard.js';
import { customRecipe } from './customRecipe.js';
//mport { jsxAttribute } from '@babel/types';

/* Dropdown Functionality */
/**
 * Enables functionality of the dropdown menu 
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

//localStorage.setItem('user-recipes', userRecipes);
const recipeForm = document.querySelector('.recipe-form');

/**
 * Get user input from the html forms and store the data in the local storage 
 */
recipeForm.addEventListener('submit', () => {
    event.preventDefault();
    
    let name = document.getElementById('recipe-name').value;
    let ingredients = document.getElementById('recipe-ingredients').value;
    let steps = document.getElementById('recipe-steps').value;

    let newRecipe = new customRecipe(name, ingredients, steps);
    
    var array = [];
    array.push(name,ingredients,steps);
    localStorage.setItem(name, JSON.stringify(array));
    console.log(localStorage);


    location.reload();

});