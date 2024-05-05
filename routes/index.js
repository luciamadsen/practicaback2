const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');

let users = [];

router.get('/register', (req, res) => {
  res.send('Formulario de registro');
});

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ email, password: hashedPassword });
    res.redirect('/login');
  } catch (error) {
    console.log(error);
    res.redirect('/register');
  }
});

router.get('/login', (req, res) => {
  res.send('Formulario de login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/products',
  failureRedirect: '/login',
}));

router.get('/auth/github',
  passport.authenticate('github'));

router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/products');
  });

router.get('/products', (req, res) => {
  res.send('Vista de productos');
});

module.exports = router;
