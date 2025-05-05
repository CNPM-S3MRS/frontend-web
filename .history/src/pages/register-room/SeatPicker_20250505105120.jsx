import React, { useState, useEffect } from "react";
import { getSeatsByRoom } from "../../api/index"; // Import the API function

const SeatPicker = ({ setStep, setSelectedSeat, selectedRoom }) => {
  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const data = await getSeatsByRoom(selectedRoom.id); // Fetch seats for the selected room
        setSeats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSeats();
  }, [selectedRoom]);

  if (loading) return <p>Loading seats...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 3: Select a Seat</h2>
      <div className="grid grid-cols-5 gap-2 mb-4">
        {seats.map((seat) => (
          <div
            key={seat.id}
            onClick={() => setSelectedSeat(seat.id)}
            className={`border p-2 text-center cursor-pointer rounded ${
              seat.status === "occupied" ? "bg-gray-400 cursor-not-allowed" : "bg-white hover:bg-blue-100"
            }`}
          >
            {seat.id}
          </div>
        ))}
      </div>
      <button onClick={() => setStep(4)} className="bg-blue-500 text-white px-4 py-2">
        Next
      </button>
    </div>
  );
};

export default SeatPicker;