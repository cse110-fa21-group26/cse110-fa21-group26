

let imgButton = document.querySelector('#image-button');
let ingredients = document.querySelector('#ingredients');              
let ingredientsButton = document.querySelector('#ingredients-button');
let img = document.querySelector('img');

console.log(imgButton);
console.log(ingredients);
console.log(ingredientsButton);
console.log(img);

export function transferData(data){
    document.querySelector(".data") = data;
}

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