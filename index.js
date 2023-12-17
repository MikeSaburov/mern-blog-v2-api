const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('./models/User');

const salt = bcrypt.genSaltSync(10);
const secret = 'ask34735837shdjh4554';

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
  try {
    const userDoc = await User.create({
      userName,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (err) {
    res.status(400).json(err);
  }
});

app.post('/login', async (req, res) => {
  const { userName, password } = req.body;
  const userDoc = await User.findOne({ userName });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    jwt.sign({ userName, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token).json('Ok');
    });
  } else {
    res.status(400).json('Неверный логин или пароль.');
  }
});

app.listen(4000);

//admin4545

//mongodb+srv://admin:admin4545@cluster0.b5mg9d5.mongodb.net/blog?retryWrites=true&w=majority
