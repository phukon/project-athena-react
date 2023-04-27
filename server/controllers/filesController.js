require('dotenv').config()
const File = require('../models/File.js')
const asyncHandler = require('express-async-handler')

// @desc Get a file 
// @route GET /files
// @access Private
const getFile = async (request, response, next) => {
    try{
        const file = await File.findById(request.params.fileId)
        file.downloadCount += 1;
        await file.save();
        response.download(file.path, file.name)
    } catch (error){
        console.error(error.message);
        response.status(500).json({ msg: error.message });
    }
}

// @desc Get all files 
// @route GET /files
// @access Private
const getAllFiles = asyncHandler(async (req, res) => {
    const files = await File.find().lean();
    
    if (!files?.length) {
        return res.status(400).json({message: 'No users found'})
    }
    res.json(files);
})


// @desc Create file 
// @route POST /files/:fileId
// @access Private

const createFile = async (request, response, next) => {
    const {branch, semester, college} = request.body;
    try {
        const fileDoc = await File.create({
            path: request.file.path,
            fileName: request.file.originalname,
            branch,
            semester,
            college
        });
        response.status(200).json({message : 'done dona done', path: `${process.env.ORIGIN}/files/${fileDoc._id}`});
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
};


module.exports = {
    getFile,
    createFile,
    getAllFiles
}