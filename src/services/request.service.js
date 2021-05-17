// check
const RequestModel = require('../models/request.model');
const FriendService = require('./friend.service');
const RoomService = require('./room.service');
const SocketController = require('../../socket/socket.controller');

async function create(sender, receiver, introduce){
    if(sender === receiver) returnull;
    if(await FriendService.isFriend(sender, receiver)) return null;
    let request 
    try {
        request = await RequestModel.findOne({sender, receiver}).lean();
    } catch { request = null};
    if(!request){
        request = new RequestModel({sender, receiver, introduce});
        await request.save();
        SocketController.newRequest(receiver, request).then(); // 1.0.1
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

// // v1.0.0
// async function replyRequest(_id, accept, receiver){
//     // only receiver can reply
//     const request = await RequestModel.findOneAndDelete({_id, receiver});
//     if(!request) return false;
//     if(accept=='true' || accept ) {
//         await FriendService.create(request.sender, request.receiver);
//     }
//     return true;
// }

// v1.0.1
/**
 * @param {String} _id
 * @param {boolean} accept
 * @param {string} receiver - id of receiver
 * @returns boolean
 */
async function replyRequest(_id, accept, receiver){
    // only receiver can reply
    const request = await RequestModel.findOneAndDelete({_id, receiver});
    if(!request) return false;
    if(accept=='true' || accept ) {
        await FriendService.create(request.sender, request.receiver);
        await RoomService.create("", [request.sender, request.receiver]);
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