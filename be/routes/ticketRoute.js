const express = require("express");
const router = express.Router();
const {
  getTicket,
  createTickets,
  getTickets,
  deleteTicket,
  updateTicket,
} = require("../controllers/ticketController");

const { authMiddleware } = require("../middleware/authMiddleware");

router
  .route("/")
  .get(authMiddleware, getTickets)
  .post(authMiddleware, createTickets);

router
  .route("/:id")
  .get(authMiddleware, getTicket)
  .delete(authMiddleware, deleteTicket)
  .put(authMiddleware, updateTicket);

module.exports = router;
