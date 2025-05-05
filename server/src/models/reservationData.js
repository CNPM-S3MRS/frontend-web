exports.reservations = [
  {
    id: "res-001",
    spaceId: "space-002",
    userId: "1952001",
    date: "2025-05-04",
    startTime: "10:00",
    endTime: "12:00",
    status: "active", // pending, active, completed, cancelled
    purpose: "Individual study for final exam",
    checkedIn: true,
    createdAt: "2025-05-03T14:30:00Z"
  },
  {
    id: "res-002",
    spaceId: "space-004",
    userId: "1952002",
    date: "2025-05-04",
    startTime: "14:00",
    endTime: "16:00",
    status: "pending",
    purpose: "Group project meeting",
    checkedIn: false,
    createdAt: "2025-05-03T09:15:00Z"
  },
  {
    id: "res-003",
    spaceId: "space-001",
    userId: "1952001",
    date: "2025-05-05",
    startTime: "13:00",
    endTime: "15:00",
    status: "pending",
    purpose: "Thesis research",
    checkedIn: false,
    createdAt: "2025-05-04T08:45:00Z"
  }
];

// export default reservations;