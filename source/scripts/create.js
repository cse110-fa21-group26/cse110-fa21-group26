//const recipeData = {} // You can access all of the Recipe Data from the JSON files in this variable
document.getElementById('home').addEventListener('click', (event) => {
    window.location.href = 'index.html';
});

document.getElementById('library').addEventListener('click', (event) => {
    window.location.href = './custom.html';
});

document.getElementById('create').addEventListener('click', (event) => {
    window.location.href = 'create.html';
});

const userRecipes = [];

const recipeForm = document.querySelector('.recipe-form');


recipeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let name = document.getElementById('recipe-name').value;
    let ingredients = document.getElementById('recipe-ingredients').value;
    let steps = document.getElementById('recipe-steps').value;
    let time = document.getElementById('recipe-time').value;
    let img = document.getElementById('img').value;

    var array = [];
    array.push(name,ingredients,steps, time, img);
    localStorage.setItem(name, JSON.stringify(array));
    location.reload();

    window.location.href= "./custom.html";
});