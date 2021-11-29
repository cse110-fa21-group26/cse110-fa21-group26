//Sources used: https://stackoverflow.com/questions/17745292/how-to-retrieve-all-localstorage-items-without-knowing-the-keys-in-advance

import { Router } from './Router.js';
import { Category } from './Category.js';
import { RecipeCard } from './RecipeCard.js';
import { customRecipe } from './customRecipe.js';

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


/**
 * function to return the content of local storage as an array
 * @returns
 */
function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}


function createCustomRecipeCards() {

    console.log("creating custom recipe card...");

    let recipeData = allStorage();
    
    console.log(recipeData.length);
    for (let i = 0; i < recipeData.length; i++){
        const recipeCard = document.createElement('button');

        let recipe = JSON.parse(recipeData[i]);
        console.log(recipe);

        let name = recipe[0];
        let ingredients = recipe[1];
        let steps = recipe[2];

        console.log('name: ', name, ' ingredients: ', ingredients, ' steps: ', steps);

        //recipe.data = ingredients + steps;
        recipeCard.setAttribute('id', name);
        recipeCard.innerHTML = name;

        document.querySelector('.recipe-cards--wrapper').appendChild(recipeCard);
        recipeCard.addEventListener('click', () => {
            openCustomRecipe(name, ingredients, steps);
        });
    }
}

function openCustomRecipe(name, ingredients, steps){

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

        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('id', 'delete-button');
        deleteButton.setAttribute('class', 'category');
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = () => {
            body.removeChild(recipePage);
            body.appendChild(priorState);
            let cardToDelete = document.getElementById(name);
            cardToDelete.remove();
            localStorage.removeItem(name);
        };
        recipePage.appendChild(deleteButton);

        let editButton = document.createElement('a');
        editButton.setAttribute('id', 'edit-button');
        editButton.setAttribute('class', 'category');
        editButton.setAttribute('href', './create.html');
        editButton.innerHTML = "Edit";

        recipePage.appendChild(editButton);

        



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
                //img.setAttribute("src", json.getImage(jsonData));
                img.setAttribute("id", "recipe-img");
                
                let ingredientsData = document.createElement("div");
                ingredientsData.setAttribute("id", "ingredients");
                ingredientsData.innerHTML = ingredients;

            leftChild.appendChild(imgButton);
            leftChild.appendChild(ingredientsButton);
            leftChild.appendChild(img);
            leftChild.appendChild(ingredientsData);
            
            let data = document.createElement("div");
            data.setAttribute("class", "data");
            data.innerHTML = steps;

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
        if (ingredientsData.style.display !== 'none') {
            ingredientsData.style.display = 'none'; 
            img.style.display = 'block';
        }
    };

    ingredientsButton.onclick = function() {
        if (img.style.display !== 'none') {
            img.style.display = 'none';
            ingredientsData.style.display = 'block';
        }
    };
}



createCustomRecipeCards();