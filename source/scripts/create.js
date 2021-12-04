
//const recipeData = {} // You can access all of the Recipe Data from the JSON files in this variable
document.getElementById('home').addEventListener('click', () => {
    window.location.href = 'index.html';
});

document.getElementById('library').addEventListener('click', () => {
    window.location.href = './custom.html';
});

document.getElementById('create').addEventListener('click', () => {
    window.location.href = 'create.html';
});

//const userRecipes = [];


const recipeForm = document.querySelector('.recipe-form');

/**
 * Get user input from the html forms and store the data in the local storage 
 */
recipeForm.addEventListener('submit', () => {
    event.preventDefault();

    let name = document.getElementById('recipe-name').value;
    let ingredients = document.getElementById('recipe-ingredients').value;
    let steps = document.getElementById('recipe-steps').value;
    let time = document.getElementById('recipe-time').value;
    let img = document.getElementById('recipe-image').value;
    var array = [];
    array.push(name,ingredients,steps, time, img);
    localStorage.setItem(name, JSON.stringify(array));
    location.reload();

    window.location.href= "./custom.html";
});

