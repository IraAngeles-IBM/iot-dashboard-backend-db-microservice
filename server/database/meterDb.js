var Sequelize = require('sequelize');

const DATABASE = 'christelmeter';
const MARIADB_USERNAME = 'root';
const MARIADB_PASSWORD = 'abcd1234'
const MARIADB_HOST = '172.17.0.2'

var database = new Sequelize(DATABASE, MARIADB_USERNAME, MARIADB_PASSWORD, {
    dialect: 'mariadb',
    host: MARIADB_HOST,
    logging: console.log,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
  })


var meterData = require("../models/meterData")(database, Sequelize);

meterData.removeAttribute("id");

  module.exports = {
    meterData : meterData
  }