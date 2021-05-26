const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var requestSchema = new mongoose.Schema({
    sender: {  
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Profile"
    },
    receiver: { 
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Profile"
    },
    introduce: String,
    created_at: {
        type: Date,
        require: true,
        default: Date.now
    }

});

//Export the model
module.exports = mongoose.model('Request', requestSchema);