import React, { useState } from "react";
import ForgotPassword from "../../components/form/ForgotPassword";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/bars/Sidebar";
import BKbg from "../../assets/bk-bg.jpg"; // Import your background image

const Forgot = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div
      className="container flex flex-col h-screen"
      style={{
        backgroundImage: `url(${BKbg})`,
        backgroundSize: "cover", // Ensures the image covers the entire container
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
      }}
    >
      {/* Header */}
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <div className="flex flex-grow bg-white bg-opacity-80">
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        {/* Main Content */}
        <div
          className={`flex-grow p-4 transition-all duration-300 ${
            isSidebarOpen ? "lg:pl-80" : "pl-4"
          }`}
        >
          {/* Forgot Password */}
          <ForgotPassword />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Forgot;