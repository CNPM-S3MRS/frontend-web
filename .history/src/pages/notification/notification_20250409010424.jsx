import React, { useEffect, useState } from "react";
import NotificationCard from "../../components/card/NotificationCard";
import S

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        image: "/vite.svg", // Replace with your image URL
        status: "Next week",
        statusColor: "blue",
        message: "You have class at H2-106 at 3:00 PM on April 4",
      },
    ];
    setNotifications(mockData);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Notification</h1>
      <div>
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            image={notification.image}
            status={notification.status}
            statusColor={notification.statusColor}
            message={notification.message}
          />
        ))}
      </div>
    </div>
  );
};

export default Notification;