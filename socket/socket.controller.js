const {request} = require('../src/data-produce');
const {createMessage,getMemberIdWithId } = require('../src/services/room.service')
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_TOKEN || "core-chat";

const SocketService = require("./socket.service");
const NotifyService = require('../src/services/notify.service');

class Msg {
    static async send(socket, msg){
        const sender = socket.account;
        let info;
        try {
             info = request(msg, ["room", "data"]);
        } catch {
            socket.emit("message:send_error");
        }
        const {room, data} = info;

        const message = await createMessage(sender, room, data);
        if(!message) { socket.emit("message:send_error", "You can't send!")}
        const members = await getMemberIdWithId(room, sender) || [];
        members.forEach(member => {
            SocketController.sendTo(member, "message:receive", message);
        });
        return;
    }
}


class SocketController {
    contructor(){
        SocketController.io = undefined;
    }; 
    
    /**
     * @param {string} sender 
     * @param {object} friend - friend info
     */
    static async newFriend(sender, friend){
        await this.sendTo(sender,"friend:new", friend);
    }
    /**
     * @param {string} receiver 
     * @param {string} request 
     */
    static async newRequest(receiver, request){
        await this.sendTo(receiver,"request:new", request);
    }

    /**
     * 
     * @param {Array<string>} members - list members
     * @param {Object} data - info of room
     */
    static async newRoom(members, data){
        members.foreach(async (member) => {
            await this.sendTo(member, "room:new", data)
        });
    }
    static async sendTo(to, type, data){
        console.log(`socket send ${to} with type ${type} `);
        // let socketId = await SocketService.getSocket(to);
        let socketId = await SocketService.getLocalSocket(SocketController.io, to);
        if(!socketId) {
            try {
                await NotifyService.create(to,type, data);
            } catch {};
        } else {    
            SocketController.io.to(socketId).emit(type, data);
        }
    }
    static async route(io){
        SocketController.io = io;
        io.use( async function(socket, next){
            if(socket.handshake.auth && socket.handshake.auth.token) {
                   let token =socket.handshake.auth.token;
                   jwt.verify(token,secret, (err, decoded)=>{
                       if(err){return next(new Error("Authenticate error ...."))};
                       socket.account = decoded.account;
                       next();
                       return;
                   });
               } else {
                   next(new Error("Authenticate error ...."));
                   return;
               }
        });
        io.on("connection", async (socket)=>{
            // await SocketService.setSocket(socket.account, socket.id);
            await SocketService.setLocalSocket(SocketController.io,socket.account, socket.id);
            console.log(">> A client connected!");

            let notifys = await NotifyService.loadAll(socket.account) || [];
            notifys.forEach(notify => {
                this.sendTo(notify.account, notify.type, notify.content).then();
                console.log(`.. Send notify to ${socket.account}`);
            });

            socket.on("disconnecting",async (data)=> {
                console.log("<X> A client diconnect!");
                // await SocketService.clearSocket(socket.account);
                SocketService.clearLocalSocket(SocketController.io, socket.account).then();
            })  

            // route here
            socket.on("message:send",async (data)=> {
                await Msg.send(socket, data);
            }); 
            
                
        })
    }
    
}

module.exports = SocketController;
