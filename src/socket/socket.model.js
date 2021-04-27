const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var socketSchema = new mongoose.Schema({
    _id:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
    },
    socket: {
        type: String
    }
});

//Export the model
module.exports = mongoose.model('Socket', socketSchema);