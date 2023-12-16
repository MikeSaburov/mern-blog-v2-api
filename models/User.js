const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserShema = new Schema({
  userName: { type: String, required: true, min: 4, unique: true },
  password: { type: String, required: true },
});

const UserModel = model('User', UserShema);

module.exports = UserModel;
