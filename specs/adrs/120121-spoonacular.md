# Spoonacular Decisions

## Context and Problem Statement
We need to take into account that the spoonacular API quota is low for our needs. How do we account for this?

## Considered options
* Automate API key rotation every time the script is run.
* Export the JSONs that's accessible from the scripts

## Decision outcome
Chosen option: export the JSONs, because 

* In order to load our recipe data requries us to call all breakfast recipes. However, due to the small quota, we would have to constantly rotate API keys.
* Rotating API keys is tedious and unnecessarily complicated to check if our quota has run out.
* Implementing a rotating API key system into all of our scripts is out of scope for the time given.
* Exporting it once and saving it in another file allows us more flexibility in running and testing our code. 
* Exporting it is much easier as we are able to control which API key is used and substitute it as necessary when the quota is reached. Not only that, we would only need to run everything at once and save it. 
* We save the code used to get all these files for future use or maintenance.
* A pro would be we would not have to pay for a higher quota and we can save the quotas for other API calls (searching, filtering, etc.) 