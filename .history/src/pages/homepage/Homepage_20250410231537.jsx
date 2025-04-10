import React from "react";
import Sidebar from "../../components/bars/Sidebar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import DisplayCard from "../../components/card/DisplayCard";

const Homepage = () => {
    return (
        <div className="container flex flex-col h-screen">
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
          style={{ overflow: "visible" }}
        >
            
        </div>
            
        </div>
        {/* Footer */}
        <Footer />
        </div>
    );
};
export default Homepage;