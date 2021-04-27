const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_TOKEN || "core-chat";


async function authenticate(req, res, next){
    if(!req.session.account) {
        res.status(401).send();
        res.end();
        return;
    }
    next();
}
async function authenticateToken(req, res, next){
    const {token} = {...req.body, ...req.query, ...req.params}
    const decode = await jwt.verify(token, secret);
    if(!decode) {
        res.status(401).send();
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
function genarateToken(data){
    const token = jwt.sign({account: data.toString()} , secret, {expiresIn: "2d"});
    return token;
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