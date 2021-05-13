const {getAuth} = require('../authentication');
const {request, merger} = require('../data-produce');
const {sendSuccess, sendReject} = require('../result');
const {rootUrl} = require('../constants');

const RoomService = require('../services/room.service');
const ProfileController = require('./profile.controller');
const MessageService = require('../services/message.service');

function getUrl(roomId) {
    return (process.env.SERVER_DOMAIN || "http://localhost:3000") + rootUrl+ `/rooms/${roomId}`;
}

async function get(req, res){
    let {search, page} = merger(req);
    const auth = getAuth(req);
    const rooms = await RoomService.getWithMember(auth);
    const resData = {
        data: rooms.map(el=>({...el, ref: getUrl(el._id)}))
    }
    sendSuccess(res, resData);
    return;
}
async function create(req, res){
    let {name, members} = merger(req);
    const auth = getAuth(req);
    members = [auth, ...members];
    const room = await RoomService.create(name ||"", members);
    if(!room){
        sendReject(res);
        return;
    }
    sendSuccess(res, room);
    return;
}
async function getOne(req, res){
    let {id} = merger(req);
    const auth = getAuth(req);
    
    const room = await RoomService.getWithId(id, auth);
    sendSuccess(res, room);
    return;
}
async function updateOne(req, res){
    let {id, name} = merger(req);
    const auth = getAuth(req);
    const room = await RoomService.setName(id, auth, name);
    sendSuccess(res, room);
    return;
}
async function removeOne(req, res){
    let {id} = merger(req);
    const auth = getAuth(req);
    let work = await RoomService.remove(id, auth)
    if(!work){
        sendReject(res);
        return;
    }
    sendSuccess(res);
}
async function getMembers(req, res){
    let {id} = merger(req);
    const auth = getAuth(req);
    const members = await RoomService.getMemberWithId(id, auth) || [];
    
    const resData= members.map(el=>({...el, ref: ProfileController.getUrl(el)}));
    sendSuccess(res, resData);
}
async function addMember(req, res){
    let {id, _id: member_id} = merger(req);
    const auth = getAuth(req);
    let work = await RoomService.addMember(id, member_id, auth);
    if(!work){
        sendReject(res);
        return;
    }
    sendSuccess(res);
}
async function removeMember(req, res){
    let {id, member} = merger(req);
    const auth = getAuth(req);
    let work = await RoomService.removeMember(id, member, auth);
    if(!work){
        sendReject(res);
        return;
    }
    sendSuccess(res);
}
async function settingMember(req, res){
    let {id, member, admin} = merger(req);
    const auth = getAuth(req);
    let work;
    if(admin == true || admin == "true"){
        work = await RoomService.addAdmin(id, auth, member);
    } else {
        work = await RoomService.removeAdmin(id, auth, member);
    };
    if(work){
        sendSuccess(res);
    } else { sendReject(res)};
}

async function getMessage(req, res){
    let {id, last} = merger(req);
    const auth = getAuth(req);
    const messages = await RoomService.getMessages(id, auth, last) || [];
    sendSuccess(res, messages);
}

module.exports = {
    getUrl,
    get,
    create,
    getOne,
    updateOne,
    removeOne,
    getMembers,
    addMember,
    removeMember,
    settingMember,
    getMessage,
}