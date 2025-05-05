const express = require('express');
const reservationController = require('../controllers/reservationController');
const { authenticateToken, isAdmin } = require('../middlewares/auth');

const router = express.Router();

// Admin routes
router.get('/all', authenticateToken, isAdmin, reservationController.getAllReservations);

// User routes
router.get('/', authenticateToken, reservationController.getUserReservations);
router.post('/', authenticateToken, reservationController.createReservation);
router.put('/:id/cancel', authenticateToken, reservationController.cancelReservation);

module.exports = router;