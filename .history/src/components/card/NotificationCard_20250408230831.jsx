import React from "react";

const NotificationCard = ({ image, status, statusColor, message }) => {
  return (
    <div className="flex items-center space-x-4 p-4 border-b">
      {/* Checkbox */}
      <input type="checkbox" className="w-4 h-4" />

      {/* Image */}
      <img
        src={image}
        alt="Notification"
        className="w-10 h-10 object-cover rounded"
      />

      {/* Content */}
      <div>
        <span
          className={`text-sm font-semibold text-${statusColor}-500`}
        >
          {status}
        </span>
        <p className="text-sm text-gray-700">{message}</p>
      </div>
    </div>
  );
};

export default NotificationCard;