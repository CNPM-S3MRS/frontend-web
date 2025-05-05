import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/bars/Sidebar";
import Footer from "../../components/footer/Footer";
import { FaCheckCircle, FaTimesCircle, FaTrash, FaEdit } from "react-icons/fa";

const sampleBookings = [
  {
    id: 1,
    room: 301,
    date: "2025-04-15",
    from: "08:00",
    to: "10:00",
    seat: 107,
    status: "pending", // "present", "absent"
    confirmed: false,
  },
];

const MyRooms = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch reservations when the component mounts
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const data = await getUserReservations();
        setReservations(data);
      } catch (err) {
        console.error("Error fetching reservations:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  // Handle canceling a reservation
  const handleCancel = async (id) => {
    try {
      await cancelReservation(id);
      setReservations((prev) => prev.filter((r) => r.id !== id));
      alert("Hủy đặt phòng thành công!");
    } catch (err) {
      console.error("Error canceling reservation:", err);
      alert("Không thể hủy đặt phòng. Vui lòng thử lại.");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="flex flex-grow">
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className={`flex-grow p-4 bg-white transition-all duration-300 ${isSidebarOpen ? "lg:pl-80" : "pl-4"}`}>
          <h2 className="text-2xl font-bold mb-4"></h2>
          {bookings.length === 0 ? (
            <p>Bạn chưa đặt phòng nào.</p>
          ) : (
            bookings.map((b) => (
              <div key={b.id} className="border rounded p-4 mb-4 bg-white shadow-md">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img
                      src="room-bg.png"
                      alt="Room"
                      className="w-32 h-20 object-cover rounded"
                    />
                    <div>
                      <p><strong>Tòa nhà:</strong> H1</p>
                      <p><strong>Mã phòng:</strong> {b.room}</p>
                      <p><strong>Ngày:</strong> {b.date}</p>
                      <p><strong>Thời gian:</strong> {b.from} - {b.to}</p>
                      <p><strong>Bàn:</strong> {b.seat}</p>
                      <p><strong>Trạng thái:</strong>{" "}
                        {b.status === "present" && <span className="text-green-600">✅ Có mặt</span>}
                        {b.status === "absent" && <span className="text-red-600">❌ Vắng mặt</span>}
                        {b.status === "pending" && <span className="text-yellow-500">🕒 Chờ điểm danh</span>}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start">
                    {b.status === "pending" && (
                      <button
                        onClick={() => handleConfirm(b.id)}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                      >
                        Điểm danh
                      </button>
                    )}
                    <button className="text-blue-600 bg-white">
                      <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(b.id)} className="text-red-600 bg-white">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyRooms;
