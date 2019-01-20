# JR-Weather-API-Walkthrough

The purpose of this project is to gain some practical experience on how to build an basic API server with Express.js, by achieving the following tasks:

- build up basic routes (including query params and route params)
- understand middlewares
- handle errors correctly
- re-structure the project

## Steps

### 1. Basic express server

- init the project and install express
  ```sh
  npm init --yes
  npm i express
  ```
- build up an express server
- setup the routes (fetch the data from [openweathermap](https://openweathermap.org/api))

### 2. Extract the routes

- extract routes into separate modules

### 3. Understand the ENV variables

- PORT
- use of dotenv

### 4. Other essential packages

- Helmet
- Morgan
- Winston

### 5. handle 404 errors

### 6. Back to data

- Create axios instance
- Create models
- Response formatter
- Error handling
- Country code check

### 7. Others

- Handle CORS problem
- uncaughtException and unhandledRejection
- Swagger

### 8. Deploy

- pm2
- heroku
