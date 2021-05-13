const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var notifySchema = new mongoose.Schema({
    account:{
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
    },
    type: {
        type: mongoose.SchemaTypes.String,
        required: true,
        default: "message",
    },
    content:{
        type: mongoose.SchemaTypes.Mixed,
        required:true,
    },
    created_at: {
        type: mongoose.SchemaTypes.Date,
        required: true,
        default: Date.now,
    }
});

//Export the model
module.exports = mongoose.model('Notify', notifySchema);