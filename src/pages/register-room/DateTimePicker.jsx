import React, { useState } from "react";

const DateTimePicker = ({ setStep, selectedRoom, setSelectedDateTime }) => {
  const [date, setDate] = useState("2025-04-15");
  const [fromTime, setFromTime] = useState("08:00");
  const [toTime, setToTime] = useState("10:00");

  const handleNext = () => {
    setSelectedDateTime({ date, from: fromTime, to: toTime });
    setStep(3);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Bước 2: Chọn ngày và thời gian</h2>
      <div className="flex flex-col gap-4">
        <label>
          Ngày:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border bg-white ml-2 p-1" />
        </label>
        <label>
          Từ:
          <input type="time" value={fromTime} onChange={(e) => setFromTime(e.target.value)} className="border bg-white ml-2 p-1" />
        </label>
        <label>
          Đến:
          <input type="time" value={toTime} onChange={(e) => setToTime(e.target.value)} className="border bg-white ml-2 p-1" />
        </label>
        <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 w-fit">Tiếp theo</button>
      </div>
    </div>
  );
};

export default DateTimePicker;
