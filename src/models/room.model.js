const mongoose = require('mongoose'); // Erase if already required
const config = require("../constants/image_url.constant");

// Declare the Schema of the Mongo model
var roomSchema = new mongoose.Schema({
    name: String,
    config: {},
    avatar: {
        type: String,
        default: config.avatar_url_default,
    },
    members:{
        type: [
            {
                user: {
                    type: mongoose.SchemaTypes.ObjectId,
                    ref: "Profile"
                },
                config: {}
            }
        ],
        validate: {
            validator: (members)=> (members.length >=2),
            message: props=>`${props} failure!`
        }
    },
    created_at:{
        type: Date,
        require: true,
        default: Date.now
    },
    admin: [{
        type: mongoose.SchemaTypes.ObjectId,
    }],
});

//Export the model
module.exports = mongoose.model('Room', roomSchema);