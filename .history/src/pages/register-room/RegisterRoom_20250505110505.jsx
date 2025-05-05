import React, { useState, useEffect } from "react";
import Sidebar from "../../components/bars/Sidebar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import RoomList from "./RoomList";
import DateTimePicker from "./DateTimePicker";
import SeatPicker from "./SeatPicker";
import Confirmation from "./Confirmation";
import { getAllSpaces } from "../../api/index"; // Import the API function

const RegisterRoom = () => {
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState({ date: "", from: "", to: "" });
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // State to store room data
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch rooms when the component mounts
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getAllSpaces(); // Call the API function

        // Transform the data to match the UI requirements
        const transformedRooms = data.map((room) => ({
          id: room.id,
          name: room.name,
          location: room.location,
          capacity: room.capacity,
          status: room.status === "available" ? "Còn chỗ" : "Hết chỗ",
          image: room.image || "https://via.placeholder.com/400x200?text=No+Image", // Default image if none provided
        }));

        setRooms(transformedRooms); // Store the transformed data in state
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="flex flex-grow">
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div
          className={`flex-grow p-4 bg-white transition-all duration-300 ${
            isSidebarOpen ? "lg:pl-80" : "pl-4"
          }`}
        >
          {loading && <p>Loading rooms...</p>}
          {error && <p className="text-red-500">Error: {error}</p>}
          {!loading && !error && step === 1 && (
            <RoomList
              setStep={setStep}
              setSelectedRoom={setSelectedRoom}
              rooms={rooms} // Pass the transformed rooms to RoomList
            />
          )}
          {step === 2 && (
            <DateTimePicker
              setStep={setStep}
              selectedRoom={selectedRoom}
              setSelectedDateTime={setSelectedDateTime}
            />
          )}
          {step === 3 && (
            <SeatPicker
              setStep={setStep}
              setSelectedSeat={setSelectedSeat}
              selectedRoom={selectedRoom}
            />
          )}
          {step === 4 && (
            <Confirmation
              setStep={setStep}
              selectedRoom={selectedRoom}
              selectedDateTime={selectedDateTime}
              selectedSeat={selectedSeat}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterRoom;