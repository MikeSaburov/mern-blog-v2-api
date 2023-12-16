const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserShema = new mongoose.Schema({
  username: { type: String, require: true, min: 4, unique: true },
  password: { type: String, require: true, min: 6 },
});

const UserModel = model('User', UserShema);

module.exports = UserModel;
