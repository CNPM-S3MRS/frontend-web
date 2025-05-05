import React, { useState } from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/bars/Sidebar";
import Footer from "../../components/footer/Footer";

const Account = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [view, setView] = useState("info"); // "info", "edit", "password"
  const [message, setMessage] = useState("");

  const userInfo = {
    firstName: "Jessica",
    lastName: "F.",
    studentId: "20123456",
    phone: "0123456789",
    email: "jessica@example.com",
    address: "TP.HCM",
    image: null,
  };

  const handleUpdatePassword = () => {
    setMessage("Mật khẩu đã thay đổi. Vui lòng đăng nhập lại.");
  };

  return (
    <div className="flex flex-col h-screen">
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="flex flex-grow">
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        <div className={`flex-grow p-4 transition-all duration-300 bg-white ${isSidebarOpen ? "lg:pl-80" : "pl-4"}`}>
          <h2 className="text-2xl font-bold mb-4"></h2>

          {/* Sidebar bên trái */}
          <div className="flex">
            <div className="w-1/4 border-r p-4">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-xl font-bold">
                  {userInfo.lastName}
                </div>
                <h3 className="text-lg mt-2 font-semibold">{userInfo.firstName}</h3>
                <p className="text-gray-500">{userInfo.studentId}</p>
                <p className="text-sm mt-2">{userInfo.phone}</p>
                <p className="text-sm">{userInfo.email}</p>
              </div>
              <ul className="mt-8 space-y-2">
                <li>
                  <button onClick={() => setView("info")} className="text-left bg-white w-full hover:underline">Lịch sử đặt chỗ</button>
                </li>
                <li>
                  <button onClick={() => setView("edit")} className="text-left bg-white w-full hover:underline">Cập nhật thông tin</button>
                </li>
                <li>
                  <button onClick={() => setView("password")} className="text-left bg-white w-full hover:underline">Đổi mật khẩu</button>
                </li>
              </ul>
            </div>

            {/* Nội dung chính */}
            <div className="w-3/4 p-4">
              {view === "info" && (
                <div>
                  <h4 className="text-lg font-semibold mb-2">Lịch sử đặt chỗ</h4>
                  <div className="space-y-4">
                    {[1, 2].map((id) => (
                      <div key={id} className="border p-4 shadow">
                        <h5 className="font-bold">Phòng H1-30{id}</h5>
                        <p>Thời gian: 8h00 - 10h00 ngày 15/04/2025</p>
                        <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded">Xem chi tiết</button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {view === "edit" && (
                <form className="space-y-4">
                  <h4 className="text-lg font-semibold">Cập nhật thông tin</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <input className="border bg-white p-2" placeholder="Họ" defaultValue={userInfo.lastName} />
                    <input className="border bg-white p-2" placeholder="Tên" defaultValue={userInfo.firstName} />
                    <input className="border bg-white p-2" placeholder="Student ID" defaultValue={userInfo.studentId} />
                    <input className="border bg-white p-2" placeholder="Email" defaultValue={userInfo.email} />
                    <input className="border bg-white p-2" placeholder="Số điện thoại" defaultValue={userInfo.phone} />
                    <input className="border bg-white p-2" placeholder="Địa chỉ" defaultValue={userInfo.address} />
                  </div>
                  <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">Cập nhật</button>
                </form>
              )}

              {view === "password" && (
                <form className="space-y-4">
                  <h4 className="text-lg font-semibold">Thay đổi mật khẩu</h4>
                  <input className="border bg-white p-2 w-full" placeholder="Mật khẩu hiện tại" type="password" />
                  <input className="border bg-white p-2 w-full" placeholder="Mật khẩu mới" type="password" />
                  <input className="border bg-white p-2 w-full" placeholder="Xác nhận mật khẩu mới" type="password" />
                  <button
                    type="button"
                    onClick={handleUpdatePassword}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Xác nhận
                  </button>
                </form>
              )}

              {message && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700">
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Account;
