const express = require('express');
const cors = require('cors');
const app = express();
const cron = require('node-cron');
const db = require('./app/db/database.js');
const router = require('./app/routes/routes.js');
const sensorJson = require('./app/external/sensordatacollector')
const Sensors = require("./app/models/Sensors");

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors())

cron.schedule('*/1 * * * *', () => {
    console.log('running a task in 1 minutes');
    sensorJson.getSensorJson().then(response => {
        console.log("response", response);
    }).catch(err => console.log("error", err));
})


try {
    db.authenticate();
    console.log('Connection has been established successfully.');
    Sensors.sync({ force: false })
        .then(function () {
            console.log("Creates table if its not exist")
        });
} catch (error) {
    console.error('Unable to connect to the database:', error);
}


app.use(router);

const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});