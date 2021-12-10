# Decision to not allow merges directly to main

## Context and Problem Statement
In order to not allow any bad code to be added into our main branch we needed a way to control all our pull requests to main. We wanted to be able to check the quality and aspect of our main page each time we pushed all code together. 
## Considered Options
1. Restrict merging directly to main
2. Maintain seperate branches for seperate aspects of the application
3. Manually check all code before accepting the pull request
## Decision Outcome
We decided to restrict directly pushing to main for everyone so as not to have 'bad code' be merged into our ending product. Instead, by restricting the merging to main we checked the quality of our code when we pusehd to a seperate branch and tried to pull request from there. When we started the pull request our github workflows would check our code and give us a preview of the new page which woulf allow us to make a decision on if we merged the pull request or not. So, our workflow consisted of local -> branch -> main. 