const express = require("express");
const { getSensors, createSensor, deleteSensor,deleteSensorAll } = require("../controllers/Sensor");

// Init express router
const router = express.Router();

// Route get all sensors
router.get('/sensors', getSensors);
// Route create a new sensor
router.post('/sensors', createSensor);
// Route delete sensor by id
router.delete('/sensors/:id', deleteSensor);

router.delete('/deleteSensorsAll',deleteSensorAll)

// export router
module.exports = router;