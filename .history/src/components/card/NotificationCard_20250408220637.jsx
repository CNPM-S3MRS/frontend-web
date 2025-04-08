import React from "react";

const NotificationCard = ({ image, status, statusColor, message }) => {
  return (
    <div className="flex items-center p-4 border rounded-lg shadow-md bg-white">
      {/* Checkbox */}
      <input type="checkbox" className="mr-4" />

      {/* Image */}
      <img
        src={image}
        alt="Notification"
        className="w-16 h-16 rounded-lg object-cover mr-4"
      />

      {/* Notification Content */}
      <div className="flex-1">
        <span
          className={`text-sm font-semibold px-2 py-1 rounded-full bg-${statusColor}-100 text-${statusColor}-800`}
        >
          {status}
        </span>
        <p className="text-sm mt-2">{message}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-2">
        <button className="text-gray-500 hover:text-gray-700">
          <i className="fas fa-bell"></i>
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <i className="fas fa-ellipsis-v"></i>
        </button>
      </div>
    </div>
  );
};

export default NotificationCard;