const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));

app.use('/', require('./routes/index'));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
