const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_TOKEN || "core-chat";

const SocketService = require("./socket.service");
const SocketController = require('./socket.controller');
function route(io){
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
        console.log("A client connected");
        socket.on("send:message",async (data)=> {
            await SocketController.sendMessage(socket, data);
        }); 
        
        socket.on("disconnecting",async (data)=> {
            console.log("A client diconnect");
            await SocketService.clearSocket(socket.account)
        })       
    })
}


module.exports = {
    route
}