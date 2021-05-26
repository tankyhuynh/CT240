
const {sendReject, sendSuccess} = require('../result');
const uploadMiddle = require('../middleware/multerUploadFile');

function upload(req, res){
    uploadMiddle(req, res, function(err){
        if(err){
            sendReject(res, "upload failure");
            return;
        }
        sendSuccess(res, {url: (process.env.SERVER_DOMAIN || "http://localhost:3000") + "/"+ req.file.path.split(/[\/\\]/).join("\/")});
        return;
    });
}

module.exports = {
    upload
}