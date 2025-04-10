import React from "react";
import ForgotPassword from "../../components/form/ForgotPassword";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/bars/Sidebar";
import BKbg from "../../assets/bk-bg.jpg"; // Import your background image

const Forgot = () => {
    return (
        <div
        className="container flex flex-col h-screen bg-cover bg-center"
        style={{
            backgroundImage: `url(${BKbg})`,
            backgroundSize: "cover",
        }}
        >
        {/* Header */}
        <Header />
    
        <div className="flex flex-grow">
            {/* Sidebar */}
            <Sidebar />
    
            {/* Main Content */}
            <div className="flex-grow p-4">
            <ForgotPassword />
            </div>
        </div>
        {/* Footer */}
        <Footer />
        </div>
    );
};

export default Forgot;