export {Router, bindRecipeCard, bindEscKey, bindPopstate}

class Router {
  static routes = {};

  constructor(homeFunc) {
    this['home'] = homeFunc;
  }

  addPage(page, pageFunc) {

    this[page] = pageFunc;
  }

  navigate(page, statePopped) {
    console.log(`navigate() function called, requested page: ${page}`);
    if(!this[page]){
      console.log("Error"); 
      return; 
    }
    let hash;
    if(page == "home") hash = "";
    else hash = "#" + page;
    let pageObject = {};
    pageObject["state_page"] = page;
    if((statePopped == false) && (window.location.hash != hash)) history.pushState(pageObject, "", window.location+hash);
    this[page]();
  }
}

function bindRecipeCard(recipeCard, pageName) {
    recipeCard.addEventListener('click', e => {
        if (e.path[0].nodeName == 'A') return;
        router.navigate(pageName, false);
    });
}

function bindEscKey() {
    document.addEventListener("keydown", (event) => {
        if(event.key == "Escape") router.navigate("home", false);
    });
}

function bindPopstate() {
    window.addEventListener("popstate", (event) => {
        if(event.state != null && event.state.state_page != null) router.navigate(event.state.state_page, true);
        else router.navigate("home", true);
    })
}
