const MessageModel = require('../models/message.model');
const RoomService = require("../services/room.service");
const {step} = require("../constants/query.constant");

async function get(_id, actor){
    const message = await MessageModel.findOne({_id, $or: [{sender: actor}, {receiver: actor}]}).lean();
    return message;
}
async function getMessageWithRoom(room,actor ,last ){
    if(!await RoomService.memberChecker(room, actor)) return null;
    let messages ;
    
    if(!last){
        messages = await MessageModel.find({room}).sort({created_at: -1}).limit(step).lean();
        return messages;
    }
    const messageLast = await MessageModel.findOne({_id: last}).lean();
    if(!messageLast) return getMessageWithRoom(room, actor);
    messages = await MessageModel.find({room, created_at: {$lt: messageLast.created_at} }).sort({created_at: -1}).limit(step).lean();
    return messages;
}

async function create(sender, room, data){
    if(!await RoomService.memberChecker(room, sender)) return null;
    const message = new MessageModel({sender ,room,  data});
    await message.save();
    sendMessageToRoom(message, room);
    return message;
}
async function sendMessageToRoom(message, room){
    const members = await RoomService.getMemberWithId(room, message.sender);
    members.forEach(member => {
        sendMessage(message, member);
    });
}

// realtime
const iox = require('../../configs/server.config').io;
const {io} = require('../../configs/server.config');
const { getSocket } = require('../socket/socket.service');

async function sendMessage(message, user){
    console.log(iox===io);
    const socket_id = await getSocket(user);
    io.to(socket_id).emit("receive:message", message);
}


module.exports =  {
    get,
    getMessageWithRoom,
    create
}

