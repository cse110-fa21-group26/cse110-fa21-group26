

let imgButton = document.querySelector('#image-button');
let ingredients = document.querySelector('#ingredients');              
let ingredientsButton = document.querySelector('#ingredients-button');
let img = document.querySelector('img');

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