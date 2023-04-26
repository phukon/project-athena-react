const mongoose = require("mongoose")

const FileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: false
    },
    fileName: {
        type: String,
        required: false
    },
    file: {
        type: String,
        required: false
    },
    branch: {
        type: String,
        required: false
    },
    semester: {
        type: String,
        required: false
    },
    college: {
        type: String,
        required: false
    },
    downloadCount: {
        type: Number,
        required: true,
        default: 0
    },
})

const File = mongoose.model('File', FileSchema);

module.exports = File;