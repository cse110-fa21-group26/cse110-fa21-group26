// https://api.spoonacular.com/recipes/complexSearch?apiKey=6e66a0ae735e4b0b953d40b95f60eb8c&query=muffin+breakfast&number=100
// put into function that takes in searchinput
// function search(searchInput){
//    let search = generic + "complexSearch?" + apiKey + "query=breakfast+" + searchInput + "&number=100";
//     fetch(search)
        //.then
//}
// let search = generic + "complexSearch?" + apiKey + "query=breakfast+" + searchInput + "&number=100";


// let recipes;
// let recipeData = {};

// async function getAllBreakfastRecipes(){
//     let search = generic + "complexSearch?" + apiKey + "&type=breakfast&number=100";
//     let search1 = generic + "complexSearch?" + apiKey + "&type=breakfast&number=100&offset=100";
//     let search2 = generic + "complexSearch?" + apiKey + "&type=breakfast&number=100&offset=200";
//     return new Promise((resolve, reject) => {
//     Promise.all([
//       fetch(search)
//         .then((response) => response.json()),
//       fetch(search1)
//         .then((response1) => response1.json()),
//       fetch(search2)
//       .then((response2) => response2.json())])
//     .then((data) => {
//       //console.log(data);
//       //recipes.concat(data[0]["results"]);
//       recipes = data[0]["results"].concat(data[1]["results"],data[2]["results"]);
//       //recipes.concat(data[1]["results"],data[2]["results"]);
//       console.log(recipes);
//       resolve(true);
//       //return recipes;
//     })
//     .catch((error) => {
//       console.log("Error getting all breakfast recipes");
//       reject(false);
//     });
//   });
//   }

//     async function createRecipeCards() {
//     console.log("reached here");
//     //undefined
//     //console.log(recipes[0]);
//     for (let i = 0; i < recipes.length; i++){
//       const card = document.createElement('article');
//       card.setAttribute('class', 'recipe-card');
//       //card.innerHTML = recipes[i];
  
//       const recipeTitle = document.createElement('h2');
//       recipeTitle.textContent = recipes[i]['title'];
  
//       const recipeImg = document.createElement('img');
//       recipeImg.setAttribute('src', recipes[i]['image']);
      
//       let recipeUrl = generic + recipes[i]['id'] + "/information?" + apiKey + "&includeNutrition=false";
//        // https://api.spoonacular.com/recipes/716429/information?apiKey=6e66a0ae735e4b0b953d40b95f60eb8c?includeNutrition=false
//        fetch(recipeUrl)
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);
//           console.log(recipes[i]['title']);
//           recipeData[recipes[i]['title']] = data;
//         });
  
//       card.appendChild(recipeTitle);
//       card.appendChild(recipeImg);
  
//       //console.log(recipes[i]);
      
      
//       document.querySelector('.container').appendChild(card);
//     }
//   }