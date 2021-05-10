//check

const RoomModel = require('../models/room.model');
const ProfileService = require('./profile.service');


async function create(name, members){
    if(members.length<2) return null;
    // first members is admin
    const admin = [members[0]];
    let room;
    if(members.length == 2) {
        room = await RoomModel.findOne({"members.user": {$all: [members[0], members[1]]}});
        console.log(`Room with 2 members ${members[0]} and ${members[1]} is exist!`);
        if(!room){} else { return room};
    }
    members = members.map(id=> ({user: id}));
    room = new RoomModel({name, members, admin});
    await room.save();
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
    return room;
}
//warning
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
    let rooms = await RoomModel.find({"members.user": {$in: member_id}}).sort({created_at: 1}).lean();
    for(i=0; i<rooms.length; i++){
        rooms[i].name = await getName(member_id, rooms[i]);
    }
    console.dir(rooms);

    return rooms;
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
    console.log(".. k>> o");
    console.log(room);
    const members = room.members.map(member=>member.user);
    console.log(".. ..");
    console.log(members);
    return members;
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
    const members = await getMemberWithId(_id, member);
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

}