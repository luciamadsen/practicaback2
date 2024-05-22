const cartRepository = require('../repositories/cartRepository');
const productRepository = require('../repositories/productRepository');
const ticketRepository = require('../repositories/ticketRepository');
const TicketDTO = require('../dtos/ticketDTO');
const { v4: uuidv4 } = require('uuid');

class CartService {
  async addProduct(userId, productId) {
    // Lógica para agregar un producto al carrito
  }

  async purchaseCart(cartId) {
    const cart = await cartRepository.getCartById(cartId);
    const purchasedProducts = [];
    const notPurchasedProducts = [];

    for (const item of cart.products) {
      const product = await productRepository.getProductById(item.productId);
      if (product.stock >= item.quantity) {
        product.stock -= item.quantity;
        await productRepository.updateProduct(product._id, product);
        purchasedProducts.push(item);
      } else {
        notPurchasedProducts.push(item.productId);
      }
    }

    const ticket = {
      code: uuidv4(),
      purchase_datetime: new Date(),
      amount: purchasedProducts.reduce((total, item) => total + item.quantity * item.price, 0),
      purchaser: cart.user.email
    };

    const createdTicket = await ticketRepository.createTicket(ticket);
    cart.products = notPurchasedProducts;
    await cartRepository.updateCart(cart._id, cart);

    return { ticket: new TicketDTO(createdTicket), notPurchasedProducts };
  }
}

module.exports = new CartService();
