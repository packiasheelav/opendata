// Import Product Model
const Sensors = require("../models/Sensors");
const moment = require("moment");
const { v4: uuidv4 } = require('uuid');

const getSensors = async (req, res) => {
    try {
        const sensor = await Sensors.findAll();
        /*const records = sensor.map(sen => sen.dataValues)
        const data = sensor.map(sensorRow => ({...sensorRow, date: moment(sensorRow.date).format("L")}));*/
        res.send(sensor);
    } catch (err) {
        console.log(err);
    }
}


// Create a new Sensor
const createSensor = async (req, res) => {
    try {
        const id = uuidv4();
        let payload = req.body || { date: "", sensor1: "", sensor2: "", sensor3: "", sensor4: "" };
        payload["id"] = id
        await Sensors.create(payload);
        res.json({
            "message": "Sendsor entry Created"
        });
    } catch (err) {
        console.log(err);
    }
}

// Delete Sensor by id
const deleteSensor = async (req, res) => {
    try {
        await Sensors.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Sensor Deleted"
        });
    } catch (err) {
        console.log(err);
    }

}

// Delete Sensor by id
const deleteSensorAll = async (req, res) => {
    try {
        await Sensors.destroy({where: {}});
        res.json({
            "message": "All Sensors data got Deleted"
        });
    } catch (err) {
        console.log(err);
    }

}
module.exports = { getSensors, createSensor, deleteSensor, deleteSensorAll }