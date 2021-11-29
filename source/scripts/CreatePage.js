import { customRecipe } from './customRecipe.js';

export { CreatePage }

class CreatePage extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});

        const userRecipes = [];
        //localStorage.setItem('user-recipes', userRecipes);

        this.setup();

    }

    setup(data){
        // This is the CSS that you'll use for your recipe cards
        const styleElem = document.createElement('style');
        const styles = `
        body main{
            background-color: white; 
            margin: auto;
            width: 325px;
            border: 5px solid purple;
            padding: 50px;
        
        }
        
        .openbtn{
            margin: 10px; 
            font-size: 36px;
            color: purple
        }
        
        html {
            background-color: thistle;
        }
        
        #recipe-name {
            height: 20px;
            width: 300px;
        }
        
        #recipe-ingredients {
            height: 20px;
            width: 300px;
        }
        
        
        #recipe-steps {
            height: 200px;
            width: 300px;
        }
        
        main{
            width: 400px; 
        }
        
      `;
        styleElem.innerHTML = styles;

        let form = document.createElement("form");
        form.setAttribute("class", "recipe-form");
        
        let wrapper = document.createElement("div");
        form.appendChild(wrapper);

        let labelName = document.createElement("label");
        labelName.setAttribute("for", "recipe-name");
        labelName.innerHTML = "Recipe Name";
        wrapper.appendChild(labelName);
        wrapper.appendChild(document.createElement("br"));

        let inputName = document.createElement("input");
        inputName.setAttribute("type", "text");
        inputName.setAttribute("id", "recipe-name");
        inputName.setAttribute("name", "recipe-name");
        wrapper.appendChild(inputName);
        wrapper.appendChild(document.createElement("br"));

        let labelIngredients = document.createElement("label");
        labelIngredients.setAttribute("for", "recipe-ingredients");
        labelIngredients.innerHTML = "Ingredients";
        wrapper.appendChild(labelIngredients);
        wrapper.appendChild(document.createElement("br"));

        let inputIngredients = document.createElement("input");
        inputIngredients.setAttribute("type", "text");
        inputIngredients.setAttribute("id", "recipe-ingredients");
        inputIngredients.setAttribute("name", "recipe-ingredients");
        inputIngredients.setAttribute("multiple", "");
        wrapper.appendChild(inputIngredients);
        wrapper.appendChild(document.createElement("br"));

        let labelSteps = document.createElement("label");
        labelSteps.setAttribute("for", "recipe-steps");
        labelSteps.innerHTML = "Steps";
        wrapper.appendChild(labelSteps);
        wrapper.appendChild(document.createElement("br"));

        let inputSteps = document.createElement("input");
        inputSteps.setAttribute("type", "text");
        inputSteps.setAttribute("id", "recipe-steps");
        inputSteps.setAttribute("name", "recipe-steps");
        inputSteps.setAttribute("multiple", "");
        wrapper.appendChild(inputSteps);
        wrapper.appendChild(document.createElement("br"));

        let saveButton = document.createElement("button");
        saveButton.setAttribute("class", "steps-submit");
        saveButton.setAttribute("type", "submit");
        saveButton.innerHTML = "Save";
        wrapper.appendChild(saveButton);
        wrapper.appendChild(document.createElement("br"));

        this.shadowRoot.appendChild(styleElem);
        this.shadowRoot.appendChild(wrapper);

        this.shadowRoot.appendChild(document.createElement("div"));

        saveButton.addEventListener('click', (event) => {
            event.preventDefault();
            //console.log("hi");
            let name = inputName.value;
            let ingredients = inputIngredients.value;
            let steps = inputSteps.value;
        
            let newRecipe = new customRecipe(name, ingredients, steps);
            //console.log(newRecipe);
            //let localRecipes = localStorage.getItem('user-recipes');
            //localRecipes.push(newRecipe);
            //localStorage.setItem('user-recipes', userRecipes);
            var data = {name: name, ingredients: ingredients, steps: steps};
            
            // var getData =
            // {
            //     "firstdata":name,
            //     "seconddata":ingredients,
            //     "thirddata":steps
            // }
            //localStorage.setItem(name, newRecipe);
        
            //localStorage.setItem('Data', JSON.stringify(data));
        
            //var result = localStorage.getItem('getData');
        
            //console.log(JSON.stringify(data));
            //var array = JSON.parse(localStorage.getItem('Data') || '[]');
            var array = [];
            array.push(name,ingredients,steps);
            //console.log(array);
            localStorage.setItem(name, JSON.stringify(array));
            console.log(localStorage);
            //console.log('Name: ', name, 'Ingredients: ', ingredients, 'Steps: ', steps);
            //form.submit();

            inputName.value = "";
            inputIngredients.value  = "";
            inputSteps.value  = "";
        
        });

        // FUNCTIONS GO HERE

    }

}

// Define the Class so you can use it as a custom element.
// This is critical, leave this here and don't touch it
customElements.define('recipe-create', CreatePage);
