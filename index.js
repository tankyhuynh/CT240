require('dotenv').config();

const server = require('./configs/server.config');
const app = server.config();

const middleware = require('./configs/middleware.config');
middleware.config(app);

const db = require('./configs/database.config');
db.config();
