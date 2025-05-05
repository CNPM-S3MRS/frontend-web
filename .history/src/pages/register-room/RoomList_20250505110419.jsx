import React from "react";

const rooms = [
  { id: 301, status: "Còn chỗ" },
  { id: 302, status: "Hết chỗ" },
  { id: 303, status: "Còn chỗ" },
];

const RoomList = ({ setStep, setSelectedRoom, rooms }) => {
  const transformedRooms = data.map((room) => ({
    id: room.id,
    name: room.name,
    location: room.location,
    capacity: room.capacity,
    status: room.status === "available" ? "Còn chỗ" : "Hết chỗ",
    image: room.image || "https://via.placeholder.com/400x200?text=No+Image", // Default image if none provided
  }));
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Available Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <li
            key={room.id}
            className="border p-4 mb-2 cursor-pointer hover:bg-gray-100"
            onClick={() => {
              setSelectedRoom(room);
              setStep(2); // Move to the next step
            }}
          >
            <p><strong>Room Name:</strong> {room.name}</p>
            <p><strong>Capacity:</strong> {room.capacity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomList;
