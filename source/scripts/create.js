//import { Router, bindRecipeCard, bindEscKey,bindPopstate } from './Router.js';
import { Router } from './Router.js';
import { Category } from './Category.js';
import { RecipeCard } from './RecipeCard.js';
import { customRecipe } from './customRecipe.js';
//mport { jsxAttribute } from '@babel/types';

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

// function onlyOne(checkbox) {
//     var checkboxes = document.getElementsByName('check')
//     checkboxes.forEach((item) => {
//         if (item !== checkbox) item.checked = false
//     })
//}
/*
//window.localStorage.setItem('user-recipes', JSON.stringify(userRecipes));

function createCustomRecipe () {
    const recipeForm= document.querySelector('.recipe-form');
    let name = document.getElementById('recipe-name').value;
    let ingredients = document.getElementById('recipe-ingredients').value;
    let steps = document.getElementById('recipe-steps').value;

    console.log('Name: ', name, 'Ingredients: ', ingredients, 'Steps: ', steps);

    let newRecipe = new customRecipe(name, ingredients, steps);
    
    let localRecipes = JSON.parse(localStorage.getItem('user-recipes'));
    localRecipes.push(newRecipe);
    window.localStorage.setItem('user-recipes', JSON.stringify(localRecipes));

    console.log(userRecipes.length);
    console.log('Name: ', newRecipe.name)
}

//document.querySelector('.form-submit').onclick = createCustomRecipe();

console.log(localStorage.getItem('user-recipes').length);
*/

const userRecipes = [];
//localStorage.setItem('user-recipes', userRecipes);
const recipeForm = document.querySelector('.recipe-form');


recipeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    //console.log("hi");
    let image = document.querySelector('.recipe-image').checked;
    let name = document.getElementById('recipe-name').value;
    let ingredients = document.getElementById('recipe-ingredients').value;
    let steps = document.getElementById('recipe-steps').value;

    let newRecipe = new customRecipe(name, ingredients, steps);
    //console.log(newRecipe);
    //let localRecipes = localStorage.getItem('user-recipes');
    //localRecipes.push(newRecipe);
    //localStorage.setItem('user-recipes', userRecipes);
    var data = {name: name, ingredients: ingredients, steps: steps};
    
    // var getData =
    // {
    //     "firstdata":name,
    //     "seconddata":ingredients,
    //     "thirddata":steps
    // }
    //localStorage.setItem(name, newRecipe);

    //localStorage.setItem('Data', JSON.stringify(data));

    //var result = localStorage.getItem('getData');

    //console.log(JSON.stringify(data));
    //var array = JSON.parse(localStorage.getItem('Data') || '[]');
    var array = [];
    array.push(image, name,ingredients,steps);
    //console.log(array);
    localStorage.setItem(name, JSON.stringify(array));
    console.log(localStorage);
    //console.log('Name: ', name, 'Ingredients: ', ingredients, 'Steps: ', steps);
    //recipeForm.submit();

    location.reload();

});

// function setRecipes(){
//     var currentName = localStorage.getItem('recipe-name');
//     var currentIngredients = localStorage.getItem('recipe-ingredients');
//     var currentSteps = localStorage.getItem('recipe-steps');

//     document.getElementById('recipe-name').value = currentName;
//     document.getElementById('recipe-ingredients').value = currentIngredients;
//     document.getElementById('recipe-steps').value = currentSteps;
     
// }