
import { Router, bindRecipeCard, bindEscKey,bindPopstate } from './Router.js';
import { Category } from './Category.js';
import { RecipeCard } from './RecipeCard.js';
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

/* Placeholder to view the recipe card thing */
var category = document.createElement('button');
category.setAttribute('class', 'category');
category.setAttribute('onclick', "window.location.href='recipe.html';");
category.innerHTML = 'Link to Recipe';
document.querySelector('.placeholder').appendChild(category);
