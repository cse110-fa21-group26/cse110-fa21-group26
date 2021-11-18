# ADR (Architectural Decisison Records)

## Create Theme for our app
### Context and Problem Statement
As recommended by the professor during office hours, we wanted to discuss if we should create our app based on a niche. This narrows range that our website covers which could make it simpler. 
### Considered Options 
1. Vegetarian Application
2. Breakfast Application 
3. No Theme
### Decision Outcome 
Firstly, we decided we wanted a theme since we were informed by the professor that this will make it easier to make a good application since it narrows the scope of our website. We initially wanted to design a vegetarian recipe app, but we pivoted to a breakfast recipes app. We felt that it was an easier scope to cover, as the ingredients of breakfast recipes are simpler and more consistent. It would allow for us to have easier defined categories and more consistent recipe formatting. Overall: exchanging reduced scope of user domain to reduced scope of service domain.

## Get recipes from Spoonacular
### Context and Problem Statement 
We need to populate our app with recipies, so we needed to decide the location from where we would get these recipies
### Considered Options 
1. Webscraping
2. Spoonacular API
3. Fill ourselves 
### Decision Outcome 
After looking at all three options, we decided to use spoonacular API since it seemed like the easiest to use and automate while also providing the gratest amount of information on our recipies and letting us filter by tags. We want to try using the Spoonacular API to collect and scrape recipes for us to display on our homepage. This API will hopefully make it easy for us to display many recipes on our page in an automated fashion. 
### Links
[Spoonacular API](https://spoonacular.com) 

## Users' local library
### Context and Problem Statement 
Since this is a C.R.U.D. application, users have the ability to create and update recipies into their local library, so we needed to decide where to store this local library 
### Considered Options 
1. Server Side
2. Client Side
### Decision Outcome 
To fulfill the CRUD features of this app we allow users to create, edit, and delete local recipes that are only available to the user with local access. We want to maintain simplicity by keeping local data offline and have these recipes only available to the user.

## Highly Intuitive Interface for Quick Use / easy recipes most accessibel from homescreen 
### Context and Problem Statement 
When designing the homescreen, we have an unlimited amount of options of home many things to place on the screen, how to layout the items on the screen, and how complicated it is to navigate to all the different pages from the home screen
### Considered Options 
1. Full Homescreen providing many options to navigate from 
2. simple, intuitive homescreen 
### Decision Outcome 
We want our users to be able to open the applicaiton and very quickly get to the recipes they want and having the most accessible recipes from the menu being easy diffculty ones. This inherently makes the app very friendly to people new to cooking.

## Adding Complex Features
### Context and Problem Statement 
When designing our app, we need to decide who to cater to. If you are a chef, you may want more features; however, if you are a novice, you want a simple and to the point recipe application
### Considered Options 
1. Gear for chef
2. Gear for novice
3. Gear for both by not facing user with complex features
### Decision Outcome 
To cater to users that have more experience, the sidebar (which itself is very acessble) will have many options for filtering, creating custom recipes, favouriting, creating an account, etc... all tools for the more expeienced. So these features will exist but they will not take from the spotlight of very accessible recipes / interfaces for those who are not as familiar. 

## Difficulty filter toggle accessible on "easy by default" and accessible at the category page level 
Again, to allow accessibilty for new cooks... but the toggle being very accessible makes it easy for experienced cooks to quickly dive into all possible recipes ratehr than beginner ones.

## Filter / Categories based on Personas
Because we want to be able to make certain recipes instantly accessible to our personas (whom are our target users generally), we want to make filtering for them instantly accessible. For example, filter by: vegetarian, vegan, quick time, high protein, difficulty level, nutrition level.

## Firebase Hosting instead of GitHub Pages...
TBD

## Using google style guide
### Context and Problem Statement 
We chose a stylecguide to base our code off of so that our group has something to refer to when coding to style their code so that we have uniform styling
### Considered Options 
1. Google 
2. Airbnb
3. StandardJS
### Decision Outcome 
We chose to go with google because they have easy to read rules on formatting and are widley used by other platforms


