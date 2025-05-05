const { spaces } = require('../models/spaceData');
const { reservations } = require('../models/reservationData');

// Get all spaces
exports.getAllSpaces = (req, res) => {
  // Filter spaces by query parameters if provided
  let filteredSpaces = [...spaces];
  
  if (req.query.type) {
    filteredSpaces = filteredSpaces.filter(space => space.type === req.query.type);
  }
  
  if (req.query.status) {
    filteredSpaces = filteredSpaces.filter(space => space.status === req.query.status);
  }
  
  if (req.query.capacity) {
    filteredSpaces = filteredSpaces.filter(space => space.capacity >= parseInt(req.query.capacity));
  }
  
  res.status(200).json({ spaces: filteredSpaces });
};

// Get space by ID
exports.getSpaceById = (req, res) => {
  const space = spaces.find(s => s.id === req.params.id);
  
  if (!space) {
    return res.status(404).json({ message: 'Space not found' });
  }
  
  res.status(200).json({ space });
};

// Update space status (admin only)
exports.updateSpaceStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  
  const spaceIndex = spaces.findIndex(s => s.id === id);
  
  if (spaceIndex === -1) {
    return res.status(404).json({ message: 'Space not found' });
  }
  
  const validStatuses = ['available', 'occupied', 'reserved', 'maintenance'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ message: 'Invalid status value' });
  }
  
  spaces[spaceIndex].status = status;
  
  res.status(200).json({ 
    message: 'Space status updated successfully',
    space: spaces[spaceIndex]
  });
};

// Check-in to a space using QR code
exports.checkInWithQR = (req, res) => {
  const { qrCode, userId } = req.body;
  
  const space = spaces.find(s => s.qrCode === qrCode);
  
  if (!space) {
    return res.status(404).json({ message: 'Invalid QR code' });
  }
  
  // Check if there's an active reservation for this user and space
  const activeReservation = reservations.find(
    r => r.spaceId === space.id && 
         r.userId === userId && 
         r.status === 'pending' &&
         !r.checkedIn
  );
  
  if (!activeReservation) {
    return res.status(400).json({ message: 'No active reservation found for this space' });
  }
  
  // Update reservation and space status
  const reservationIndex = reservations.findIndex(r => r.id === activeReservation.id);
  reservations[reservationIndex].status = 'active';
  reservations[reservationIndex].checkedIn = true;
  
  const spaceIndex = spaces.findIndex(s => s.id === space.id);
  spaces[spaceIndex].status = 'occupied';
  spaces[spaceIndex].sensors.occupancy = true;
  spaces[spaceIndex].sensors.light = 'on';
  
  res.status(200).json({
    message: 'Check-in successful',
    space: spaces[spaceIndex],
    reservation: reservations[reservationIndex]
  });
};


exports.updateSensorData = (req, res) => {
  const { id } = req.params;
  const { sensorData } = req.body;
  
  const spaceIndex = spaces.findIndex(s => s.id === id);
  
  if (spaceIndex === -1) {
    return res.status(404).json({ message: 'Space not found' });
  }
  

  spaces[spaceIndex].sensors = {
    ...spaces[spaceIndex].sensors,
    ...sensorData
  };
  

  if (sensorData.occupancy === false && spaces[spaceIndex].status === 'occupied') {
    spaces[spaceIndex].status = 'available';
    spaces[spaceIndex].sensors.light = 'off';
    

    const activeReservationIndex = reservations.findIndex(
      r => r.spaceId === id && r.status === 'active'
    );
    
    if (activeReservationIndex !== -1) {
      reservations[activeReservationIndex].status = 'completed';
    }
  }
  
  res.status(200).json({
    message: 'Sensor data updated successfully',
    space: spaces[spaceIndex]
  });
};
