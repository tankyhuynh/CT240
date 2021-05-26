const socketServer = require('../socket/socket.server');

const realtimeServer =  socketServer;
function config(server){
    realtimeServer.connect(server);
}
module.exports  = {
    config
}