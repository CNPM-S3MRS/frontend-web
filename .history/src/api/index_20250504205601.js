import axios from 'axios';


export const API = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        "Content-Type": "application/json",
    },
});
export const getAllSpaces = async (filters = {}) => {
    try {
      const response = await API.get("/api/spaces", { params: filters });
      return response.data.spaces; // Adjust based on your backend response structure
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
// Add auth token to requests if available
API.interceptors.request.use((config) => {
    let token = sessionStorage.getItem('token') || localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config});
  
  // Authentication APIs
  export const authAPI = {
    studentLogin: async (username, password) => {
      try {
        const response = await API.post("/auth/student/login", { username, password });
        return response.data;
      } catch (err) {
        console.error("Login error:", err);
        throw err;
      }
    },
  
    adminLogin: async (username, password) => {
      try {
        const response = await API.post("/auth/admin/login", { username, password });
        return response.data;
      } catch (err) {
        console.error("Admin login error:", err);
        throw err;
      }
    },
  
    verifyUser: async () => {
      try {
        const response = await API.get("/auth/me");
        return response.data;
      } catch (err) {
        console.error("Verify user error:", err);
        throw err;
      }
    },
  
    logout: () => {
      sessionStorage.removeItem('token');
      localStorage.removeItem('token');
    }
  };
  

// =============== SPACE ===============
/**
 * Get all spaces with optional filtering
 * @param {Object} [filters] - Optional filters for spaces
 * @param {string} [filters.type] - Filter by space type
 * @param {string} [filters.status] - Filter by space status
 * @param {number} [filters.capacity] - Filter by minimum capacity
 * @returns {Promise<Array>} Array of space objects
 */
export const getAllSpaces = async (filters = {}) => {
    try {
        const response = await API.get('/api/spaces', { params: filters });
        return response.data.spaces;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Get a specific space by ID
 * @param {string} id - ID of the space to retrieve
 * @returns {Promise<Object>} Space object
 */
export const getSpaceById = async (id) => {
    try {
        const response = await API.get(`/api/spaces/${id}`);
        return response.data.space;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Update space status (admin only)
 * @param {string} id - ID of the space to update
 * @param {string} status - New status ('available', 'occupied', 'reserved', 'maintenance')
 * @returns {Promise<Object>} Updated space object
 */
export const updateSpaceStatus = async (id, status) => {
    try {
        const response = await API.put(`/api/spaces/${id}/status`, { status });
        return response.data.space;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Check in to a space using QR code
 * @param {string} qrCode - QR code of the space
 * @param {string} userId - ID of the user checking in
 * @returns {Promise<Object>} Object containing updated space and reservation
 */
export const checkInWithQR = async (qrCode, userId) => {
    try {
        const response = await API.post('/api/spaces/check-in', { qrCode, userId });
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Update space sensor data (admin only)
 * @param {string} id - ID of the space to update
 * @param {Object} sensorData - New sensor data to merge
 * @returns {Promise<Object>} Updated space object
 */
export const updateSensorData = async (id, sensorData) => {
    try {
        const response = await API.put(`/api/spaces/${id}/sensors`, { sensorData });
        return response.data.space;
    } catch (err) {
        console.error(err);
        throw err;
    }
};
// =============== RESERVATION ===============
/**
 * Get all reservations (admin only)
 * @returns {Promise<Array>} Array of enriched reservation objects with space and user details
 */
export const getAllReservations = async () => {
    try {
        const response = await API.get('/api/reservations/all');
        return response.data.reservations;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Get reservations for the current user
 * @returns {Promise<Array>} Array of user's reservations with space details
 */
export const getUserReservations = async () => {
    try {
        const response = await API.get('/api/reservations');
        return response.data.reservations;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Create a new reservation
 * @param {string} spaceId - ID of the space to reserve
 * @param {string} date - Reservation date (YYYY-MM-DD)
 * @param {string} startTime - Start time (HH:MM)
 * @param {string} endTime - End time (HH:MM)
 * @param {string} purpose - Purpose of reservation
 * @returns {Promise<Object>} Created reservation object
 */
export const createReservation = async (spaceId, date, startTime, endTime, purpose) => {
    try {
        const response = await API.post('/api/reservations', {
            spaceId,
            date,
            startTime,
            endTime,
            purpose
        });
        return response.data.reservation;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

/**
 * Cancel a reservation
 * @param {string} reservationId - ID of the reservation to cancel
 * @returns {Promise<Object>} Cancelled reservation object
 */
export const cancelReservation = async (reservationId) => {
    try {
        const response = await API.put(`/api/reservations/${reservationId}/cancel`);
        return response.data.reservation;
    } catch (err) {
        console.error(err);
        throw err;
    }
};

