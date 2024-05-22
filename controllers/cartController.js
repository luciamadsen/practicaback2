const cartService = require('../services/cartService');

class CartController {
  async addProduct(req, res, next) {
    try {
      const cart = await cartService.addProduct(req.user.id, req.params.pid);
      res.json(cart);
    } catch (error) {
      next(error);
    }
  }

  async purchaseCart(req, res, next) {
    try {
      const result = await cartService.purchaseCart(req.params.cid);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CartController();
