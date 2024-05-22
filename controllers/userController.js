const userService = require('../services/userService');
const UserDTO = require('../dtos/userDTO');

class UserController {
  async register(req, res, next) {
    try {
      const user = await userService.register(req.body);
      res.status(201).json(new UserDTO(user));
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const token = await userService.login(req.body);
      res.json({ token });
    } catch (error) {
      next(error);
    }
  }

  async current(req, res, next) {
    try {
      const user = await userService.getCurrent(req.user);
      res.json(new UserDTO(user));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
