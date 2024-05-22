const productDAO = require('../dao/productDAO');

class ProductRepository {
  async createProduct(product) {
    return await productDAO.create(product);
  }

  async updateProduct(id, product) {
    return await productDAO.update(id, product);
  }

  async deleteProduct(id) {
    return await productDAO.delete(id);
  }
}

module.exports = new ProductRepository();
