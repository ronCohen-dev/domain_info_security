'use strict';

const {Sequelize} = require("sequelize");
const {SQL_PORT, SQL_ROOT_PASSWORD, SQL_DATABASE, SQL_TYPE} = require("../utils/constant.util");

const sequelize = new Sequelize(SQL_DATABASE, 'root', SQL_ROOT_PASSWORD, {
    host: `sql`,
    dialect: SQL_TYPE,
    port: SQL_PORT
});
console.log("SQL_PORT, SQL_ROOT_PASSWORD, SQL_DATABASE, SQL_TYPE : ", SQL_PORT, SQL_ROOT_PASSWORD, SQL_DATABASE, SQL_TYPE)
module.exports = sequelize;