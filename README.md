# DuckObserver

## Overview
- Allow users to submit how ducks are being fed around the world
- Allow scientist to view user's submissions and study them

## How to Run
client: hosts react frontend code
``` 
npm i
npm start
```
server: hosts nodeJS backend code
```
npm i
node index.js
```
mongoDB: use localhost db. (Optional: change URL to point to DB [here](https://github.com/tnguyen10/DuckObserver/blob/main/server/index.js#L15))
```
mongo
```

## Approach to problem
1. Started by creating the User submission page, alignning user input labels and textboxes
2. Setup NodeJS GET and POST route and connecting them with localhost MongoDB
3. Pull data from GET endpoint and show them on View Submission page
4. Finally route Submit page and View submission page using react-router

## Technologies used and why + Estimate of time spent developing
- Used React and Material UI to quickly spins up Grid view for data inputs and viewing
- Used NodeJS with MongoDB to store JSON data, since user inputs are not predefined (for example: unit of food is arbitrary)
- Spent around 5 hours


## Images
<img width="1246" alt="Screen Shot 2022-01-24 at 5 36 31 PM" src="https://user-images.githubusercontent.com/35233304/150888967-638153ac-3b08-401e-af37-1528f1f5ddbc.png">
<img width="1252" alt="Screen Shot 2022-01-24 at 5 36 55 PM" src="https://user-images.githubusercontent.com/35233304/150888973-7e41fb66-3b36-43a4-8cd2-5583cdfb8c43.png">
