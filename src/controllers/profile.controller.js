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
    let avatarUrl;
    let avatar;
    try {
        avatarUrl = (process.env.SERVER_DOMAIN || "http://locahost:3000/") +  req.file.path.split(/[\/\\]/).join("\/");
        avatar = avatarUrl;
    } catch {
        avatarUrl = null;
        avatar = null;
    }
    console.log(`avatar URL: ${avatarUrl}` );
    
    let id = getAuth(req);
    let data = {};
    let pofile = null;
    if(!name){} else {
        profile = await ProfileService.update(id, {name});
    }
    if(!avatar) {} else {
        profile = await ProfileService.update(id, {avatar});
    }
    if(!name && !avatar ){
        sendReject(res,"Nothing update!");
        return;
    }
    sendSuccess(res, profile);
}
function getUrl(id){
    return (process.env.SERVER_DOMAIN || "http://localhost:3000/") +  rootUrl + `/friends/${id}`;
}
module.exports = {
    get,
    getUrl,
    getOne,
    update
}