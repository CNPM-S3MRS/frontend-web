import React from "react";

const NotificationCard = ({ image, status, statusColor, message }) => {
  const statusColorClass = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    red: "bg-red-500",
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
      {/* Status Badge */}
      <span
        className={`text-xs font-semibold uppercase text-gray-500 block mb-2`}
      >
        {status}
      </span>

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-800 mb-2">
        Autodesk looks to future of 3D printing with Project Escher
      </h2>

      {/* Message */}
      <p className="text-sm text-gray-600 mb-4">
        {message || "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus."}
      </p>

      {/* Button */}
      <button className="bg-black text-white text-sm font-semibold px-4 py-2 rounded hover:bg-gray-800 transition">
        Read More
      </button>
    </div>
  );
};

export default NotificationCard;