'use strict';

const WhoisModel = require("../models/whois.model");
const VirusModel = require("../models/virus.model");

exports.checkWithVirusTotalMiddleware = async function (req, res, next) {
    const domain = req.query.domain;
    const domainForWhoisQuery = domain.replace(/^www\./i, '');
    const [whoisInfo, virusesInfo] = await Promise.all([
        WhoisModel.findOne({
            where: {
                domainName: domainForWhoisQuery
            }
        }),
        VirusModel.findOne({
            where: {
                domainId: domain
            }
        })

    ]);
    if (whoisInfo !== null && virusesInfo !== null) {
        return res.status(200).json({whoisInfo, virusesInfo})
    }
    console.log("go to the server");
    next();
}

