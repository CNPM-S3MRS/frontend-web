import React, { useState } from "react";

const seats = Array.from({ length: 30 }, (_, i) => ({
  id: 101 + i,
  status: i % 5 === 0 ? "Đã đặt" : "Trống",
}));

const SeatPicker = ({ setStep, setSelectedSeat }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (seat) => {
    if (seat.status === "Trống") {
      setSelected(seat.id);
      setSelectedSeat(seat.id);
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
      <button onClick={() => setStep(4)} className="bg-blue-500 text-white px-4 py-2">Tiếp theo</button>
    </div>
  );
};

export default SeatPicker;
