'use strict';

const WHO_IS_API_KEY = process.env.WHO_IS_API_KEY
const VIRUS_TOTAL_API_KEY = process.env.VIRUS_TOTAL_API_KEY
const SQL_PORT = process.env.SQL_PORT
const EXPRESS_PORT = process.env.EXPRESS_PORT
const SQL_ROOT_PASSWORD = process.env.SQL_ROOT_PASSWORD
const SQL_DATABASE = process.env.SQL_DATABASE
const SQL_TYPE = process.env.SQL_TYPE

module.exports = {
    VIRUS_TOTAL_API_KEY,
    WHO_IS_API_KEY,
    SQL_PORT,
    EXPRESS_PORT,
    SQL_ROOT_PASSWORD,
    SQL_DATABASE,
    SQL_TYPE
}