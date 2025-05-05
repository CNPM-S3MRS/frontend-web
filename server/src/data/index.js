// src/data/index.js
export const db = {
    users: [
      { id: 1, username: 'student1', password: 'password1', name: 'Nguyen Van A', studentId: '1952001', role: 'student' },
      { id: 2, username: 'student2', password: 'password2', name: 'Le Thi B', studentId: '1952002', role: 'student' },
      { id: 3, username: 'admin1', password: 'admin123', name: 'Admin User', staffId: 'ADMIN001', role: 'admin' },
    ],
    studySpaces: [
      {
        id: 1,
        name: 'Individual Study Room A101',
        building: 'A',
        floor: 1,
        type: 'individual',
        capacity: 1,
        status: 'available',
        features: ['power_outlets', 'desk_lamp', 'air_conditioning'],
        occupancySensor: true,
        deviceStatus: {
          lights: false,
          airConditioner: false
        }
      },
      {
        id: 2,
        name: 'Group Study Room B201',
        building: 'B',
        floor: 2,
        type: 'group',
        capacity: 6,
        status: 'available',
        features: ['power_outlets', 'projector', 'whiteboard', 'desk_lamp', 'air_conditioning', 'online_meeting_equipment'],
        occupancySensor: true,
        deviceStatus: {
          lights: false,
          airConditioner: false,
          projector: false
        }
      },
      {
        id: 3,
        name: 'Research Lab C305',
        building: 'C',
        floor: 3,
        type: 'research',
        capacity: 4,
        status: 'occupied',
        features: ['power_outlets', 'interactive_screen', 'whiteboard', 'desk_lamp', 'air_conditioning', 'specialized_equipment'],
        occupancySensor: true,
        deviceStatus: {
          lights: true,
          airConditioner: true,
          interactiveScreen: true
        }
      },
      {
        id: 4,
        name: 'Mentoring Room D102',
        building: 'D',
        floor: 1,
        type: 'mentoring',
        capacity: 2,
        status: 'available',
        features: ['power_outlets', 'whiteboard', 'desk_lamp', 'air_conditioning'],
        occupancySensor: true,
        deviceStatus: {
          lights: false,
          airConditioner: false
        }
      },
      {
        id: 5,
        name: 'Collaborative Space B102',
        building: 'B',
        floor: 1,
        type: 'group',
        capacity: 8,
        status: 'maintenance',
        features: ['power_outlets', 'projector', 'interactive_screen', 'whiteboard', 'desk_lamp', 'air_conditioning', 'online_meeting_equipment'],
        occupancySensor: true,
        deviceStatus: {
          lights: false,
          airConditioner: false,
          projector: false,
          interactiveScreen: false
        }
      }
    ],
    reservations: [
      {
        id: 1,
        spaceId: 3,
        userId: 1,
        startTime: new Date('2025-05-04T09:00:00'),
        endTime: new Date('2025-05-04T12:00:00'),
        status: 'active',
        checkedIn: true,
        purpose: 'Research project work'
      },
      {
        id: 2,
        spaceId: 2,
        userId: 2,
        startTime: new Date('2025-05-04T14:00:00'),
        endTime: new Date('2025-05-04T16:00:00'),
        status: 'upcoming',
        checkedIn: false,
        purpose: 'Group study for final exams'
      }
    ]
  };