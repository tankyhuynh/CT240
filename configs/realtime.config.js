const SocketRouter = require('../src/socket/socket.router.js');

function config(io){
    SocketRouter.route(io); 
}

function saveGlobalIO(app){
    if(!io) return false;
    app.set("socketio", io);
    return true;
}
function getIO(){
    return io;
}
module.exports = {
    getIO,
    config,
    saveGlobalIO,
}