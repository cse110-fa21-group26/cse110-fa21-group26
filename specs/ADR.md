# ADR (Architectural Decisison Records

### Change theme to Breakfast: 
We initially wanted to design a vegetarian recipe app, but we pivoted to a breakfast recipes app. We felt that it was an easier scope to cover, as the ingredients of breakfast recipes are simpler and more consistent. It would allow for us to have easier defined categories and more consistent recipe formatting.

### Scrape recipes for home page:
We want to try using the Spoonacular API (https://spoonacular.com) to collect and scrape recipes for us to display on our homepage. This API will hopefully make it easy for us to display many recipes on our page in an automated fashion.

### USers' local library
To fulfill the CRUD features of this app we allow users to create, edit, and delete local recipes that are only available to the user with local access. We want to maintain simplicity by keeping local data offline and have these recipes only available to the user.
