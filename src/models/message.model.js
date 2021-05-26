const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Profile"
    },
    room: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Room"
    },
    data: {
        type: {},
        require: true
    },
    created_at: {
        type: Date,
        require: true,
        default: Date.now
    }
});

//Export the model
module.exports = mongoose.model('Message', messageSchema);