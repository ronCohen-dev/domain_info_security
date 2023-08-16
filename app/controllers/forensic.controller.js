'use strict'

const forensicService = require("../services/forensic.service");

exports.getVirusTotalInfoController = async function (req, res, next) {
    const domain = req.query.domain;
    const data = await forensicService.getAndSaveDataForVirusTotalService(domain);
    return res.status(200).json(data);
};

exports.getWhoIsInfoController = async function (req, res, next) {
    const domain = req.query.domain;
    const data = await forensicService.getAndSaveDataForWhoIsService(domain);
    return res.status(200).json(data);
};

exports.checkWithBothController = async function (req, res, next) {
    const domain = req.query.domain;
    const [whoisInfo, virusTotalInfo] = await forensicService.getAndSaveDataForVirusTotalAndWhoIsService(domain);
    return res.status(200).json({whoisInfo, virusTotalInfo});
}
