require('dotenv').config();

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes/index'));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


passport.use(new LocalStrategy(
  async function(username, password, done) {
    try {
      const user = users.find(user => user.email === username);
      if (!user) {
        return done(null, false, { message: 'Usuario no encontrado.' });
      }
      if (!await bcrypt.compare(password, user.password)) {
        return done(null, false, { message: 'Contraseña incorrecta.' });
      }
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

passport.use(new GitHubStrategy({
    clientID: b5e14c738345e5c48e,
    clientSecret: cfccf0e641a9727c2e6f9c6e9ef7bf694afdde9a,
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

