
//adds event listeners when page is loaded
window.addEventListener('DOMContentLoaded', (event) => {
    configButtons();
    addCreateFunc();
});
/**
 * Adds event listeners to buttons at the top of the create page: Home, custom library, and create new recipe
 */
function configButtons() {
    //config home button
    document.getElementById('home').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    //config library button
    document.getElementById('library').addEventListener('click', () => {
        window.location.href = './custom.html';
    });
    //config create new button
    document.getElementById('create').addEventListener('click', () => {
        window.location.href = 'create.html';
    });
}

/**
 * Adds event listener to the submit button
 * When clicked, data in form is read in and saved as a string to local storage
 */

export function addCreateFunc() {

    let submitButton = document.querySelector('.steps-submit');
    let cancelButton = document.querySelector('.steps-cancel');

    submitButton.addEventListener('click', () => {
        event.preventDefault();
        //gets data from form element
        let name = document.getElementById('recipe-name').value;
        let ingredients = document.getElementById('recipe-ingredients').value;
        let steps = document.getElementById('recipe-steps').value;
        let time = document.getElementById('recipe-time').value;
        let img;
        if (document.querySelector('input[name="check"]:checked') != null)
            img = document.querySelector('input[name="check"]:checked').value;
        else
            img = "images/generic.jpg"
        //saves data into array
        var array = [];
        array.push(name, ingredients, steps, time, img);
        //stringify and push array to local storage
        localStorage.removeItem(sessionStorage.getItem('toDelete'));
        localStorage.setItem(name, JSON.stringify(array));
        location.reload();
        window.location.href = "./custom.html";
    });

    cancelButton.addEventListener('click', () => {
        event.preventDefault();
        window.location.href = "./custom.html";
    });
   
}