import React from "react";
import { useEffect, useState } from "react";
import NotificationCard from "../../components/card/NotificationCard";

useEffect(() => {
    const mockData = [
      {
        id: 1,
        image: "/path/to/image.jpg",
        status: "Next week",
        statusColor: "blue",
        message: "You have class at H2-106 at 3:00 PM on April 4",
      },
    ];
    setNotifications(mockData);
  }, []);

const Notification = () => {
    const [notifications, setNotifications] = useState([]);
  
    useEffect(() => {
        fetch("/api/notifications")
          .then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            console.log(data); // Debugging
            setNotifications(data);
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