const AccountModel = require('../models/account.models');
const bcrypt = require('bcrypt');

function pack(account){
    return {
        _id: account._id
    }
}

async function create(phone, password){
    let account;
    try {
        password = await bcrypt.hash(password, 1);
        account = new AccountModel({phone,password});
        account.save();
    } catch { 
        return null;
    }
    return pack(account);
}

async function getWithPhone(phone){
    const account = await AccountModel.findOne({phone}).lean();
    if(!account) return null;
    return pack(account)
}
async function passwordChecker(phone, password){
    let account = null;
    try {
        account = await AccountModel.findOne({phone}).lean();
    } catch {}
    if(!account) return false;
    const checkResult = await bcrypt.compare(password, account.password);
    return checkResult;
}

module.exports = {
    create,
    getWithPhone,
    passwordChecker
}