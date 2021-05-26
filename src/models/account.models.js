const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var accountSchema = new mongoose.Schema({
    phone: {
        type: String,
        validate: {
            validator:(phone)=>(/^[0-9]{10}/g.test(phone)),
            message:props => `phone incorrect!`
        },
        unique: true,
        require: true,
        index: true,
    },
    password:{
        type: String,
        require: true,
    },
    socket: {
        type: String
    }
});

//Export the model
module.exports = mongoose.model('Account', accountSchema);