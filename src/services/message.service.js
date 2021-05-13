const MessageModel = require('../models/message.model');
const {step} = require("../constants/query.constant");

async function get(_id, actor){
    const message = await MessageModel.findOne({_id}).lean(); // ??
    return message;
}
/**
 * 
 * @param {string} _id  - Room id
 * @param {string} actor 
 * @returns 
 */
async function getMessageLastOfRoom(_id, actor){
    let message;
    try {
        messages = await MessageModel.find({room: _id}).sort({created_at: -1}).limit(1).lean();
    } catch {return null};
    return message = messages[0];
}
/**
 * 
 * @param {string} _id  - Room id
 * @param {string} actor 
 * @returns full info message
 */
 async function getDetailMessageLastOfRoom(_id, actor){
    let message;
    try {
        messages = await MessageModel.find({room: _id}).sort({created_at: -1}).limit(1).populate("sender").lean();
    } catch {return null};
    return message = messages[0];
}

async function getMessageWithRoom(room,actor ,last ){
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
    const message = new MessageModel({sender ,room,  data});
    await message.save();
    return message;
}

module.exports =  {
    get,
    getMessageLastOfRoom,
    getDetailMessageLastOfRoom,
    getMessageWithRoom,
    create,
}

