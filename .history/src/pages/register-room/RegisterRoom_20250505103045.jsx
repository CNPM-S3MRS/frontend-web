import React, { useState } from "react";
import Sidebar from "../../components/bars/Sidebar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import RoomList from "./RoomList";
import DateTimePicker from "./DateTimePicker";
import SeatPicker from "./SeatPicker";
import Confirmation from "./Confirmation";


const RegisterRoom = () => {
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState({ date: '', from: '', to: '' });
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="flex flex-grow">
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className={`flex-grow p-4 bg-white transition-all duration-300 ${isSidebarOpen ? "lg:pl-80" : "pl-4"}`}>
          {step === 1 && <RoomList setStep={setStep} setSelectedRoom={setSelectedRoom} />}
          {step === 2 && <DateTimePicker setStep={setStep} selectedRoom={selectedRoom} setSelectedDateTime={setSelectedDateTime} />}
          {step === 3 && <SeatPicker setStep={setStep} setSelectedSeat={setSelectedSeat} />}
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
