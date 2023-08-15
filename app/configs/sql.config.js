'use strict';

const {Sequelize} = require("sequelize");
const {MYSQL_PORT} = require("../utils/constant");

const sequelize = new Sequelize('main', 'root', 'pass', {
    host: `sql`,
    dialect: 'mysql',
    port: MYSQL_PORT
});

module.exports = sequelize;