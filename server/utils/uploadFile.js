const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '../fileUploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null,Date.now() + '-'+ file.fieldname)
//   }
// })

// const uploadFile = multer({ storage: storage })
const uploadFile = multer({ dest: '/uploads' })

module.exports = uploadFile