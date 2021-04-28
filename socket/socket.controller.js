const {request} = require('../src/data-produce');
const MessageService =  require('../src/services/message.service');
const RoomService = require('../src/services/room.service')
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_TOKEN || "core-chat";

const SocketService = require("./socket.service");

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

        const message = await MessageService.create(sender, room, data);
        if(!message) { socket.emit("message:send_error", "You can't send!")}
        const members = await RoomService.getMemberWithId(room, sender) || [];
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
    static async sendTo(to, type, data){
        SocketController.io.to(await SocketService.getSocket(to)).emit(type, data);
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
            await SocketService.setSocket(socket.account, socket.id);
            console.log(">> A client connected!");
            socket.on("disconnecting",async (data)=> {
                console.log("<> A client diconnect!");
                await SocketService.clearSocket(socket.account)
            })  

            // route here
            socket.on("message:send",async (data)=> {
                await Msg.send(socket, data);
            }); 
            
                
        })
    }
    
}

module.exports = SocketController;