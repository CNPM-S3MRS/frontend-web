const express = require('express');
const authController = require('../controllers/authController');
const { authenticateToken } = require('../middlewares/auth');

const router = express.Router();

// Authentication routes
router.post('/admin/login', authController.adminLogin);
router.post('/student/login', authController.studentLogin);
router.get('/sso', authController.ssoRedirect); // Simulated SSO redirect
router.get('/me', authenticateToken, authController.verifyUser);

module.exports = router;
