export const getDashboardStats = async () => {
    return {
      totalSpaces: 30,
      available: 18,
      occupied: 12,
    };
  };
  
  export const getReservationStats = async () => {
    return [
      { date: "2024-03-25", reservations: 10 },
      { date: "2024-03-26", reservations: 12 },
      { date: "2024-03-27", reservations: 8 },
      { date: "2024-03-28", reservations: 15 },
    ];
  };
  
  export const getStudySpaces = async () => {
    return [
      { id: 1, name: "Phòng A101", capacity: 10, status: "Trống" },
      { id: 2, name: "Phòng B201", capacity: 15, status: "Đang sử dụng" },
      { id: 3, name: "Phòng C301", capacity: 20, status: "Trống" },
    ];
  };
  