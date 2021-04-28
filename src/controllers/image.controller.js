
const {sendReject, sendSuccess} = require('../result');
const uploadMiddle = require('../middleware/multerUpload');

function upload(req, res){
    uploadMiddle(req, res, function(err){
        if(err){
            sendReject(res, "upload failure");
            return;
        }
        sendSuccess(res, {url: req.file.path.split(/[\/\\]/).join("\/")});
        return;
    });

}

module.exports = {
    upload
}