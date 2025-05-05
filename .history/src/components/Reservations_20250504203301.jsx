import React, { useState, useEffect } from "react";
import { getAllReservations } from "../api/index"; // Import the API function

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch reservations when the component mounts
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const data = await getAllReservations();
        setReservations(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  if (loading) return <p>Loading reservations...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Reservations</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id} className="mb-2">
            <p>Space: {reservation.spaceName}</p>
            <p>Date: {reservation.date}</p>
            <p>Time: {reservation.startTime} - {reservation.endTime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservations;