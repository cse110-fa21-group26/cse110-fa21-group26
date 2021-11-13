const recipes = [
    'https://introweb.tech/assets/json/ghostCookies.json',
    'https://introweb.tech/assets/json/birthdayCake.json',
    'https://introweb.tech/assets/json/chocolateChip.json',
    'recipes/recipe1.json',
    'recipes/recipe2.json',
    'recipes/recipe3.json'
];

// Once all of the recipes that were specified above have been fetched, their
// data will be added to this object below. You may use whatever you like for the
// keys as long as it's unique, one suggestion might but the URL itself
const recipeData = {}

window.addEventListener('DOMContentLoaded', init);

// This is the first function to be called, so when you are tracing your code start here.
async function init() {
    // fetch the recipes and wait for them to load
    let fetchSuccessful = await fetchRecipes();
    // if they didn't successfully load, quit the function
    if (!fetchSuccessful) {
        console.log('Recipe fetch unsuccessful');
        return;
    };
    // Add the first three recipe cards to the page
    createRecipeCards();
    // Make the "Show more" button functional 

}

async function fetchRecipes() {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < recipes.length; i++) {
            var link = recipes[i];
            fetch(link)
                .then(response => response.json())
                .then(function (data) {
                    recipeData[recipes[i]] = data;
                })
                .then(function () {
                    if (Object.keys(recipeData).length == recipes.length) {
                        resolve(true);
                        return;
                    }
                })
                .catch(err => reject(false))

        }
    });
}

function createRecipeCards() {
    for (var i = 0; i < 3; i++) {
        var card = document.createElement('recipe-card');
        card.setAttribute('class', 'recipes');
        card.setAttribute('onclick', "window.location.href='https://w3docs.com';");
        card.data = recipeData[recipes[i]];
        document.querySelector('body main').appendChild(card);

    }

}