import React from "react";

const rooms = [
  { id: 301, status: "Còn chỗ" },
  { id: 302, status: "Hết chỗ" },
  { id: 303, status: "Còn chỗ" },
];

const RoomList = ({ setStep, setSelectedRoom }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 bg-white rounded shadow">Bước 1: Chọn phòng</h2>
      <div className="grid gap-4 ">
        {rooms.map((room) => (
          <div key={room.id} className="border p-4 flex justify-between items-center bg-white rounded shadow">
            {/* Bọc hình và thông tin trong 1 flex container */}
            <div className="flex items-center gap-4">
              <img
                src="room-bg.png"
                alt="Room"
                className="w-32 h-20 object-cover rounded"
              />
              <div>
                <p className="text-sm">Tòa nhà: H1</p>
                <p className="text-sm">Mã phòng: {room.id}</p>
                <p className="text-sm">
                  Trạng thái:{" "}
                  <span
                    className={
                      room.status === "Còn chỗ" ? "text-green-600" : "text-red-600"
                    }
                  >
                    {room.status}
                  </span>
                </p>
              </div>
            </div>

            {/* Nút đăng ký bên phải */}
            <button
              disabled={room.status !== "Còn chỗ"}
              onClick={() => {
                setSelectedRoom(room);
                setStep(2);
              }}
              className={`px-4 py-2 rounded ${room.status === "Còn chỗ"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-400 text-white cursor-not-allowed"
                }`}
            >
              Đăng ký
            </button>
          </div>

        ))}
      </div>
    </div>
  );
};

export default RoomList;
