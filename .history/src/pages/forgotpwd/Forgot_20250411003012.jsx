import React, {useState}from "react";
import ForgotPassword from "../../components/form/ForgotPassword";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/bars/Sidebar";
import BKbg from "../../assets/bk-bg.jpg"; // Import your background image

const Forgot = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="container flex flex-col h-screen bg-cover bg-center"
    style={{
        backgroundImage: `url(${BKbg})`,
        backgroundSize: "cover",
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
          {/*Forgot */}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Forgot;