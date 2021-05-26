const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var friendSchema = new mongoose.Schema({
    users: {
        type: [
            {
                type: mongoose.SchemaTypes.ObjectId,
                ref: "Profile"
            }
        ],
        validate:{
            validator: (users)=>(users.length==2),
            message: props=>`${props} inccorrect`
        }
    },
    created_at: {
        type: Date,
        require: true,
        default: Date.now
        }
})

//Export the model
module.exports = mongoose.model('Friend', friendSchema);