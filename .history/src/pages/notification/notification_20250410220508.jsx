import React, { useState } from "react";
import Sidebar from "../../components/bars/Sidebar";
import NotificationCard from "../../components/card/NotificationCard";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Pagination from "../../components/pagination/Pagination";

const Notification = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar is visible by default
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="container flex flex-col h-screen">
      {/* Header */}
      
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <div className="flex flex-grow">
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        {/* Dropdown List */}
        
        {/* Main Content */}
        <div
          className={`flex-grow p-4 transition-all duration-300 ${
            isSidebarOpen ? "lg:pl-80" : "pl-4"
          }`}
        >
          <h1 className="text-2xl font-bold mb-4">Notification</h1>

          {/* Notification Cards */}
          <div className="space-y-4">
            <NotificationCard
              image="https://via.placeholder.com/150"
              status="Upcoming event"
              statusColor="green"
              message="You have class at H3-106 at 1:00 PM on March 28"
            />
            <NotificationCard
              image="https://via.placeholder.com/150"
              status="Next week"
              statusColor="blue"
              message="You have class at H2-106 at 3:00 PM on April 4"
            />
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="pagination flex justify-end p-2 mt-4">
        <Pagination
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          totalPages={10} // Example total pages
        />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Notification;