const multer = require('multer');
const createStorage = require('./multerStorage');

const MIME_TYPE_LIST = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    "application/msword",
    /application\/[a-zA-Z0-9]+/,
];

module.exports = multer({storage: createStorage(MIME_TYPE_LIST)}).single("file");
