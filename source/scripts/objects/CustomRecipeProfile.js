
export { CustomRecipeProfile }

class CustomRecipeProfile extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'open'});
    }

    set data(data) {
        // This is the CSS that you'll use for your recipe cards
        const styleElem = document.createElement('style');
        const styles = `


        .float-container {
            border-radius: 8px;
            padding: 20px;
            background-color: gray;
            width: 70%;
            margin: auto;
            height: 500px;
        }
        
        .float-child {
            float: left;
            height: 500px;
            width: 49%;
            font-family: Arial, Helvetica, sans-serif;
        
        }
        
        #right-child {
            margin-left: 15px;
        }
        
        .data {
            border-radius: 8px;
            padding: 20px;
            background-color: #fafafa;
            width: 41%;
            height: 90%;
            float: right;
            overflow-y: scroll;
            word-break: break-word; 
        }
        
        #image-button {
            border-radius: 4px;
            float: left;
            width: 50%;
            background-color: orange;
            font-weight: bold;
        }
        
        #ingredients-button {
            border-radius: 4px;
            width: 50%;
            background-color: teal;
            color: white;
            font-weight: bold;
        }
        
        #ingredients {
            display: none;
            
        }
        
        #recipe-img {
            border-radius: 8px;
            margin-left: auto;
            margin-right: auto;
            
            max-width: 100%;
            max-height: 95%;
        
        
            height: 500px; 
            object-fit: cover;
            width: calc(100% + 32px);
        
        }
      `;
        styleElem.innerHTML = styles;
        
        //create container
        let container = document.createElement("div");
        container.setAttribute("class", "float-container");
        container.setAttribute("id", "recipe-template");

        //set image button
        let leftChild = document.createElement("div");
        leftChild.setAttribute("class", "float-child");
        leftChild.setAttribute("id", "left-child");
        let imgButton = document.createElement("button");
        imgButton.setAttribute("id", "image-button");
        imgButton.innerHTML = "Image";

        //set ingredients button
        let ingredientsButton = document.createElement("button");
        ingredientsButton.setAttribute("id", "ingredients-button");
        ingredientsButton.innerHTML = "Ingredients";

        //set image
        let img = document.createElement("img");
        img.setAttribute("src", data[4]);
        img.setAttribute("id", "recipe-img");
        let ingredients = document.createElement("div");
        ingredients.setAttribute("id", "ingredients");
        ingredients.innerHTML = data[1];
        
        //append all
        leftChild.appendChild(imgButton);
        leftChild.appendChild(ingredientsButton);
        leftChild.appendChild(img);
        leftChild.appendChild(ingredients);
        let info = document.createElement("div");
        info.setAttribute("class", "data");
        info.innerHTML = data[2];

        container.appendChild(leftChild);
        container.appendChild(info);

        this.shadowRoot.appendChild(styleElem);
        this.shadowRoot.appendChild(container);

        imgButton.onclick = function () {
            if (ingredients.style.display !== 'none') {
                ingredients.style.display = 'none';
                img.style.display = 'block';
            }
        };
      
        ingredientsButton.onclick = function () {
            if (img.style.display !== 'none') {
                img.style.display = 'none';
                ingredients.style.display = 'block';
            }
        };
        let dropdown = document.getElementsByClassName("dropdown-btn");
      
        for (let i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function () {
                this.classList.toggle("active");
                let dropdownContent = this.nextElementSibling;
                if (dropdownContent.style.display === "block") {
                    dropdownContent.style.display = "none";
                }
                else {
                    dropdownContent.style.display = "block";
                }
            });
        }
    }
}


// Define the Class so you can use it as a custom element.
// This is critical, leave this here and don't touch it
customElements.define('custom-recipe-profile', CustomRecipeProfile);
