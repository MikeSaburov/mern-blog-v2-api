const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const PostShema = new Schema(
  {
    title: String,
    summary: String,
    content: String,
    cover: String,
  },
  { timestamps: true }
);

const PostModel = model('Post', PostShema);

module.exports = UserModel;
