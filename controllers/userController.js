const connectToDatabase = require('../config/db');

async function createUser(userData) {
  const db = await connectToDatabase();
  const collection = db.collection('users');
  await collection.insertOne(userData);
}

async function getUserByEmail(email) {
  const db = await connectToDatabase();
  const collection = db.collection('users');
  return collection.findOne({ email });
}

module.exports = {
  createUser,
  getUserByEmail
};
