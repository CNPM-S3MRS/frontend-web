const DashboardCard = ({ title, value, icon, color = "blue" }) => {
    return (
      <div className={`p-6 rounded-xl shadow-lg bg-${color}-100`}>
        <div className="flex items-center justify-between">
          <span className="text-3xl">{icon}</span>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-2xl font-bold mt-2">{value}</p>
      </div>
    );
  };
  
  export default DashboardCard;
  