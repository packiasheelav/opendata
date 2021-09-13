const Sequelize = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "../data/database.sqlite",
});
module.exports = db;
