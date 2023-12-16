const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

const User = require('./models/User');

app.use(cors());
app.use(express.json());

//подключаемся к БД
mongoose
  .connect(
    'mongodb+srv://admin:admin4545@cluster0.b5mg9d5.mongodb.net/blog?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('DB Ok');
  })
  .catch((err) => {
    console.log('Ошибка подключения к DB', err);
  });

app.post('/register', async (req, res) => {
  const { userName, password } = req.body;
  const userDoc = await User.create({
    userName,
    password,
  });
  res.json(userDoc);
});

app.listen(4000);

//admin4545

//mongodb+srv://admin:admin4545@cluster0.b5mg9d5.mongodb.net/blog?retryWrites=true&w=majority
