const express = require('express');
const spaceController = require('../controllers/spaceController');
const { authenticateToken, isAdmin } = require('../middlewares/auth');

const router = express.Router();

// Public space routes
router.get('/', spaceController.getAllSpaces);
router.get('/:id', spaceController.getSpaceById);

// Protected space routes
router.post('/check-in', authenticateToken, spaceController.checkInWithQR);
router.put('/:id/status', authenticateToken, isAdmin, spaceController.updateSpaceStatus);
router.put('/:id/sensors', authenticateToken, isAdmin, spaceController.updateSensorData);

module.exports = router;