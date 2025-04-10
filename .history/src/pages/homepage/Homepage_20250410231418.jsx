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
            <div className="flex-grow p-4">
                <h1 className="text-2xl font-bold mb-4">Homepage</h1>
                {/* Display Cards */}
                <div className="space-y-4">
                    <DisplayCard
                        image="https://via.placeholder.com/150"
                        status="Upcoming event"
                        statusColor="green"
                        message="You have class at H3-106 at 1:00 PM on March 28"
                    />
                    <DisplayCard
                        image="https://via.placeholder.com/150"
                        status="Next week"
                        statusColor="blue"
                        message="You have a meeting scheduled for next week."
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