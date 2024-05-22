const userDAO = require('../dao/userDAO');

class UserRepository {
  async createUser(user) {
    return await userDAO.create(user);
  }

  async getUserByEmail(email) {
    return await userDAO.findByEmail(email);
  }

  async getUserById(id) {
    return await userDAO.findById(id);
  }
}

module.exports = new UserRepository();
