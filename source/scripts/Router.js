export class Router {
  
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
