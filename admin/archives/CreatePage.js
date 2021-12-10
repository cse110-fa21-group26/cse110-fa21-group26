/*
export { CreatePage }

class CreatePage extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});

        const userRecipes = [];
        //localStorage.setItem('user-recipes', userRecipes);

        this.setup();

    }

    setup(){
        // This is the CSS that you'll use for your recipe cards
        const styleElem = document.createElement('style');
        const styles = `
        
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
        
      `;
        styleElem.innerHTML = styles;

        let header = document.createElement("h1");
        header.innerHTML = "Create Your Own Recipe";
        this.shadowRoot.appendChild(header);

        let recipeForm = document.createElement("form");
        recipeForm.setAttribute("class", "recipe-form");
        
        let wrapper = document.createElement("div");
        recipeForm.appendChild(wrapper);

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

        let labelTime = document.createElement("label");
        labelTime.setAttribute("for", "recipe-time");
        labelTime.innerHTML = "Total prep time";
        wrapper.appendChild(labelTime);
        wrapper.appendChild(document.createElement("br"));

        let inputTime = document.createElement("input");
        inputTime.setAttribute("type", "text");
        inputTime.setAttribute("id", "recipe-time");
        inputTime.setAttribute("name", "recipe-time");
        inputTime.setAttribute("multiple", "");
        wrapper.appendChild(inputTime);
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

        let labelImage = document.createElement("label");
        labelImage.setAttribute("for", "img");
        labelImage.innerHTML = "Select Image:";
        wrapper.appendChild(labelImage);
        wrapper.appendChild(document.createElement("br"));

        let inputImage = document.createElement("input");
        inputImage.setAttribute("type", "file");
        inputImage.setAttribute("id", "img");
        inputImage.setAttribute("name", "img");
        inputImage.setAttribute("accept", "image/*");
        wrapper.appendChild(inputImage);
        wrapper.appendChild(document.createElement("br"));

        let saveButton = document.createElement("button");
        saveButton.setAttribute("class", "steps-submit");
        saveButton.setAttribute("type", "submit");
        saveButton.innerHTML = "Save";
        wrapper.appendChild(saveButton);
        wrapper.appendChild(document.createElement("br"));

        this.shadowRoot.appendChild(styleElem);
        this.shadowRoot.appendChild(recipeForm);

        recipeForm.addEventListener('submit', (event) => {
            event.preventDefault();
            let name = inputName.value;
            let ingredients = inputIngredients.value;
            let steps = inputSteps.value;
            let time = inputTime.value;
            let img = inputImage.value;
        
            var array = [];
            array.push(name,ingredients,steps, time, img);
            localStorage.setItem(name, JSON.stringify(array));
            location.reload();
        
            window.location.href= "./custom.html";
        });

        // FUNCTIONS GO HERE

    }

}

// Define the Class so you can use it as a custom element.
// This is critical, leave this here and don't touch it
customElements.define('recipe-create', CreatePage);
*/