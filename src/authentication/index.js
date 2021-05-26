const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_TOKEN || "core-chat";
const expiresIn = process.env.TOKEN_EXPIRESIN || '60';

function genarateToken(data){
    const token = jwt.sign({account: data.toString()} , secret, {expiresIn: expiresIn + "m"});
    return token;
}
async function authenticate(req, res, next){
    authenticateToken(req, res, next);
    return;
}

async function authenticateSession(req, res, next){
    if(!req.session.account) {
        res.status(403).send();
        res.end();
        return;
    }
    next();
}
async function authenticateToken(req, res, next){
    const {token} = {...req.body, ...req.query, ...req.params, ...req.cookies, ...req.headers}
    let decode;
    try {
        decode = await jwt.verify(token, secret);
    } catch {
        decode = null;
    }
    if(!decode) {
        res.status(403).send();
        res.end();
        return;
    }
    req.account = decode.account;
    next();
}

function getAuth(req){
    return req.session.account || req.account;
}
function setAuth(req, key){
    req.session.account = key;
}

function clearAuth(req){
    req.session.account = "";
}


module.exports = {
    getAuth,
    setAuth,
    clearAuth,
    authenticate,
    authenticateToken,
    genarateToken
}