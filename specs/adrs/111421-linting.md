# Decisions made about linting workflow

## Context and Problem Statement
As recommended in class, we needed to have a workflow that would help our team maintain a consistent style for our entire project. We had two options that we could use and we tried both.
## Considered Options
1. eslint
2. superlinter
## Decision Outcome
We first tried out the eslint linter, but it did not give us much information about the style that we needed to use or if things were different or not. We could not figure out how to efficiently use it, so our final decision was to use superlinter, which was included in our CI pipeline when push worflow. The superlinter gave alot more information on what we needed to change to clean our code and where we had to go to change it, as well as an explanation on why the change was suggested. 