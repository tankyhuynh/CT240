/* 
    this is service with socket.io 
*/

const SocketModel = require('./socket.model');
class SocketService {
    static async setSocket(account, socket){
        console.log('setSocket is run');
        try {
            const auth = await SocketModel.findOneAndUpdate({_id:account}, {socket});
            if(!auth){
                await (new SocketModel({_id: account, socket})).save()
            }
        } catch(err) {
            console.log("set socket error" + err);
            return false;
        }

        return true;
    }
    static async getSocket(account){
        const auth = await SocketModel.findOne({_id: account});
        if(!auth) return null;
        return auth.socket;
    }
    static async clearSocket(account){
        await SocketService.setSocket(account, "");
    }
    static async sendTo(to, type, data){
        io.to(await SocketService.getSocket(to)).emit(type, data);
    }
}

module.exports = SocketService;