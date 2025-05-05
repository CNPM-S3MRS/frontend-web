import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    setLoading(true);
    try {
      // Call the studentLogin API
      const response = await authAPI.studentLogin(email, password);
      const token = response.token; // Adjust based on your backend response structure
      localStorage.setItem("token", token); // Save the token for future requests
      navigate("/homepage"); // Redirect to the homepage
    } catch (err) {
      console.error("Login error:", err.response?.data || err.message);
      setError("Đăng nhập thất bại. Vui lòng kiểm tra thông tin đăng nhập.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/bk-bg.jpg')`, // đổi thành ảnh trường BK bạn đang dùng
      }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-90 rounded-lg p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-center mb-6">Đăng nhập</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Họ và tên"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-3 border rounded bg-white text-black placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="Địa chỉ email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded bg-white text-black placeholder-gray-500"
          />
          <div className="relative">
            <input
              type={showPwd ? "text" : "password"}
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded bg-white text-black placeholder-gray-500"
            />
            <button
              type="button"
              onClick={() => setShowPwd(!showPwd)}
              className="absolute top-1/2 right-3 border rounded bg-white transform -translate-y-1/2 text-gray-500"
            >
              {showPwd ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Đăng nhập
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="/forgotpwd" className="text-blue-600 hover:underline text-sm">
            Quên mật khẩu?
          </a>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Hoặc</p>
          <button className="mt-2 w-full flex items-center justify-center gap-2 border border-gray-300 p-3 rounded-lg bg-white text-black font-medium hover:shadow-md transition">
            <img src="/google-icon.png" alt="Google" className="w-5 h-5" />
            Đăng nhập bằng Google
          </button>
        </div>
      </div>
    </div>
  );
}
