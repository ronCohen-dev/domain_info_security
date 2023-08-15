'use strict';

const WhoisModel = require("../models/whois.model");
const VirusModel = require("../models/viruses.model");

exports.checkWithVirusTotal = async function (req, res, next) {
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
    console.log("whoisInfo,virusesInfo", whoisInfo, virusesInfo)
    if (whoisInfo !== null && virusesInfo !== null) {
        return res.status(200).json({whoisInfo, virusesInfo})
    }
    console.log("go to the server");
    next();
}

