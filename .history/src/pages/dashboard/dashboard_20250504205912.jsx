import { useState, useEffect } from "react";
import DashboardCard from "../../components/cards/DashboardCard";
import ReservationChart from "../../components/charts/ReservationChart";
import StudySpaceTable from "../../components/tables/StudySpaceTable";
import { getDashboardStats } from "../../services/dashboardService";
const dashboard = () => {
  const [stats, setStats] = useState({ totalSpaces: 0, available: 0, occupied: 0 });

  useEffect(() => {
    getDashboardStats().then(setStats);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📊 Dashboard - Quản lý Study Spaces</h1>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <DashboardCard title="Tổng số phòng" value={stats.totalSpaces} icon="🏢" />
        <DashboardCard title="Phòng trống" value={stats.available} icon="✅" color="green" />
        <DashboardCard title="Phòng đang sử dụng" value={stats.occupied} icon="🚀" color="red" />
      </div>

      {/* Biểu đồ thống kê */}
      <div className="bg-white p-4 rounded-xl shadow-md mb-6">
        <ReservationChart />
      </div>

      {/* Danh sách Study Spaces */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">📌 Danh sách Study Spaces</h2>
        <StudySpaceTable />
      </div>
    </div>
  );
};

export default dashboard;
