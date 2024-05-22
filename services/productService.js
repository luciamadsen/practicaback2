const productRepository = require('../repositories/productRepository');

class ProductService {
  async createProduct(productData) {
    return await productRepository.createProduct(productData);
  }

  async updateProduct(productId, productData) {
    return await productRepository.updateProduct(productId, productData);
  }

  async deleteProduct(productId) {
    return await productRepository.deleteProduct(productId);
  }
}

module.exports = new ProductService();
