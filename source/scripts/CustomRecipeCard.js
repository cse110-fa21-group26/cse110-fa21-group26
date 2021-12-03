
export { CustomRecipeCard }

class CustomRecipeCard extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});
    // You'll want to attach the shadow DOM here
  }

  set data(data) {
    // This is the CSS that you'll use for your recipe cards
    const styleElem = document.createElement('style');
    const styles = `
    * {
      font-family: sans-serif;
      margin: 0;
      padding: 0;
    }
    
    a {
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
    
    article {
      align-items: center;
      border: 1px solid rgb(223, 225, 229);
      border-radius: 8px;
      display: grid;
      grid-template-rows: 118px 56px 14px -10px 15px 36px;
      height: auto;
      row-gap: 5px;
      padding: 0 16px 16px 16px;
      width: 178px;
    }

    div.rating {
      align-items: center;
      column-gap: 5px;
      display: flex;
    }
    
    div.rating > img {
      height: auto;
      display: inline-block;
      object-fit: scale-down;
      width: 78px;
    }

    article > img {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      height: 118px;
      object-fit: cover;
      margin-left: -16px;
      width: calc(100% + 32px);
    }

    p.ingredients {
      height: 32px;
      line-height: 16px;
      padding-top: 4px;
      overflow: hidden;
    }
    
    p.organization {
      color: black !important;
    }

    p.title {
      display: -webkit-box;
      font-size: 16px;
      height: 36px;
      line-height: 18px;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    p:not(.title), span, time {
      color: #70757A;
      font-size: 12px;
    }
  `;
    styleElem.innerHTML = styles;

    // Here's the root element that you'll want to attach all of your other elements to
    const card = document.createElement('article');
 
    // Create/append img element
    let img = document.createElement("img");
    let imgSrc = data[4];
    let imgAlt = data[0];
    img.setAttribute("src", imgSrc);
    img.setAttribute("alt", imgAlt);
    card.appendChild(img);
    
    // Create/append p element ; class title
    const title = document.createElement("p");
    title.setAttribute("class", "title");
    title.innerHTML = imgAlt;
    card.appendChild(title);

    // Create/append time element
    const time = document.createElement("time");
    let timeContent = data[3];
    time.innerHTML = timeContent + "  Minutes"; 
    card.appendChild(time);

    
    this.shadowRoot.appendChild(styleElem);
    this.shadowRoot.appendChild(card);
    
  }
}

// Define the Class so you can use it as a custom element.
// This is critical, leave this here and don't touch it
customElements.define('custom-recipe-card', CustomRecipeCard);