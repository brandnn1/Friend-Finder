
# Friend Finder - Node and Express Servers

## Overview
Friend-Finder is a full stack application that captures user survey input, compares that input to existing user inputs in a database, calculates the individual that best matches the user and displays that match. After the match is completed, the database is updated with the new inputs so that person can be matched to a new user. 


#### -Home Page-

localhost:8080 (or whatever port heroku assigns)

The home page is very simplistic. It allows a user to enter the survey, look at the current friends table by making an api call or going to the github repo.
![Home Screen Capture](/images/home.PNG)


#### -Survey View-


The survey itself captures 12 data elements: The user's name, their picture and the 10 survey question responses. 

![Survey Page Capture](/images/survey1.png)
![Survey Page 2 Capture](/images/survey2.png)

 
After the data elements are captured, the survey questions are compared to users already in the friends database. The comparison analyses each response from each user and determines who in the database most closely matches the current user's responses. This individual is then displayed to the user. 
 
![Survey Match Result Capture](/images/surveyResult.png)

Once the match occurs, the data from the user is pushed to the database to allow themselves to be compared to future users
 
#### -API Call View- 

The API Friends List link performs an express get route call and responds with a json object of the friends database. 

![Manager View Capture](/images/apifriends.png)

Here the user can confirm they've been added to the database and see other user's responses. 
