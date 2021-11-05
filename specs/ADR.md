# ADR (Architectural Decisison Records)

### Change theme to Breakfast: 
We initially wanted to design a vegetarian recipe app, but we pivoted to a breakfast recipes app. We felt that it was an easier scope to cover, as the ingredients of breakfast recipes are simpler and more consistent. It would allow for us to have easier defined categories and more consistent recipe formatting. Overall: exchanging reduced scope of user domain to reduced scope of service domain.

### Webscrape recipes for Spoonacular:
We want to try using the Spoonacular API (https://spoonacular.com) to collect and scrape recipes for us to display on our homepage. This API will hopefully make it easy for us to display many recipes on our page in an automated fashion. 

### Users' local library
To fulfill the CRUD features of this app we allow users to create, edit, and delete local recipes that are only available to the user with local access. We want to maintain simplicity by keeping local data offline and have these recipes only available to the user.

### Optional account feature
So that the user can get their custom recipes on different devices they have the option to quickly make an account to upload an encoding of their jsons to the server to be downloaded on their other devices by syncing.

### No Ratings/Reviews
Because having few reviews on a recipe can be a turn off for a user on its own and its likely many recipes in general don't get significnat attention, we feel its easier for the user's decision making to leave ratings out (less cognitive load on the user to decide, as most recipes have few reviews).

### Highly Intuitive Interface for Quick Use / easy recipes most accessibel from homescreen 
We want our users to be able to open the applicaiton and very quickly get to the recipes they want and having the most accessible recipes from the menu being easy diffculty ones. This inherently makes the app very friendly to people new to cooking.

### Complex featueres for advanced cooks / users availabe, but not "in your face"
To cater to users that have more experience, the sidebar (which itself is very acessble) will have many options for filtering, creating custom recipes, favouriting, creating an account, etc... all tools for the more expeienced. So these features will exist but they will not take from the spotlight of very accessible recipes / interfaces for those who are not as familiar. 

### Difficulty filter toggle accessible on "easy by default" and accessible at the category page level 
Again, to allow accessibilty for new cooks... but the toggle being very accessible makes it easy for experienced cooks to quickly dive into all possible recipes ratehr than beginner ones.

### Filter / Categories based on Personas
Because we want to be able to make certain recipes instantly accessible to our personas (whom are our target users generally), we want to make filtering for them instantly accessible. For example, filter by: vegetarian, vegan, quick time, high protein, difficulty level, nutrition level.

### 