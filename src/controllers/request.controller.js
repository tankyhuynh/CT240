const {getAuth} = require('../authentication');
const {request, merger} = require('../data-produce');
const {sendSuccess, sendReject} = require('../result');

const RequestService = require('../services/request.service');
const AccountService = require('../services/account.service');

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
        data = request(merger(req), ["receiver", "introduce"]);
    } catch {
        sendReject(res, "data emtry");
        return;
    }
    let {receiver, introduce} = data;
    if(receiver.length <= 12) {
        let receiverAccount = await AccountService.getWithPhone(receiver);
        if(!receiverAccount){
            sendReject(res, "not found");
            res.end();
            return;
        } else {
            receiver = receiverAccount._id;
        }
    }
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