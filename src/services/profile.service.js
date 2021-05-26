// check login


const ProfileModel = require("../models/profile.model");

// Create a profile with account id
async function createWithAccountId(_id, name){
    let profile;
    try {
        profile = new ProfileModel({_id, name});
        await profile.save();
    } catch {
        return null;
    }
    return profile;
}

// get a profile with id
async function getWithId(_id){
    let profile;
    try {
        profile = await ProfileModel.findOne({_id}); 
    } catch {
        return null;
    }
    return profile;
}

// get name of profile
async function getName(_id){
    return (await getWithId(_id)).name;
}
async function getAvatar(_id){
    return (await getWithId(_id)).avatar;
}

// update info
async function update(_id, data){
    let profile = null;
    await ProfileModel.updateOne({_id}, data);
    profile =  await ProfileModel.findOne({_id});
    return profile;
}

// 
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
    getName,
    getAvatar,
    update,
    updateAvatar,
    updateName


}