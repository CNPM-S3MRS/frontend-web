import React, { useState } from "react";
import { authAPI } from "../../api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Vui lòng nhập email.");
      return;
    }

    try {
      await authAPI.forgotPassword(email);
      setSubmitted(true);
      setError("");
    } catch (err) {
      setError("Không thể gửi email đặt lại mật khẩu. Vui lòng thử lại.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bk-bg.jpg')" }}
    >
      <div className="bg-white bg-opacity-95 rounded-lg shadow-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-2">Quên mật khẩu</h2>
        <p className="text-sm text-gray-600 mb-4">
          Vui lòng nhập địa chỉ email để nhận liên kết đặt lại mật khẩu.
        </p>

        {!submitted ? (
          <form onSubmit={handleReset} className="space-y-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <input
              type="email"
              placeholder="Email của bạn"
              className="w-full p-3 border rounded bg-white text-black placeholder-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="flex justify-end gap-2">
              <button type="button" onClick={() => setEmail("")} className="px-3 py-1 bg-gray-200 rounded">
                Hủy
              </button>
              <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">
                Đặt lại mật khẩu
              </button>
            </div>
          </form>
        ) : (
          <div className="text-green-600 text-sm">
            ✔️ Liên kết đặt lại mật khẩu đã được gửi đến email của bạn!
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
