require('dotenv').config();

const serverConfig = require('./configs/server.config');
const app = serverConfig.config();


const middleware = require('./configs/middleware.config');
middleware.config(app);

const db = require('./configs/database.config');
db.config();

const realtime = require('./configs/realtime.config');
realtime.config(serverConfig.server);



const {rootUrl} = require('./src/constants');
const mainRouter = require('./src/routers');
app.use(rootUrl, mainRouter);


