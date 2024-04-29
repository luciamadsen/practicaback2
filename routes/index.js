const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

let users = [];

router.get('/', (req, res) => {
  res.send('Página de inicio');
});

router.get('/login', (req, res) => {
  res.send('Formulario de login');
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
});

router.get('/products', (req, res) => {
  res.send('Vista de productos');
});

module.exports = router;
