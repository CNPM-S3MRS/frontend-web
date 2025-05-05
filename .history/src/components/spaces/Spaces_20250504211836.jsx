import React, { useState, useEffect } from "react";
import { getAllSpaces } from "../api/index"; // Import the API function

const Spaces = () => {
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch spaces when the component mounts
  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const data = await getAllSpaces();
        setSpaces(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSpaces();
  }, []);

  if (loading) return <p>Loading spaces...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Spaces</h2>
      <ul>
        {spaces.map((space) => (
          <li key={space.id} className="mb-2">
            <p>Name: {space.name}</p>
            <p>Type: {space.type}</p>
            <p>Status: {space.status}</p>
            <p>Capacity: {space.capacity}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Spaces;