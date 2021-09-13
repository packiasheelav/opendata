# Opendata Visualization

This application is to create a system that would report a certain sensor data over around the internet. The result is a service that returns changing sensor data every hour. This application is to show visualization of the data, with the the information collected from https://opendata.hopefully.works/api/events.
   
### Prerequistes

To access the data i signed up https://opendata.hopefully.works/api/signup. I POST request my email and a password as JSON in the request body into signup endpoint https://opendata.hopefully.works/api/signup. As a return message i received an accessToken, which i used for the subsequent requests.
The format of signup :

POST /api/signup
Content-type: application/json
{ "email": "your.email@address", "password": "yourselectedpassword" }

For the task i made the request to /api/events to receive the JSON response below. The event changes once per hour, and contains data from four different sensors.

To be able to access the /api/events,i have set a request header using the accessToken which i received when signing up (or logging in): Authorization: Bearer <my accessToken>.

{"date": "2019-01-29T22:00:00.000Z", "sensor1": XXX, "sensor2": XXX, "sensor3": XXX, "sensor4": XXX}

The data is used in client UI to show the data visualization.
## The tech stack includes:

# Client
- React/Redux
- material ui

# Server
node js and 
DB - SQLite


## Getting Started

* Install the required packages with `yarn`  both in client and server

   - Start the  server with `yarn start` 
   - Open http://localhost:3001 for Server.
   
   - Open http://localhost:3000 for client and you should see the app homepage!

## Docker environment:

# Prerequisites:
Make sure you have already installed Docker Engine.

Installing/starting opendata/server:

$cd /opendata/server
$docker build -t sensor-rest-api-image .
docker run -p 3001:3001 -d --name sensor-rest-api sensor-rest-api-image

Installing/starting opendata/client:

$cd /opendata/client
$docker build -t sensor-web-image .
docker run -p 80:80 -d --name sensor-web sensor-web-image

GO to web ui
# http://< host >:80
   
## This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
