import React from "react";

const NotificationCard = ({ image, status, statusColor, message }) => {
  return (
    <div className="flex items-start space-x-4 p-4 border-b">
      {/* Checkbox */}
      <input type="checkbox" className="mt-1" />

      {/* Image */}
      <img
        src={image}
        alt="Notification"
        className="w-12 h-12 object-cover rounded"
      />

      {/* Content */}
      <div>
        <span
          className={`text-sm font-semibold text-${statusColor}-500`}
        >
          {status}
        </span>
        <p className="text-sm mt-1">{message}</p>
      </div>
    </div>
  );
};

export default NotificationCard;