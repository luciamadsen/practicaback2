const Ticket = require('../models/ticketModel');

class TicketDAO {
  async create(ticket) {
    return await Ticket.create(ticket);
  }
}

module.exports = new TicketDAO();
