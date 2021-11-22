import { Router, bindRecipeCard, bindEscKey,bindPopstate } from './Router.js';
import { Category } from './Category.js';
import { RecipeCard } from './RecipeCard.js';
import { customRecipe } from './customRecipe.js';

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
    //event.preventDefault();
    console.log("hi");
    let name = document.getElementById('recipe-name').value;
    let ingredients = document.getElementById('recipe-ingredients').value;
    let steps = document.getElementById('recipe-steps').value;

    let newRecipe = new customRecipe(name, ingredients, steps);

    //let localRecipes = localStorage.getItem('user-recipes');
    //localRecipes.push(newRecipe);
    //localStorage.setItem('user-recipes', userRecipes);

    localStorage.setItem('newCustomRecipe', newRecipe);

    console.log('Name: ', name, 'Ingredients: ', ingredients, 'Steps: ', steps);
    //recipeForm.submit();
});
