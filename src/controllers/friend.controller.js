const {getAuth} = require('../authentication');
const {request, merger} = require('../data-produce');
const {sendSuccess, sendReject} = require('../result');
const {rootUrl} = require('../constants');

const ProfileController = require('./profile.controller')
const FriendService = require('../services/friend.service');

async function get(req, res){
    let page = merger(req).page || 0;
    page = page<0?0:page;
    const auth = getAuth(req);
    let friends = await FriendService.getWithName(auth, "", page) || [];

    let resData = {
        data: friends.map(el=>({...el, ref: ProfileController.getUrl(el._id.toString())})),
        previous: (page>0?(getUrl(page-1)):""),
        next: getUrl(page+1)
    }
    sendSuccess(res,resData);
    return;
}
    
async function getOne(req, res){
    let {id} = merger(req);
    let auth = getAuth(req);
    sendReject(res, {error:"Router deleted!"});
    return;
}

async function remove(req, res){
    let {id} = merger(req);
    let auth = getAuth(req);
    
    const work = await FriendService.removeWithUser(auth,id);
    if(!work) {
        sendReject(res, "Not execute!");
        return;
    }
    sendSuccess(res); 
    return;
}

function getUrl(page){
    return (process.env.SERVER_DOMAIN || "") + rootUrl + `/friends?page=${page}`
}
module.exports = {
    get, 
    getUrl,
    getOne,
    remove
}