const File = require('../models/File.js')
const asyncHandler = require('express-async-handler')

// @desc Get all notes 
// @route GET /notes
// @access Private
const getAllFiles = asyncHandler(async (req, res) => {
    res.status(201).json({ message: 'HELLO RESPONSE'});
})

const createFile = asyncHandler(async (request, response) => {
    const {fileName, file, branch, semester, college} = request.body;
    
    try {
        const fileDoc = await File.create({
            fileName,
            file,
            branch,
            semester,
            college
        });
        response.status(200).json({message : 'done dona done', file: fileDoc});
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
})

module.exports = {
    getAllFiles,
    createFile
}