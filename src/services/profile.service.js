const ProfileModel = require("../models/profile.model");

async function createWithAccountId(_id, name){
    let profile;
    // try {
        profile = new ProfileModel({_id, name});
        await profile.save();
    // } catch {return null}
    return profile;
}

async function getWithId(_id){
    const profile = await ProfileModel.findOne({_id});
    return profile;
}

async function update(_id, data){
    await ProfileModel.updateOne({_id}, data);
    return true;
}
async function updateAvatar(_id, avatar){
    await ProfileModel.updateOne({_id}, {avatar});
    return true;
}
async function updateName(_id, name){ 
    await ProfileModel.updateOne({_id}, {name});
    return true;
}

module.exports = {  
    createWithAccountId,
    getWithId,
    update,
    updateAvatar,
    updateName


}