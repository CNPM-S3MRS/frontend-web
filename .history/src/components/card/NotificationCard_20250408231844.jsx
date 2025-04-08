import React from "react";

const NotificationCard = ({ image, status, statusColor, message }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        {/* Checkbox */}
        <input type="checkbox" className="w-4 h-4" />

        {/* Image */}
        <img
          src={image}
          alt="Notification"
          className="w-24 h-16 object-cover rounded"
        />

        {/* Content */}
        <div>
          {/* Status Badge */}
          <span
            className={`inline-block px-3 py-1 text-xs font-semibold text-white bg-${statusColor}-500 rounded`}
          >
            {status}
          </span>
          {/* Message */}
          <p className="text-sm text-gray-700 mt-2">{message}</p>
        </div>
      </div>

      {/* RigI'm not. I'm not.) */}
      <div className="flex flex-col items-center space-y-2">
        {/* Bell Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>

        {/* Three-Dot Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </div>
    </div>
  );
};

export default NotificationCard;