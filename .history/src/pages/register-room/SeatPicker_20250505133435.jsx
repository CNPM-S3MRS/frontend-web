import React, { useState } from "react";
import { createReservation } from "../../api/index"; // Import the API function

const seats = Array.from({ length: 30 }, (_, i) => ({
  id: 101 + i,
  status: i % 5 === 0 ? "Đã đặt" : "Trống",
}));

const SeatPicker = ({ setStep, setSelectedSeat, selectedRoom, selectedDateTime }) => {
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSelect = (seat) => {
    if (seat.status === "Trống") {
      setSelected(seat.id);
      setSelectedSeat(seat.id);
    }
  };

  const handleNext = async () => {
    setLoading(true);
    try {
      // Call the API to create a reservation
      await createReservation(
        selectedRoom.id, // Room ID
        selectedDateTime.date, // Reservation date
        selectedDateTime.from, // Start time
        selectedDateTime.to, // End time
        `Seat ${selected}` // Purpose or additional details
      );
      alert("Đăng ký thành công!");
      setStep(4); // Proceed to the next step
    } catch (err) {
      console.error("Error creating reservation:", err);
      alert("Đăng ký thất bại. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Bước 3: Chọn chỗ ngồi</h2>
      <div className="grid grid-cols-5 gap-2 mb-4">
        {seats.map((seat) => (
          <div
            key={seat.id}
            onClick={() => handleSelect(seat)}
            className={`border p-2 text-center cursor-pointer rounded
              ${seat.status === "Đã đặt" ? "bg-gray-400 cursor-not-allowed" : ""}
              ${selected === seat.id ? "bg-green-400 text-white" : ""}
              ${seat.status === "Trống" && selected !== seat.id ? "bg-white hover:bg-blue-100" : ""}
            `}
          >
            {seat.id}
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className={`bg-blue-500 text-white px-4 py-2 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={!selected || loading} // Disable button if no seat is selected or loading
      >
        {loading ? "Đang xử lý..." : "Tiếp theo"}
      </button>
    </div>
  );
};

export default SeatPicker;