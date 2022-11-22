const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  Name: {type:String, required:true},
  
}, {
  timestamps: true,
});

const users = mongoose.model('users', userSchema);
module.exports = users;