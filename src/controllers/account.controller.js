const {getAuth} = require('../authentication');
const {request, merger} = require('../data-produce');
const {sendSuccess, sendReject} = require('../result');

const AccountService = require('../services/account.service');

async function update(req, res){
    let actor = getAuth(req);
    let password = request(merger(req), ["password"]).password;
    const work = await AccountService.setPassword(actor,password);
    if(!work) {
        sendReject(res, "can't set!");
        return;
    }
    sendSuccess(res);
}
module.exports = {
    update
}