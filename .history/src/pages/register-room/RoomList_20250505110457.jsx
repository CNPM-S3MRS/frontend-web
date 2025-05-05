import React from "react";

const rooms = [
  { id: 301, status: "Còn chỗ" },
  { id: 302, status: "Hết chỗ" },
  { id: 303, status: "Còn chỗ" },
];

const RoomList = ({ setStep, setSelectedRoom, rooms }) => {
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Available Rooms</h2>
      <div className="grid grid-cols-1 gap-4">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="border rounded p-4 flex items-center bg-white shadow-md"
          >
            <img
              src={room.image}
              alt={room.name}
              className="w-32 h-20 object-cover rounded mr-4"
            />
            <div className="flex-grow">
              <p><strong>Tòa nhà:</strong> {room.location}</p>
              <p><strong>Mã phòng:</strong> {room.name}</p>
              <p>
                <strong>Trạng thái:</strong>{" "}
                <span
                  className={
                    room.status === "Còn chỗ" ? "text-green-500" : "text-red-500"
                  }
                >
                  {room.status}
                </span>
              </p>
            </div>
            <button
              onClick={() => {
                if (room.status === "Còn chỗ") {
                  setSelectedRoom(room);
                  setStep(2);
                }
              }}
              className={`px-4 py-2 rounded ${
                room.status === "Còn chỗ"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
              disabled={room.status !== "Còn chỗ"}
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
