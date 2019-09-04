const Sequelize = require("sequelize");
const db = require("../db");

const Result = db.define("result", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  money: Sequelize.INTEGER,
  days: Sequelize.INTEGER
});

module.exports = Result;