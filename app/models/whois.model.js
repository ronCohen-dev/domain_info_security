'use strict';
const DataTypes = require("sequelize").DataTypes;
const sequelize = require('../configs/sql.config');

const WhoisModel = sequelize.define('Whois', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    domainName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    parseCode: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    auditCreatedDate: {
        type: DataTypes.STRING,
        allowNull: true
    },
    auditUpdatedDate: {
        type: DataTypes.STRING,
        allowNull: true
    },
    registrarName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    registrarIANAID: {
        type: DataTypes.STRING,
        allowNull: true
    },
    registryCreatedDate: {
        type: DataTypes.STRING,
        allowNull: true
    },
    registryUpdatedDate: {
        type: DataTypes.STRING,
        allowNull: true
    },
    registryExpiresDate: {
        type: DataTypes.STRING,
        allowNull: true
    },
    registrantName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    registrantStreet1: {
        type: DataTypes.STRING,
        allowNull: true
    },
    registrantCity: {
        type: DataTypes.STRING,
        allowNull: true
    },
    registrantPostalCode: {
        type: DataTypes.STRING,
        allowNull: true
    },
    registrantCountry: {
        type: DataTypes.STRING,
        allowNull: true
    },
    registrantCountryCode: {
        type: DataTypes.STRING,
        allowNull: true
    },
    registrantEmail: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    sequelize,
    tableName: 'whois'
});


module.exports = WhoisModel;