
export { Category }

class Category extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
}
