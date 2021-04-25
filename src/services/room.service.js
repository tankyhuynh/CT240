const RoomModel = require('../models/room.model');

async function create(name, members){
    members = members.map(id=> ({user: id}));
    const room = new RoomModel({name, members});
    await room.save();
    return room;
}
async function getWithId(_id){
    return await RoomModel.findOne({_id}).lean();
}

async function getWithMember(member_id){
    const rooms = await RoomModel.find({members: {$all: member_id}}).sort({created_at: 1}).lean();
    return rooms;
}
async function getMemberWithId(_id){
    const members = (await getWithId(_id)).members.map(member=>member.user);
    return members;
}
async function addMember(_id, member){
    await RoomModel.updateOne({_id}, {members: {$push: [member]}});
}
async function memberChecker(_id, member){
    const members = await getMemberWithId(_id);
    
}

module.exports = {
    create,
    getWithId,
    getWithMember
}