import React from "react";

const Confirmation = ({ setStep, selectedRoom, selectedDateTime, selectedSeat }) => {
  const handleConfirm = () => {
    alert("Đăng ký thành công!");
    setStep(1); // Reset lại bước đầu
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
        <button onClick={() => setStep(3)} className="bg-gray-400 text-white px-4 py-2">Trở lại</button>
        <button onClick={handleConfirm} className="bg-green-500 text-white px-4 py-2">Đăng ký</button>
      </div>
    </div>
  );
};

export default Confirmation;
