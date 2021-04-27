const session = require('express-session');
const cors = require('cors');
const express=  require('express');

function config(app){
    app.use(express.urlencoded());
    app.use(express.json());
    app.use(session({
        secret: "core-protected",
        cookie: {
            maxAge: (1000 * 60) * 30,
        }
    }));
    app.use(cors());
};

module.exports = {
    config
}
