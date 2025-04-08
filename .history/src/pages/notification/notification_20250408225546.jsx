import React, { useEffect, useState } from "react";
import NotificationCard from "../../components/card/NotificationCard";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

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

  return (
    
    // <div className="p-6">
    //   <h1 className="text-2xl font-bold mb-4">Notification</h1>
    //   <div>
    //     {notifications.map((notification) => (
    //       <NotificationCard
    //         key={notification.id}
    //         image={notification.image}
    //         status={notification.status}
    //         statusColor={notification.statusColor}
    //         message={notification.message}
    //       />
    //     ))}
    //   </div>
    // </div>
    <div className="bg-red-500 text-white p-4">
  Tailwind CSS is working!
</div>
  );
};

export default Notification;