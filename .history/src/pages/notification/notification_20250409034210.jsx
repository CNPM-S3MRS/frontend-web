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
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <div className="flex flex-grow">
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        {/* Main Content */}
        <div
          className={`flex-grow p-4 bg-gray-100 transition-all duration-300 ${
            isSidebarOpen ? "ml-64" : "ml-0"
          }`}
        >
          <h1 className="text-2xl font-bold mb-4">Notification</h1>

          {/* Example Notification Cards */}
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
      {/* Pagination */}
      <div className="pagination flex justify-end p-2 mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={(page) => setCurrentPage(page)}
          />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Notification;