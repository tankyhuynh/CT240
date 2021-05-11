// check
const RequestModel = require('../models/request.model');
const FriendService = require('./friend.service');

async function create(sender, receiver, introduce){
    if(await FriendService.isFriend(sender, receiver)) return null;
    let request 
    try {
        request = await RequestModel.findOne({sender, receiver}).lean();
    } catch { request = null};
    if(!request){
        request = new RequestModel({sender, receiver, introduce});
        await request.save();
    } 
    return request;
}

async function getWithId(_id, actor){
    const request = await RequestModel.findOne({_id, $or: [{sender: actor}, {receiver: actor}]}).lean();
    return request;
}
async function getSended(sender){
    const requests = await RequestModel.find({sender}).populate("sender").populate("receiver").lean();
    return requests;
}
async function getReceived(receiver){
    const requests = await RequestModel.find({receiver}).populate("sender").populate("receiver").lean();
    return requests;
}
async function removeWithId(_id, actor){
    // only sender can remove
    await RequestModel.deleteOne({_id, $or: [{sender: actor}, {receiver: actor}]});
    return true;
}

async function replyRequest(_id, accept, receiver){
    // only receiver can reply
    const request = await RequestModel.findOneAndDelete({_id, receiver});
    if(!request) return false;
    if(accept=='true' || accept ) {
        await FriendService.create(request.sender, request.receiver);
    }
    return true;
}


module.exports = {
    create,
    getSended,
    getReceived,
    getWithId,
    removeWithId,
    replyRequest
}