// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String },
  username: { type: String },
  age: { type: Number }
});

module.exports = mongoose.model('User', userSchema);
