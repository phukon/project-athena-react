const express = require('express')
const router = express.Router()
const filesController = require('../controllers/filesController')
const uploadFile = require('../utils/uploadFile.js')


router.route('/')
    .post(filesController.createFile) //uploadFile.single('file') multer middleware
    .get(filesController.getAllFiles)

router.route('/:fileId').get(filesController.getFile)

module.exports = router;