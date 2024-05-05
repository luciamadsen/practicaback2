const express = require('express');
const authenticateUser = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/products', authenticateUser, (req, res) => {
  res.send(`Bienvenido ${req.session.email} a la página de productos`);
});

module.exports = router;
