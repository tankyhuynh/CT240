require('dotenv').config();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
function config() {
    mongoose.connect(`mongodb://localhost:${process.env.DB_HOST}/${process.env.DB_NAME}`, {
        useNewUrlParser: true,
        useCreateIndex: true,
    }, (err) => {
        if (!err) {
            console.log('MongoDB Connection Succeeded.')
        } else {
            console.log('Error in DB connection: ' + err)
        }
    });
}

module.exports = {
    config
}
