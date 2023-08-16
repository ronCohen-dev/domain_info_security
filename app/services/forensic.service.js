'use strict'

const https = require('https');
const {VIRUS_TOTAL_API_KEY, WHO_IS_API_KEY} = require("../utils/constant.util");
const VirusModel = require("../models/virus.model");
const WhoisModel = require("../models/whois.model");
const ForensicUtil = require("../utils/forensic.util")

const fetchVirusTotalInfo = async function (domain) {
    let options = {
        'method': 'GET',
        'hostname': 'www.virustotal.com',
        'path': `/api/v3/domains/${domain}`,
        'headers': {
            'x-apikey': VIRUS_TOTAL_API_KEY
        },
    };

    return sendRequest(options);
}

const fetchWhoIsInfo = async function (domain) {
    let options = {
        'method': 'GET',
        'hostname': 'www.whoisxmlapi.com',
        'path': `/whoisserver/WhoisService?domainName=${domain}&apiKey=${WHO_IS_API_KEY}&outputFormat=json`,
    };

    return sendRequest(options);
}

const sendRequest = async function (options) {
    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                resolve(JSON.parse(data));
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.end();
    });
}

const getAndSaveDataForWhoIsService = async function (domain) {
    const whoIsTotalInfo = await fetchWhoIsInfo(domain);
    const whoIsData = ForensicUtil.parseWhoIsInfo(whoIsTotalInfo);
    const savedWhoIs = await WhoisModel.create(whoIsData);
    return savedWhoIs.dataValues
}

const getAndSaveDataForVirusTotalService = async function (domain) {
    const virusTotalInfo = await fetchVirusTotalInfo(domain);
    const virusData = ForensicUtil.parseVirusesTotal(virusTotalInfo);
    const savedVirus = await VirusModel.create(virusData);
    return savedVirus.dataValues
}

const getAndSaveDataForVirusTotalAndWhoIsService = async function (domain) {
    const whoisPromise = getAndSaveDataForWhoIsService(domain);
    const virusTotalPromise = getAndSaveDataForVirusTotalService(domain);
    return [await whoisPromise, await virusTotalPromise];
}

module.exports = {
    getAndSaveDataForVirusTotalService,
    getAndSaveDataForWhoIsService,
    getAndSaveDataForVirusTotalAndWhoIsService
};



