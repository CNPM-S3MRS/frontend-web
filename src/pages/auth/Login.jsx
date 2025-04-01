import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    alert("Login successful (mockup)!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-6 text-center">
          <img
            src="/logo.png"
            alt="HCMUT Logo"
            className="mx-auto w-20"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-700">Welcome Back!</h2>
          <p className="text-gray-500">Log in to access your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          {error && <p className="mb-4 text-red-500">{error}</p>}

          <div className="relative mb-4">
            <FaUserCircle className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border p-3 pl-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative mb-4">
            <IoLockClosed className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-lg border p-3 pl-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-3 text-white transition hover:bg-blue-700"
          >
            Log In
          </button>
        </form>

        <p className="mt-4 text-center text-gray-500">
          Forgot your password? <a href="#" className="text-blue-600">Reset here</a>
        </p>
      </div>
    </div>
  );
}
