// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, unique: true },
  password: { type: String, required: true },
  username: { type: String,  required: true },
  age: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
