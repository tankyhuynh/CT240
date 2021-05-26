const multer = require('multer');
const path = require('path');
const MIME_TYPE_LIST = [
  'image/png',
  'image/jpeg',
  'image/jpg',
];

function createStorage(mimeTypeList = MIME_TYPE_LIST){
  return storage = multer.diskStorage({
    destination: (req, file, callback) => {
      const isValid = mimeTypeList.some((el)=> ((new RegExp(el)).test(file.mimetype)));
      let error = new Error("Invalid mime type");
      if (isValid) {
        error = null;
      }
      callback(error, "public/images");
    },
    filename: (req, file, callback) => {
      const name = file.originalname.toLowerCase().split(' ').join('-');
      const extention = path.extname(file.originalname);
      callback(null, name + '-' + Date.now() + '.' + extention);
    }
  });
}

module.exports = createStorage;