const Product = require('../models/productModel');

class ProductDAO {
  async create(product) {
    return await Product.create(product);
  }

  async update(id, product) {
    return await Product.findByIdAndUpdate(id, product, { new: true });
  }

  async delete(id) {
    return await Product.findByIdAndDelete(id);
  }
}

module.exports = new ProductDAO();
