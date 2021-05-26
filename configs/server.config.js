require('dotenv').config()
const express = require('express');
const app = express();
const server = require('http').Server(app);

function config() {
    const port = process.env.PORT || 3000;
    server.listen(port, () => {
        console.log(`Server is runing in ${port}`);
    });
    return app;
}
module.exports = {
    app,
    server,
    config,
}
