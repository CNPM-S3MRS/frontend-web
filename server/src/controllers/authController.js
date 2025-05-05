const { users } = require('../models/userData');
const jwt = require('jsonwebtoken');

const JWT_SECRET = '7g^Tw3!VpM@qZ9#Xk2$DnL%Fs8&rEyC'; // Same secret as in middleware

// Admin login with JWT authentication
exports.adminLogin = (req, res) => {
  const { username, password } = req.body;
  
  const admin = users.find(user => 
    user.username === username && 
    user.password === password && 
    user.role === 'admin'
  );
  
  if (!admin) {
    return res.status(401).json({ message: 'Invalid admin credentials' });
  }
  
  const token = jwt.sign(
    { id: admin.id, role: admin.role, username: admin.username }, 
    JWT_SECRET, 
    { expiresIn: '24h' }
  );
  
  res.status(200).json({
    token,
    user: {
      id: admin.id,
      name: admin.name,
      email: admin.email,
      role: admin.role
    }
  });
};

// Student login 
exports.studentLogin = (req, res) => {
  const { username, password } = req.body;
  
  const student = users.find(user => 
    user.username === username && 
    user.password === password && 
    user.role === 'student'
  );
  
  if (!student) {
    return res.status(401).json({ message: 'Invalid student credentials' });
  }

  const token = jwt.sign(
    { 
      id: student.id, 
      role: student.role, 
      username: student.username,
      studentId: student.studentId
    }, 
    JWT_SECRET, 
    { expiresIn: '24h' }
  );
  
  res.status(200).json({
    token,
    user: {
      id: student.id,
      name: student.name,
      email: student.email,
      studentId: student.studentId,
      faculty: student.faculty,
      role: student.role
    }
  });
};


exports.verifyUser = (req, res) => {
  res.status(200).json({ user: req.user });
};


exports.ssoRedirect = (req, res) => {
  res.status(200).json({ 
    message: 'This endpoint would redirect to the HCMUT_SSO system in production. For MVP, use the student login endpoint.'
  });
};