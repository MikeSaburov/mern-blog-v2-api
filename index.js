const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
  const { userName, password } = req.body;
  res.json({ requestData: { userName, password } });
});

app.listen(4000);

//admin4545

//mongodb+srv://admin:admin4545@cluster0.b5mg9d5.mongodb.net/?retryWrites=true&w=majority
