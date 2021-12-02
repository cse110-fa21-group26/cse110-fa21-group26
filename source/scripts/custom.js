
import { Router } from './Router.js';
import { initializeServiceWorker } from './ServiceWorker.js';
import { CustomRecipeCard } from './CustomRecipeCard.js';
import { CustomRecipeProfile } from './CustomRecipeProfile.js';
import { CreatePage } from './CreatePage.js';

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

/**/

/**
 * Generates the <recipe-card> elements from the fetched recipes and
 * appends them to the page
 */

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }

    return values;
}

function createRecipeCards() {
    let values = allStorage();

    for (let i = 0; i < values.length; i++) {

        let recipeCard = document.createElement('custom-recipe-card');
        let array =JSON.parse(values[i]);
        recipeCard.data = array; // Note, recipeCard.data is "abstract", use recipe_data

        const page = array[0];
        console.log(page);
        router.addPage(page, function () {
            document.querySelector('.section--recipe-cards').classList.remove('shown');
            document.querySelector('.section--recipe-expand').classList.add('shown');
            document.querySelector('recipe-expand').data = array;
        });
        bindRecipeCard(recipeCard, page, array);
        document.querySelector('.recipe-cards--wrapper').appendChild(recipeCard);

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

function openRecipe(jsonData) {
    let body = document.getElementById("body");
    let priorState = document.getElementById("main");
    // Prune Current Main
    body.removeChild(priorState);

    let wrapper = document.createElement("main");

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

    let h1 = document.createElement("h1");
    h1.innerHTML = jsonData[0];
    wrapper.appendChild(h1)


    let recipeProfile = document.createElement("custom-recipe-profile");
    recipeProfile.data = jsonData;
    wrapper.appendChild(recipeProfile);

    body.appendChild(wrapper);
    
    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', 'delete-button');
    deleteButton.setAttribute('class', 'category');
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = () => {
        //body.removeChild(recipePage);
        //body.appendChild(priorState);
        //let cardToDelete = document.getElementById(jsonData[0]);
        //cardToDelete.remove();
        localStorage.removeItem(jsonData[0]);
        window.location.href = "./custom.html"
    };
    body.appendChild(deleteButton);

    let editButton = document.createElement('a');
    editButton.setAttribute('id', 'edit-button');
    editButton.setAttribute('class', 'category');
    editButton.onclick = () => {
        localStorage.removeItem(jsonData[0]);
        window.location.href = "./create.html"
    }
    editButton.innerHTML = "Edit";

    body.appendChild(editButton);

}

let createNewRecipe = document.getElementById("create-new-recipe");
createNewRecipe.addEventListener('click', event => {

    let body = document.getElementById("body");
    let priorState = document.getElementById("main");
    // Prune Current Main
    body.removeChild(priorState);

    let wrapper = document.createElement("main");

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
        document.body.style.backgroundColor = "white";
    };
    wrapper.appendChild(backButton);

    let createPage = document.createElement("recipe-create");
    wrapper.appendChild(createPage);
    createPage.data = ""; //Done just to setup create page...

    body.appendChild(wrapper);

    document.body.style.backgroundColor = "thistle";

    toggleNav();

});

function bindEscKey() {
    document.addEventListener("keydown", (event) => {
        if (event.key == "Escape") router.navigate("home", false);
    });
}