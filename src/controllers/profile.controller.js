const {getAuth} = require('../authentication');
const {request, merger} = require('../data-produce');
const {sendSuccess, sendReject} = require('../result');

const ProfileService = require('../services/profile.service');
const AccountService = require('../services/account.service');
const {rootUrl} = require('../constants');


async function get(req, res){
    const phone = req.query.phone;
    let profile;
    if(!phone) {
        let id = getAuth(req);
        profile = await ProfileService.getWithId(id);   
        sendSuccess(res, profile);
        return;
    }
    const account = await AccountService.getWithPhone(phone);
    if(!account) {
        sendSuccess(res);
        return;
    }

    profile = await ProfileService.getWithId(account._id);
    sendSuccess(res, profile);
    return;
}

async function getOne(req, res){
    const id = req.params.id;
    let profile = await ProfileService.getWithId(id);
    sendSuccess(res, profile);
    return;
}
async function update(req, res){
    let name = req.body.name;
    // let avatar = req.body.avatar;
    let avatarUrl = (process.env.SERVER_DOMAIN || "") +  req.file.path.split(/[\/\\]/).join("\/");
    let avatar = avatarUrl;
    
    let id = getAuth(req);
    let data = {};
    if(!name){} else {
        await ProfileService.updateName(id, name);
            sendSuccess(res);
            return;
    }
    if(!avatar) {} else {
        await ProfileService.updateAvatar(id, avatar);
        sendSuccess(res);
        return;
    }
    sendReject(res,"Nothing update!");
    return;
}
function getUrl(id){
    return (process.env.SERVER_DOMAIN || "") +  rootUrl + `/friends/${id}`;
}
module.exports = {
    get,
    getUrl,
    getOne,
    update
}