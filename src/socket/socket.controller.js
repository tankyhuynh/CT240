const {request} = require('../data-produce');
const MessageService =  require('../services/message.service');

class SocketController {
    static async sendMessage(socket, msg){
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
        socket.emit("message:send_success", message._id.toString());
        return;
    }
}

module.exports = SocketController;