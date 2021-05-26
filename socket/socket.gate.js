const EventEmitter = require('events');

class SocketServerEmiter extends EventEmitter {}

module.exports = new SocketServerEmiter();