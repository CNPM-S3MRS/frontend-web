import React from "react";

const DisplayCard = ({ image, status, statusColor, message }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Card Image */}
      <img src={image} alt={status} className="w-full h-40 object-cover" />

      {/* Card Content */}
      <div className="p-4 text-center">
        <h2 className={`text-lg font-bold text-${statusColor}-600 mb-2`}>{status}</h2>
        <p className="text-gray-700">{message}</p>
      </div>
    </div>
  );
};

export default DisplayCard;