const multer = require('multer');
const createStorage = require('./multerStorage');
module.exports = multer({storage: createStorage()}).single("avatar");
