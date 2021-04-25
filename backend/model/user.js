const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  name: { type: String, require: true},
  phone: { type: String, require: true },
  password: { type: String, require: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);

