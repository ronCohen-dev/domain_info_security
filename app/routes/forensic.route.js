'use strict'

const express = require("express");

const router = express.Router();
const forensicController = require("../controllers/forensic.controller")
const checkMiddleware = require("../middlewares/forensic_check.middleware");

router.get('/virus-total', checkMiddleware.checkWithVirusTotalMiddleware, forensicController.getVirusTotalInfoController)
router.get('/whoami', checkMiddleware.checkWithVirusTotalMiddleware, forensicController.getWhoIsInfoController)
router.get('/check-all', checkMiddleware.checkWithVirusTotalMiddleware, forensicController.checkWithBothController)


module.exports = router;
