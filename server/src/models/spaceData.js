 exports.spaces = [
  {
    id: "space-001",
    name: "Individual Study Room A1",
    location: "Building A - Floor 1",
    type: "individual",
    capacity: 1,
    features: ["power outlets", "desk lamp", "air conditioning", "wifi"],
    status: "available", // available, occupied, reserved, maintenance
    openTime: "07:00",
    closeTime: "22:00",
    image: "https://via.placeholder.com/400x200?text=Study+Room+A1",
    qrCode: "space-001-qr",
    sensors: {
      occupancy: true,
      temperature: 24, // Celsius
      humidity: 65, // percentage
      light: "on"
    }
  },
  {
    id: "space-002",
    name: "Individual Study Room A2",
    location: "Building A - Floor 1",
    type: "individual",
    capacity: 1,
    features: ["power outlets", "desk lamp", "air conditioning", "wifi"],
    status: "occupied",
    openTime: "07:00",
    closeTime: "22:00",
    image: "https://via.placeholder.com/400x200?text=Study+Room+A2",
    qrCode: "space-002-qr",
    sensors: {
      occupancy: true,
      temperature: 23,
      humidity: 60,
      light: "on"
    }
  },
  {
    id: "space-003",
    name: "Group Study Room B1",
    location: "Building B - Floor 2",
    type: "group",
    capacity: 6,
    features: ["power outlets", "whiteboard", "projector", "air conditioning", "wifi"],
    status: "available",
    openTime: "07:00",
    closeTime: "22:00",
    image: "https://via.placeholder.com/400x200?text=Group+Room+B1",
    qrCode: "space-003-qr",
    sensors: {
      occupancy: false,
      temperature: 25,
      humidity: 55,
      light: "off"
    }
  },
  {
    id: "space-004",
    name: "Group Study Room B2",
    location: "Building B - Floor 2",
    type: "group",
    capacity: 8,
    features: ["power outlets", "interactive screen", "video conferencing", "air conditioning", "wifi"],
    status: "reserved",
    openTime: "07:00",
    closeTime: "22:00",
    image: "https://via.placeholder.com/400x200?text=Group+Room+B2",
    qrCode: "space-004-qr",
    sensors: {
      occupancy: false,
      temperature: 22,
      humidity: 62,
      light: "off"
    }
  },
  {
    id: "space-005",
    name: "Quiet Study Zone C1",
    location: "Building C - Floor 3",
    type: "open",
    capacity: 30,
    features: ["power outlets", "desk lamps", "air conditioning", "wifi"],
    status: "available",
    openTime: "07:00",
    closeTime: "24:00",
    image: "https://via.placeholder.com/400x200?text=Quiet+Zone+C1",
    qrCode: "space-005-qr",
    sensors: {
      occupancy: true,
      temperature: 24,
      humidity: 58,
      light: "on"
    }
  },
  {
    id: "space-006",
    name: "Mentoring Room D1",
    location: "Building D - Floor 1",
    type: "mentoring",
    capacity: 2,
    features: ["power outlets", "whiteboard", "air conditioning", "wifi"],
    status: "maintenance",
    openTime: "09:00",
    closeTime: "20:00",
    image: "https://via.placeholder.com/400x200?text=Mentoring+Room+D1",
    qrCode: "space-006-qr",
    sensors: {
      occupancy: false,
      temperature: 22,
      humidity: 60,
      light: "off"
    }
  }
];

// export default spaces;