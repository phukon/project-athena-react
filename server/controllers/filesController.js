const asyncHandler = require('express-async-handler')

// @desc Get all notes 
// @route GET /notes
// @access Private
const getAllFiles = asyncHandler(async (req, res) => {
    res.status(201).json({ message: 'HELLO RESPONSE'});
})

module.exports = {
    getAllFiles
}