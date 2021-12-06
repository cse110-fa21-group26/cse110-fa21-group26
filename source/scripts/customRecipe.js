export { customRecipe }

class customRecipe {
    constructor(name, ingredients, steps) {
        //super();
        //this.attachShadow({ mode: 'open' });
        this.name = name;
        this.ingredients = ingredients;
        this.steps = steps;
    }

    
    get name () {
        return this._name;
    }

    get ingredients () {
        return this._ingredients;
    }

    get steps () {
        return this._steps  ;
    }

    set name(n) {
        this._name = n;
    }

    set ingredients(i) {
        this._ingredients = i;
    }

    set steps(s) {
        this._steps = s;
    }
}