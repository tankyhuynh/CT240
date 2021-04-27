const {request, merger} = require('../data-produce');
const AccountService = require('../services/account.service');
const ProfileService = require('../services/profile.service');
const {sendSuccess, sendReject} = require('../result');
const {getAuth, setAuth, clearAuth, genarateToken}= require('../authentication');


async function login(req, res){
    let data;
    data = request(merger(req), ["phone", "password"]);
    const account = await AccountService.getIdWithCheck(data.phone, data.password);
    if(!account) {
        sendReject(res, "phone or password incorect!");
        return;
    }
    
    const token = genarateToken(account._id);
    setAuth(req, account._id);
    
    sendSuccess(res, {...account, token});
}
async function logout(req, res){
    clearAuth(req);
    sendSuccess(res);
}
async function register(req, res){
    let data;
    data = request(merger(req), ["phone", "password", "name"]);
    const account = await AccountService.create(data.phone, data.password);
    await ProfileService.createWithAccountId(account._id, data.name);
    sendSuccess(res, account);
}


module.exports = {
    login,
    register,
    logout
}