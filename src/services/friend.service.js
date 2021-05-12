const FriendModel = require('../models/friend.model');
const ProfileModel = require('../models/profile.model');
const {step} = require('../constants/query.constant');


// checked
async function create(user, friend){
    if(user==friend) return null; 
    let fr = await FriendModel.findOne({users: {$all: [user, friend]}});
    if(!fr) {
        fr = new FriendModel({users: [user, friend]});
        await fr.save(); 
    } 
    return fr;
}


async function getWithName(user, search="", page=0){
    const friends = await FriendModel.find({users: {$in: [user]}});
    const ids = friends.map((friend)=> friend.users.filter(el=>el!=user)[0]);
    
    let results;
    if(!page) {
        results = await ProfileModel.find({_id: {$in: ids}, name: {$regex: new RegExp(search), $options:'g'}}).sort({name: 1}).limit(step).skip(step*page).lean();
    } else {
        results = await ProfileModel.find({_id: {$in: ids}, name: {$regex: new RegExp(search), $options:'g'}}).sort({name: 1});
    }
    return results;
}


const RoomService = require('./room.service');
async function removeWithId(_id, user){
    // Only user can remove
    await FriendModel.deleteOne({_id, users: {$in: [user]}});
    return true;
}

// not use
async function removeWithUser(user, friend){
    await FriendModel.deleteOne({users: {$all: [user, friend]}});
    return true;
}

async function isFriend(user, friend){
    let fr = await FriendModel.findOne({users: {$all: [user, friend]}}).lean();
    if(!fr) return false;
    return true;
}

module.exports = {
    create, 
    getWithName,
    removeWithId,
    removeWithUser,
    isFriend,
}