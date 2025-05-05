import React, { useState } from "react";
import { createReservation } from "../../api/index"; // Import the API function

const DateTimePicker = ({ setStep, selectedRoom, setSelectedDateTime }) => {
  const [date, setDate] = useState("2025-04-15");
  const [fromTime, setFromTime] = useState("08:00");
  const [toTime, setToTime] = useState("10:00");
  const [loading, setLoading] = useState(false);

  const handleNext = async () => {
    // Validate the selected date and time
    if (!date || !fromTime || !toTime) {
      alert("Vui lòng chọn đầy đủ ngày và thời gian.");
      return;
    }

    if (fromTime >= toTime) {
      alert("Thời gian bắt đầu phải trước thời gian kết thúc.");
      return;
    }

    setLoading(true);
    try {
      // Call the API to create a reservation
      const reservation = await createReservation(
        selectedRoom.id, // Room ID
        date, // Reservation date
        fromTime, // Start time
        toTime, // End time
        "Room reservation" // Purpose
      );

      alert("Đăng ký thành công!");
      setSelectedDateTime({ date, from: fromTime, to: toTime });
      setStep(3); // Proceed to the next step
    } catch (err) {
      console.error("Error creating reservation:", err);
      alert("Đăng ký thất bại. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Bước 2: Chọn ngày và thời gian</h2>
      <div className="flex flex-col gap-4">
        <label>
          Ngày:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border bg-white ml-2 p-1"
          />
        </label>
        <label>
          Từ:
          <input
            type="time"
            value={fromTime}
            onChange={(e) => setFromTime(e.target.value)}
            className="border bg-white ml-2 p-1"
          />
        </label>
        <label>
          Đến:
          <input
            type="time"
            value={toTime}
            onChange={(e) => setToTime(e.target.value)}
            className="border bg-white ml-2 p-1"
          />
        </label>
        <button
          onClick={handleNext}
          className={`bg-blue-500 text-white px-4 py-2 w-fit ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading} // Disable button while loading
        >
          {loading ? "Đang xử lý..." : "Tiếp theo"}
        </button>
      </div>
    </div>
  );
};

export default DateTimePicker;