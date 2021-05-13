/* 
    this is service with socket.io 
*/

const SocketModel = require('./socket.model');


class SocketService {
    /**
     * 
     * @param {object} io 
     * @param {string} account 
     * @param {string} id 
     */
    static async setLocalSocket(io, account, id){
        if(!io.client) io.client = [];
        io.client[account] = id;
    }
    /**
     * 
     * @param {object} io 
     * @param {string} account 
     * @returns 
     */
    static async getLocalSocket(io, account){
        let socketId;
        try {
            socketId = io.client[account];
        } catch { return null}
        return socketId
    }
    static async clearLocalSocket(io, account){
        io.client[account] = null;
    } 
    static async setSocket(account, socket){
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
    

}

module.exports = SocketService;