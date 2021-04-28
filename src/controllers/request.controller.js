const {getAuth} = require('../authentication');
const {request, merger} = require('../data-produce');
const {sendSuccess, sendReject} = require('../result');

const RequestService = require('../services/request.service');

async function get(req, res){
    const auth = getAuth(req);
    const requestsReceived = await RequestService.getReceived(auth) || [];
    const requestsSended = await RequestService.getSended(auth) || [];
    
    sendSuccess(res, [...requestsReceived, ...requestsSended]);
    return;
}
async function getOne(req, res){
    const id = req.params.id;
    const auth = getAuth(req);
    const requestFriend = await RequestService.getWithId(id, auth);
    if(!requestFriend) 
    {
        sendReject(res, "Noting to get!");
        return;
    };
    sendSuccess(res, requestFriend);
    return;
}
async function create(req, res){
    let data;
    try {
        console.log(merger(req));
        data = request(merger(req), ["receiver", "introduce"]);
        console.log(data);
    } catch {
        sendReject(res, "data emtry");
        return;
    }
    const {receiver, introduce} = data;
    const sender = getAuth(req);
    const requestFriend = await RequestService.create(sender, receiver, introduce);
    
    if(!requestFriend) {
        sendReject(res, "data emtry");
        return;
    }
    
    sendSuccess(res, requestFriend);
    return;
    
}
async function reply(req, res){
    let data;
    try {
        data = request(merger(req), ["id", 'accept']);
    } catch {
        sendReject(res, "Data incorrect!");
        return;
    }

    let {id, accept} = data;
    let auth = getAuth(req);
    let work = await RequestService.replyRequest(id, accept, auth);
    if(!work){
        sendReject(res);
        return;
    }
    sendSuccess(res);
    return;
}
async function remove(req, res){
    let auth = getAuth(req);
    const work = await RequestService.removeWithId(req.params.id, auth);
    if(!work){
        sendReject(res);
        return;
    }
    sendSuccess(res);
    return;
}

module.exports = {
    get,
    getOne,
    create,
    reply,
    remove
}