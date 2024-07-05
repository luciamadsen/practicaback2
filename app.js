const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const dotenv = require('dotenv');
const logger = require('./config/logger');
const { swaggerUi, swaggerDocs } = require('./config/swagger');

dotenv.config();

const app = express();

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const sessionRoutes = require('./routes/sessionRoutes');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/sessions', sessionRoutes);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  logger.info('Connected to MongoDB');
  app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
}).catch((error) => {
  logger.error('MongoDB connection error:', error);
});
