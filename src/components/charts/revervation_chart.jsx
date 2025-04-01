import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";
import { getReservationStats } from "../../services/dashboardService";

const ReservationChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getReservationStats().then(setData);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="reservations" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ReservationChart;
