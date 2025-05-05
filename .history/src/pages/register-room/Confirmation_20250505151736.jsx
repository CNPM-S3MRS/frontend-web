import React from "react";
import { createReservation } from "../../api/index"; // Import the API function


const Confirmation = ({ setStep, selectedRoom, selectedDateTime, selectedSeat }) => {
  const handleConfirm = async () => {
    try {
      // Call the API to create a reservation
      await createReservation(
        selectedRoom.id, // Room ID
        selectedDateTime.date, // Reservation date
        selectedDateTime.from, // Start time
        selectedDateTime.to, // End time
        `Seat ${selectedSeat}` // Purpose or additional details
      );
      alert("Đăng ký thành công!");
      navigate("/homepage"); // Redirect to the homepage
    } catch (err) {
      console.error("Error creating reservation:", err.response?.data || err.message);
      alert("Đăng ký thất bại. Vui lòng thử lại.");
    }
  };


  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Bước 4: Xác nhận</h2>
      <div className="border p-4 mb-4">
        <p><strong>Tòa nhà:</strong> H1</p>
        <p><strong>Mã phòng:</strong> {selectedRoom?.id}</p>
        <p><strong>Ngày:</strong> {selectedDateTime.date}</p>
        <p><strong>Thời gian:</strong> {selectedDateTime.from} - {selectedDateTime.to}</p>
        <p><strong>Chỗ ngồi:</strong> {selectedSeat}</p>
      </div>
      <div className="flex gap-4">
        <button onClick={() => setStep(2)} className="bg-gray-400 text-white px-4 py-2">Trở lại</button>
        <button onClick={handleConfirm} className="bg-green-500 text-white px-4 py-2">Đăng ký</button>
      </div>
    </div>
  );
};

export default Confirmation;
