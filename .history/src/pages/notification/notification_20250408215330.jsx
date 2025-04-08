import React, { useEffect, useState } from "react";
import NotificationCard from "../../components/card/NotificationCard";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  // Use useEffect inside the component
  useEffect(() => {
    const mockData = [
      {
        id: 1,
        image: "/vite.svg",
        status: "Next week",
        statusColor: "blue",
        message: "You have class at H2-106 at 3:00 PM on April 4",
      },
    ];
    setNotifications(mockData);
  }, []);

  // Fetch data from API (if needed)
  useEffect(() => {
    fetch("/api/notifications")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.text(); // Use .text() to inspect the raw response
      })
      .then((data) => {
        console.log("Raw response:", data); // Debugging
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Notification</h1>
      <div className="mt-4 space-y-4">
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