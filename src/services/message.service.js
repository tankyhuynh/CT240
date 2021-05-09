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
        messages = messages.sort((mg1, mg2)=>{
            return (mg1.created_at < mg2.created_at)?-1:1;
        });
        return messages;
    }
    const messageLast = await MessageModel.findOne({_id: last}).lean();
    if(!messageLast) return getMessageWithRoom(room, actor);
    messages = messages.sort((mg1, mg2)=>{
        return (mg1.created_at < mg2.created_at)?-1:1;
    });
    return messages;
}

async function create(sender, room, data){
    if(!await RoomService.memberChecker(room, sender)) return null;
    const message = new MessageModel({sender ,room,  data});
    await message.save();
    return message;
}

module.exports =  {
    get,
    getMessageWithRoom,
    create
}

