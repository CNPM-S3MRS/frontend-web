import React from "react";

const NotificationCard = ({ image, status, statusColor, message }) => {
  // Map statusColor to Tailwind classes
  const statusColorClass = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    red: "bg-red-500",
  };

  return (
    <div className="flex items-center justify-between p-4 border-b bg-white shadow-sm rounded mb-4">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Checkbox */}
        <input type="checkbox" className="w-4 h-4" />

        {/* Image */}
        <img
          src={image}
          alt="Notification"
          className="w-16 h-12 object-cover rounded"
        />

        {/* Content */}
        <div>
          {/* Status Badge */}
          <span
            className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded ${
              statusColorClass[statusColor] || "bg-gray-500"
            }`}
          >
            {status}
          </span>
          {/* Message */}
          <p className="text-sm text-gray-700 mt-2">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;