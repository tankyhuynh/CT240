const session = require('express-session');
const cors = require('cors');
const express=  require('express');
const maxAge = process.env.TOKEN_EXPIRESLN || 60;
const cookieParser = require('cookie-parser');

function config(app){
    console.log(maxAge)
    app.use(express.urlencoded());
    app.use(express.json());
    app.use(session({
        secret: "core-protected",
        cookie: {
            maxAge: (1000 * 60) * maxAge,
        }
    }));
    app.use(cors());
    app.use(cookieParser())
};

module.exports = {
    config
}
