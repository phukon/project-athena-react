const express = require('express')
const router = express.Router()
const filesController = require('../controllers/filesController')


router.route('/')
    .get(filesController.getAllFiles)

module.exports = router;