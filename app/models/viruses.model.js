'use strict';
const DataTypes = require("sequelize").DataTypes;
const sequelize = require('../configs/sql.config');


const VirusModel = sequelize.define('viruses', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    domainId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    jarm: {
        type: DataTypes.STRING,
        allowNull: true
    },
    whois: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    lastHttpsCertificateDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    lastDnsRecords: {
        type: DataTypes.JSON,
        allowNull: true
    },
    lastDnsRecordsDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    lastAnalysisDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    lastAnalysisStats: {
        type: DataTypes.JSON,
        allowNull: true
    },
    lastAnalysisResults: {
        type: DataTypes.JSON,
        allowNull: true
    },
    popularityRanks: {
        type: DataTypes.JSON,
        allowNull: true
    },
    reputation: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    lastHttpsCertificate: {
        type: DataTypes.JSON,
        allowNull: true
    },
    tld: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lastModificationDate: {
        type: DataTypes.DATE,
        allowNull: true
    },
    categories: {
        type: DataTypes.JSON,
        allowNull: true
    },
    totalVotes: {
        type: DataTypes.JSON,
        allowNull: true
    }
});

exports.findByDomainId = async function (domainId) {
    return VirusModel.findOne({
        where: {
            domainId: domainId
        }
    });
}

module.exports = VirusModel;