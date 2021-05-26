/*
    Checked
*/

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
        console.warn("Create account error!");
        return null;
    }
    return pack(account);
}

async function getWithPhone(phone){
    const account = await AccountModel.findOne({phone}).lean();
    if(!account) return null;
    return pack(account)
}
async function getIdWithCheck(phone, password){
    let account = null;
    try {
        account = await AccountModel.findOne({phone}).lean();
    } catch {}
    if(!account) return undefined;
    const checkResult = await bcrypt.compare(password, account.password);
    if(!checkResult) return undefined;
    return pack(account);
}
async function setPassword(_id, password){
    password = await bcrypt.hash(password, 1);
    try {
        await AccountModel.updateOne({_id}, {password});
    } catch {
        return false
    }
    return true;
}


module.exports = {
    create,
    getWithPhone,
    getIdWithCheck,
    setPassword
}