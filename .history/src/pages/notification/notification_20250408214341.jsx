import React from "react";
import { useEffect, useState } from "react";
import NotificationCard from "../../components/card/NotificationCard";

const notifications = [
    {
      id: 1,
      image: "D:\Tieu_Anh\cnpm\CNPM-S3MRS\frontend-web\src\assets\react.svg",
      status: "Next week",
      statusColor: "blue",
      message: "You have class at H2-106 at 3:00 PM on April 4",
    },
];

const Notification = () => {
    const [notifications, setNotifications] = useState([]);
  
    useEffect(() => {
        fetch("/api/notifications")
          .then((res) => res.json())
          .then((data) => {
            console.log(data); // Debugging
            setNotifications(data);
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