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
    // Add more notifications here
];

const Notification = () => {
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