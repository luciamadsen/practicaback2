const ticketDAO = require('../dao/ticketDAO');

class TicketRepository {
  async createTicket(ticket) {
    return await ticketDAO.create(ticket);
  }
}

module.exports = new TicketRepository();
