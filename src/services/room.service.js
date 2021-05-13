//check

const RoomModel = require('../models/room.model');
const ProfileService = require('./profile.service');
const MessageService = require('./message.service');
const SocketController = require('../../socket/socket.controller');

/**
 * 
 * @param {string} name - name of room
 * @param {Array<string>} members - list members id
 * @returns room info
 */
async function create(name, members){
    if(members.length<2) return null;
    // first members is admin
    let admin = [members[0]];
    let room;
    if(members.length == 2) {
        admin = members;
        room = await RoomModel.findOne({"members.user": {$all: [members[0], members[1]]}});
        console.log(`<X> Error: Room with 2 members ${members[0]} and ${members[1]} is exist!`);
        if(!room){} else { return room};
    }
    members = members.map(id=> ({user: id}));
    room = new RoomModel({name, members, admin});
    await room.save();
    SocketController.newRoom(members, room).then();
    return room;
}

async function setName(_id, actor, name){
    const room = await RoomModel.findOneAndUpdate({_id, admin: {$in: [actor]} }, {name});
    return room;
}
async function getWithId(_id, actor){
    let room;
    try {
        room = await RoomModel.findOne({_id,"members.user": {$in: [actor]}}).lean();
    } catch {
        return null;
    }
    if(!room) return null;
    room.name = await getName(actor, room);
    room.avatar = await getAvatar(actor, room);
    return room;
}
//warning
async function getAvatar(actor, doc){
    if(doc.members.length == 2){
        if(doc.members[0].user == actor) {
            return (await ProfileService.getAvatar(doc.members[1].user));
        } 
        if(doc.members[1].user == actor) {
            return (await ProfileService.getAvatar(doc.members[0].user));
        } 
    }
    return doc.avatar;
}
async function getName(actor, doc){
    if(doc.members.length == 2){
        if(doc.members[0].user == actor) {
            return (await ProfileService.getName(doc.members[1].user));
        } 
        if(doc.members[1].user == actor) {
            return (await ProfileService.getName(doc.members[0].user));
        } 
    }
    return doc.name;
}

async function getWithMember(member_id){
    let rooms = await RoomModel.find({"members.user": {$in: member_id}}).lean() || [];
    for(i=0; i<rooms.length; i++){
        rooms[i].name = await getName(member_id, rooms[i]);
        rooms[i].avatar = await getAvatar(member_id, rooms[i]);
    }
    for(i=0; i<rooms.length; i++){
        rooms[i].messagelast = (await MessageService.getDetailMessageLastOfRoom(rooms[i]._id, member_id)) || {};
        rooms[i].messagelast_at = rooms[i].messagelast.created_at;
    }
    rooms = rooms.sort((a,b)=>{return a.messagelast_at > b.messagelast_at?-1:1})
    return rooms;
}

/**
 * 
 * @param {string} id id of room
 * @param {string} actor user get
 * @param {string} last last message was get
 * @returns {Promise<Array<{}>>} list message
 */
async function getMessages(room, actor, last){
    if(!await memberChecker(room, actor)) return null;
    let messages = await MessageService.getMessageWithRoom(room, actor, last) || [];
    return messages;
}

/**
 * 
 * @param {string} sender sender id
 * @param {string} room room id
 * @param {Object} data content
 * @returns {Promise<>} message
 */
async function createMessage(sender, room, data){
    if(!await memberChecker(room, sender)) return null;
    let message = await MessageService.create(sender, room, data);
    return message;
}


async function getMemberIdWithId(_id, actor) {
    const room = await getWithId(_id, actor);
    if(!room) return null;
    const members = room.members.map(member=>member.user);
    return members;
}

async function getMemberWithId(_id, actor){
    const room = await RoomModel.findOne({_id}).populate("members.user").lean();
    if(!room) return null;
    const members = room.members.map(member=>member.user);
    return members;
}
/**
 * Get all admin of a room
 * @param {string} _id - Room id
 * @param {string} actor - Actor 
 * @returns {Promise<Array<string>>}
 */
async function getAdmin(_id, actor){
    const room = await RoomModel.findOne({_id, "members.user": {$in: [actor]}}).lean();
    let admin = room.admin || [];
    return admin;
}

async function addMember(_id, member, actor){
    if(await memberChecker(_id, member)) return false;
    try {
        await RoomModel.updateOne({_id,"members.user": {$in: [actor]}}, {$push: {members: [{user: member}]}});
    } catch {
        return null;
    }
    return true;
}
async function removeMember(_id, member, actor){
    await RoomModel.updateOne({_id, admin: {$in: [actor]}}, {$pull: {members: {user: member}, admin: member}});
    const room = await RoomModel.findOne({_id});
    if(!room) return false;
    if(room.members.length <=2) {
        await RoomModel.deleteOne({_id});
    } else {
        if(room.admin <= 0) {
            await RoomModel.updateOne({_id}, {$push: {admin: [room.members[0].user]}});
        }
    }
    return true;
}
async function memberChecker(_id, member){
    const members = await getMemberIdWithId(_id, member);
    if(!members) return false;
    const check = members.some(el=>el==member);
    return check;
}
async function remove(_id, actor){
    if(!isAdmin(_id, actor)) return false;
    await RoomModel.deleteOne({_id});
    return true;
}
async function leave(_id, member){
    const admin = (await RoomModel.findOne({_id})).admin[0];
    if(!admin) return false;
    removeMember(_id, member, admin);
    return true;
}
async function isAdmin(_id, user){
    const room =  (await RoomModel.findOne({_id, admin: {$in: [user]}}));
    if(!room) return false;
    return true;
}


/**
 * Add a member to admin - not test
 * @param {string} _id
 * @param {string} actor
 * @param {string} newAdmin
 */
async function addAdmin(_id, actor, newAdmin){
    let work;
    if ((await getMemberIdWithId(_id, actor) || []).length == 2) return true;
    try {
       work =  await RoomModel.updateOne({_id,$and: [{admin: {$in: [actor]}}, {admin: {$nin: [newAdmin]}}], "members.user": {$in: [newAdmin]} }, {$push: {admin: [newAdmin]}});
       console.log(work);
    } catch { return false;}
    return true;
}
/**
 * remove admin of member - not test
 * @param {string} _id
 * @param {string} actor
 * @param {string} adminRemove
 */
async function removeAdmin(_id, actor, adminRemove){
    let work;
    if ((await getMemberIdWithId(_id, actor) || []).length == 2) return true;
    try {
       work =  await RoomModel.updateOne({_id}, {$pull: {admin: adminRemove}});
    } catch { return false;}
    return true;
}


module.exports = {
    create,
    setName,
    getWithId,
    getWithMember,
    getMemberWithId,
    getMemberIdWithId,
    addMember,
    removeMember,
    memberChecker,
    remove,
    leave,
    getAdmin,
    addAdmin,
    removeAdmin,
    getMessages,
    createMessage,
}