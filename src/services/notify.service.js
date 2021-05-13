const NotifyModel = require("../models/notify.model");

class NotifyService {
    /**
     * 
     * @param {string} account 
     * @param {string} type - type of notify
     * @param {object} content - content of notify
     * @returns {object} notify
     */
    static async create(account, type, content){
        const notify = new NotifyModel({account, type, content});
        await notify.save();
        return notify;
    }
    /**
     * 
     * @param {string} account 
     * @returns {Array<object>} list notify
     */
    static async loadAll(account){
        let notifys;
        try {
            notifys = await NotifyModel.find({account});
        } catch { return null;}
        this.deleteAll(account).then();
        return notifys;
    }
    /**
     * 
     * @param {string} account 
     */
    static async deleteAll(account){        
        try {
            await NotifyModel.deleteMany({account});
        } catch { return null;}
        return true;
    }
}

module.exports = NotifyService;