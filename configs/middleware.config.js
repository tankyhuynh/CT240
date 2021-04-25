const session = require('express-session');
const cors = require('cors');

function config(app){
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
