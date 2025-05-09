const express = require('express')
const router = express.Router()
const { localFileUpload } = require("../controller/fileUpload")

// creating API Route
router.post("/analyze", localFileUpload)

module.exports = router