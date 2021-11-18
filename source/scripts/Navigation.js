
export {bindRecipeCard, bindEscKey, bindPopstate}

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

function bindCategory(category, pageName) {
    recipeCard.addEventListener('click', e => {
        if (e.path[0].nodeName == 'A') return;
        router.navigate(pageName, false);
    });
}
