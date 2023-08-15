'use strict'

const express = require("express");

const router = express.Router();
const forensicController = require("../controllers/forensic.controller")
const checkMiddleware = require("../middlewares/forensic_check.middeware");

router.get('/virus-total', checkMiddleware.checkWithVirusTotal, forensicController.getVirusTotalInfoController)
router.get('/whoami', checkMiddleware.checkWithVirusTotal, forensicController.getWhoIsInfoController)
router.get('/check-all', checkMiddleware.checkWithVirusTotal, forensicController.checkWithBothController)


module.exports = router;
