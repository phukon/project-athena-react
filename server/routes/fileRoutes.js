const express = require('express')
const router = express.Router()
const filesController = require('../controllers/filesController')
const uploadFile = require('../utils/uploadFile.js')


router.route('/')
    .post(uploadFile.single('file'),
    filesController.createFile)
    .get(filesController.getAllFiles)

module.exports = router;