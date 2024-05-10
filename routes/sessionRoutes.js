const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/current', passport.authenticate('current', { session: false }), (req, res) => {
  res.send(req.user);
});

module.exports = router;
