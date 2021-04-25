const RequestModel = require('../models/request.model');

async function create(sender, receiver, introduce){
    const request = await RequestModel({sender, receiver, introduce});
    await request.save();
    return request;
}
async function getSended(sender){
    const request = await RequestModel.find({sender});
    return request;
}
async function getReceived(receiver){
    const request = await RequestModel.find({sender});
    return request;
}
async function removeWithId(_id){
    await RequestModel.deleteOne({_id});
    return true;
}


module.exports = {
    create,
    getSended,
    getReceived,
    removeWithId
}