require('dotenv').config()
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
});


function config() {
    const port = process.env.PORT || 3000;
    server.listen(port, () => {
        console.log(`Server is runing in ${port}`);
    });
    return app;
}
module.exports = {
    io,
    app,
    server,
    config,
}