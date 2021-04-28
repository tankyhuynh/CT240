const session = require('express-session');
const cors = require('cors');
const express=  require('express');
const maxAge = process.env.EXPIRESIN || 60;


function config(app){
    app.use(express.urlencoded());
    app.use(express.json());
    app.use(session({
        secret: "core-protected",
        cookie: {
            maxAge: (1000 * 60) * maxAge,
        }
    }));
    app.use(cors());
};

module.exports = {
    config
}
