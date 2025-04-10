import React from "react";
import Sidebar from "../../components/bars/Sidebar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import DisplayCard from "../../components/card/DisplayCard";

const Homepage = () => {
    return (
        <div className="container flex flex-col h-screen">
        {/* Header */}
        <Header />
        <div className="flex flex-grow">
            {/* Sidebar */}
            <Sidebar />
            {/* Main Content */}
            <div className="flex-grow p-4">
                
            </div>
        </div>
        {/* Footer */}
        <Footer />
        </div>
    );
};
export default Homepage;