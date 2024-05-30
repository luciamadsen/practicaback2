const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
require('dotenv').config();
require('./config/passportConfig');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const productRoutes = require('./routes/productRoutes');
const logger = require('./utils/logger');
const errorMiddleware = require('./middlewares/errorMiddleware');
const { mongoUrl, sessionSecret } = require('./config/config');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/loggerTest', (req, res) => {
  logger.debug('Debug log');
  logger.http('HTTP log');
  logger.info('Info log');
  logger.warn('Warning log');
  logger.error('Error log');
  logger.fatal('Fatal log');
  res.send('Logger test complete');
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/products', productRoutes);

app.use(errorMiddleware);

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info('Connected to MongoDB');
    app.listen(3000, () => {
      logger.info('Server is running on port 3000');
    });
  })
  .catch(err => {
    logger.error('Failed to connect to MongoDB', err);
  });
