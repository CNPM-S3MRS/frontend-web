import React, { useState } from "react";
import Sidebar from "../../components/bars/Sidebar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import DisplayCard from "../../components/card/DisplayCard";
import bk

const Homepage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="container flex flex-col h-screen bg-cover bg-center"
    style={{
        backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Replace with your image URL
      }}
    >
      {/* Header */}
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <div className="flex flex-grow">
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        {/* Main Content */}
        <div
          className={`flex-grow p-4 transition-all duration-300 ${
            isSidebarOpen ? "lg:pl-80" : "pl-4"
          }`}
        >
          <h1 className="text-2xl font-bold mb-4">Homepage</h1>
          {/* Display Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <DisplayCard
              image="https://via.placeholder.com/150"
              status="Hiến máu nhân đạo"
              statusColor="red"
              message="Hiến máu nhân đạo"
            />
            <DisplayCard
              image="https://via.placeholder.com/150"
              status="Hướng dẫn sử dụng"
              statusColor="blue"
              message="Hướng dẫn sử dụng"
            />
            <DisplayCard
              image="https://via.placeholder.com/150"
              status="Cập nhật"
              statusColor="green"
              message="Cập nhật"
            />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Homepage;