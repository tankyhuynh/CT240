const FriendModel = require('../models/friend.model');
const ProfileModel = require('../models/profile.model');
const {step} = require('../contants/query.contants');

async function create(user, friend){
    const fr = new FriendModel({users: [user, friend]});
    await fr.save();
    return fr;
}

async function getWithName(user, search, page){
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
async function removeWithId(_id){
    await FriendModel.deleteOne({_id});
    return true;
}
async function removeWithUsers(user, friend){
    await FriendModel.deleteOne({users: {$all: [user, friend]}});
    return true;
}

module.exports = {
    create, 
    getWithName,
    removeWithId,
    removeWithUsers
}