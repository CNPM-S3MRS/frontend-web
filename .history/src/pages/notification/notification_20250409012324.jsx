import React from "react";
import Sidebar from "../../components/bars/Sidebar"; 
import NotificationCard from "../../components/card/NotificationCard"; 
import Header from "../../components/header/NotificationCard"; 

const Notification = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow p-4 bg-gray-100">
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
  );
};

export default Notification;