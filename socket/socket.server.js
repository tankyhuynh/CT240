const socketio = require('socket.io');
const SocketController = require('./socket.controller');

async function config(io){
    await SocketController.route(io);
}
class SocketServer {
    constructor(){
        this.io = undefined;
    }
    connect(server){
        this.io = socketio(server, {
            cors: {
              origin: "*",
              methods: ["GET", "POST"]
            }
        });
        config(this.io);
    } 
}
const socketServer = new SocketServer();
module.exports = socketServer;