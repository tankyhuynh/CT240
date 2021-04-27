const mongoose = require('mongoose'); // Erase if already required
const {avatar_url_default} = require('../constants/image_url.constant');

// Declare the Schema of the Mongo model
var profileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        required:true,
        default: avatar_url_default
    }
});

//Export the model
module.exports = mongoose.model('Profile', profileSchema);