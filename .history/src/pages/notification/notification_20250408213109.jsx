import React from "react";
import NotificationCard from "../../components/card/NotificationCard";
const notifications = [
    {
      id: 1,
      image: "/path/to/image.jpg",
      status: "Next week",
      statusColor: "blue",
      message: "You have class at H2-106 at 3:00 PM on April 4",
    },
    
const Notification = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Notification</h1>
            <p className="mt-4">This is the notification page.</p>
        </div>
    );
};

export default Notification;