const { Sequelize } = require('sequelize');
const db = require("../db/database.js");

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Sensors = db.define("sensors", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    date: {
        type: DataTypes.DATE                        
    },
    sensor1: {
        type: DataTypes.DOUBLE(11, 12) 
    },
    sensor2: {
        type: DataTypes.DOUBLE(11, 12)
    },
    sensor3: {
        type:DataTypes.DOUBLE(11, 12)
    },
    sensor4: {
        type: DataTypes.DOUBLE(11, 12)
    },
    createdAt:{
        type:DataTypes.DATE
    },
    updatedAt:{
        type:DataTypes.DATE
    }
}, {
    freezeTableName: true
});


module.exports = Sensors;
