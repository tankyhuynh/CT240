require('dotenv').config();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
function config() {
    mongoose.connect( process.env.DB_CONNECT_STR || "mongodb+srv://tanky:"
        + "xRUyMI2PE5tsmSJX"
        +"@tankydbs.3zvgh.mongodb.net/meanchat?retryWrites=true")
        .then( () => {
         console.log("Connected to MongoDB server");
        })
        .catch( (err) => {
            console.log("Fail to connect " + err);
    }); 
}

module.exports = {
    config
}
