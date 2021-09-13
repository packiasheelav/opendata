const config = require('../../config')
const Axios = require('axios')
const http = require("http");
const https = require("https");
const Sensors = require("../models/Sensors");
const { v4: uuidv4 } = require('uuid');

const loginUrl = config.env.SENSOR_LOGIN_URL;
const sensorUrl = config.env.SENSOR_DATA_FETCH_URL
const authJson = { "email": config.env.SENSOR_USER_EMAIL, "password": config.env.SENSOR_USER_PWD }

const options = {
  httpsAgent: https.Agent({
    rejectUnauthorized: false
  }),
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  }
};

const getToken = async () => {
  try {
    options.method = "POST";
    const response = await Axios.post(loginUrl, authJson, options);
    console.log(response.status)
    const data = response.data;
    return { statusCode: response.status, data: data };
  } catch (error) {
    console.log("errror..", error);
    return { statusCode: 500, data: [] };
  }
};

const getSensorJson = async () => {
  let data = [];
  try {
    const tokenResponse = await getToken();
    if (tokenResponse.statusCode === 200) {
      options.headers['Authorization'] = "Bearer "+tokenResponse.data.accessToken || '';
      options.method = "GET"
      const response = await Axios.get(sensorUrl, options);
      console.log(response.status)
      if (response.status === 200) {
        data = response.data;
        await Sensors.count({ where: { 'date': data.date } }).then(count => {
          if (count === 0) {
            let payload = data;
            payload["id"] = uuidv4()
            Sensors.create(payload);
            console.log(data);
          } else {
            console.log("already same sensor data is inserted");
          }
        })
      }
    }
  } catch (error) {
    console.log(error);
  }
  return data;
};


exports.getSensorJson = getSensorJson

