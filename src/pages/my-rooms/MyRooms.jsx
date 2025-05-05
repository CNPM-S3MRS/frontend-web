import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/bars/Sidebar";
import Footer from "../../components/footer/Footer";
import { FaTrash } from "react-icons/fa";
import { getUserReservations, cancelReservation, checkInWithQR } from "../../api/index"; // Import API functions

const MyRooms = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch reservations when the component mounts
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const data = await getUserReservations();
        console.log("Reservations:", data); // Log the data to inspect the status field
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
      console.error("Error canceling reservation:", err.response?.data || err.message);
      if (err.response?.data?.message === "Cannot cancel an active reservation") {
        alert("Không thể hủy đặt phòng đang hoạt động. Vui lòng liên hệ quản trị viên.");
      } else {
        alert("Không thể hủy đặt phòng. Vui lòng thử lại.");
      }
    }
  };

  // Handle confirming attendance using QR code
  const handleCheckIn = async (qrCode, userId) => {
    try {
      const updatedReservation = await checkInWithQR(qrCode, userId);
      setReservations((prev) =>
        prev.map((r) => (r.id === updatedReservation.id ? { ...r, ...updatedReservation } : r))
      );
      alert("Điểm danh thành công!");
    } catch (err) {
      console.error("Error checking in:", err.response?.data || err.message);
      if (err.response?.data?.message === "Invalid QR code") {
        alert("Mã QR không hợp lệ. Vui lòng thử lại.");
      } else if (err.response?.data?.message === "User not authorized") {
        alert("Người dùng không được phép điểm danh.");
      } else {
        alert("Không thể điểm danh. Vui lòng thử lại.");
      }
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="flex flex-grow">
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className={`flex-grow p-4 bg-white transition-all duration-300 ${isSidebarOpen ? "lg:pl-80" : "pl-4"}`}>
          <h2 className="text-2xl font-bold mb-4">Phòng của tôi</h2>
          {loading ? (
            <p>Đang tải...</p>
          ) : reservations.length === 0 ? (
            <p>Bạn chưa đặt phòng nào.</p>
          ) : (
            reservations.map((r) => (
              <div key={r.id} className="border rounded p-4 mb-4 bg-white shadow-md">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img
                      src="room-bg.png"
                      alt="Room"
                      className="w-32 h-20 object-cover rounded"
                    />
                    <div>
                      <p><strong>Tòa nhà:</strong> H1</p>
                      <p><strong>Mã phòng:</strong> {r.spaceId}</p>
                      <p><strong>Ngày:</strong> {r.date}</p>
                      <p><strong>Thời gian:</strong> {r.startTime} - {r.endTime}</p>
                      <p><strong>Mục đích:</strong> {r.purpose}</p>
                      <p><strong>Trạng thái:</strong>{" "}
                        {r.status === "active" && <span className="text-green-600">Đang hoạt động</span>}
                        {r.status === "cancelled" && <span className="text-red-600">Đã hủy</span>}
                        {r.status === "completed" && <span className="text-gray-600">Đã hoàn thành</span>}
                        {r.status === "pending" && <span className="text-yellow-600">Chờ xác nhận</span>}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 items-start">
                    {r.status === "active" || r.status === "completed" ? (
                      <>
                        <button
                          onClick={() => handleCheckIn(r.qrCode, r.userId)} // Pass QR code and user ID
                          className="bg-blue-500 text-white px-3 py-1 rounded"
                        >
                          Điểm danh
                        </button>
                        <button
                          onClick={() => handleCancel(r.id)}
                          className="text-red-600 bg-white"
                        >
                          <FaTrash /> Hủy
                        </button>
                      </>
                    ) : null}
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