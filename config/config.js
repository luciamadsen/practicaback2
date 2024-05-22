require('dotenv').config();

module.exports = {
  mongoUrl: process.env.MONGO_URL,
  secretKey: process.env.SECRET_KEY,
  adminEmail: process.env.ADMIN_EMAIL,
  adminPassword: process.env.ADMIN_PASSWORD,
};
