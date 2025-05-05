const { v4: uuidv4 } = require('uuid');
const { reservations } = require('../models/reservationData');
const { spaces } = require('../models/spaceData');
const { users } = require('../models/userData');

// Admin: Get all reservations
exports.getAllReservations = (req, res) => {
  const enrichedReservations = reservations.map(reservation => {
    const space = spaces.find(s => s.id === reservation.spaceId);
    const user = users.find(u => u.id === reservation.userId);
    
    return {
      ...reservation,
      spaceName: space ? space.name : 'Unknown Space',
      spaceLocation: space ? space.location : 'Unknown Location',
      userName: user ? user.name : 'Unknown User',
      userEmail: user ? user.email : 'Unknown Email'
    };
  });
  
  res.status(200).json({ reservations: enrichedReservations });
};

exports.getUserReservations = (req, res) => {
  const userId = req.user.id;
  
  const userReservations = reservations
    .filter(r => r.userId === userId)
    .map(reservation => {
      const space = spaces.find(s => s.id === reservation.spaceId);
      
      return {
        ...reservation,
        spaceName: space ? space.name : 'Unknown Space',
        spaceLocation: space ? space.location : 'Unknown Location',
        spaceImage: space ? space.image : null
      };
    });
  
  res.status(200).json({ reservations: userReservations });
};

exports.createReservation = (req, res) => {
  const { spaceId, date, startTime, endTime, purpose } = req.body;
  const userId = req.user.id;
  
  const space = spaces.find(s => s.id === spaceId);
  if (!space) {
    return res.status(404).json({ message: 'Space not found' });
  }
  
  if (space.status === 'maintenance') {
    return res.status(400).json({ message: 'Space is under maintenance' });
  }
  
  // Check for time conflicts
  const hasConflict = reservations.some(r => 
    r.spaceId === spaceId &&
    r.date === date &&
    ((startTime >= r.startTime && startTime < r.endTime) || 
     (endTime > r.startTime && endTime <= r.endTime) ||
     (startTime <= r.startTime && endTime >= r.endTime))
  );
  
  if (hasConflict) {
    return res.status(400).json({ message: 'Time slot is already booked' });
  }
  
  const newReservation = {
    id: `res-${uuidv4().substring(0, 8)}`,
    spaceId,
    userId,
    date,
    startTime,
    endTime,
    status: 'pending',
    purpose,
    checkedIn: false,
    createdAt: new Date().toISOString()
  };
  
  reservations.push(newReservation);
  
  // Update space status
  const spaceIndex = spaces.findIndex(s => s.id === spaceId);
  if (new Date(`${date}T${startTime}`).toISOString() === new Date().toISOString().split('T')[0]) {
    spaces[spaceIndex].status = 'reserved';
  }
  
  res.status(201).json({ 
    message: 'Reservation created successfully',
    reservation: newReservation
  });
};

// Cancel reservation
exports.cancelReservation = (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  
  const reservationIndex = reservations.findIndex(r => r.id === id && r.userId === userId);
  
  if (reservationIndex === -1) {
    return res.status(404).json({ message: 'Reservation not found' });
  }
  
  if (reservations[reservationIndex].status === 'active') {
    return res.status(400).json({ message: 'Cannot cancel an active reservation' });
  }
  
  reservations[reservationIndex].status = 'cancelled';
  
  // Update space status if it was reserved for this reservation
  const spaceId = reservations[reservationIndex].spaceId;
  const spaceIndex = spaces.findIndex(s => s.id === spaceId);
  
  if (spaces[spaceIndex].status === 'reserved') {
    const otherActiveReservations = reservations.some(r => 
      r.spaceId === spaceId && 
      r.status === 'pending' && 
      r.id !== id
    );
    
    if (!otherActiveReservations) {
      spaces[spaceIndex].status = 'available';
    }
  }
  
  res.status(200).json({ 
    message: 'Reservation cancelled successfully',
    reservation: reservations[reservationIndex]
  });
};