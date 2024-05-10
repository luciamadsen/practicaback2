const express = require('express');
const passport = require('passport');
const router = express.Router();


router.post('/login', passport.authenticate('local', { session: true }), (req, res) => {
  res.send(req.user);
});

module.exports = router;
