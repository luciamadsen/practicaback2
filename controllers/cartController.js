const Cart = require('../models/Cart');

exports.getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.json(carts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCartById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    if (cart == null) {
      return res.status(z404).json({ message: 'Carrito no encontrado' });
    }
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createCart = async (req, res) => {
  const cart = new Cart({
    products: req.body.products,
  });

  try {
    const newCart = await cart.save();
    res.status(201).json(newCart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    if (cart == null) {
      return res.status(404).json({ message: 'Carrito no encontrado' });
    }

    cart.products = req.body.products != null ? req.body.products : cart.products;

    const updatedCart = await cart.save();
    res.json(updatedCart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    if (cart == null) {
      return res.status(404).json({ message: 'Carrito no encontrado' });
    }

    await cart.remove();
    res.json({ message: 'Carrito eliminado' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.purchaseCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    if (cart == null) {
      return res.status(404).json({ message: 'Carrito no encontrado' });
    }

    res.json({ message: 'Compra realizada exitosamente' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
