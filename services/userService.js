const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secretKey, adminEmail, adminPassword } = require('../config/config');

class UserService {
  async register(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = { ...userData, password: hashedPassword };
    return await userRepository.createUser(user);
  }

  async login({ email, password }) {
    const user = await userRepository.getUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id, role: user.role }, secretKey, { expiresIn: '1h' });
    return token;
  }

  async getCurrent(userId) {
    return await userRepository.getUserById(userId);
  }
}

module.exports = new UserService();
