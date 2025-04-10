import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '@/pages/auth/Login';
import Notification from './pages/notification/notification';
import Homepage from "./pages/homepage/Homepage";
import Forgot from "./pages/forgotpwd/Forgot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/notification" element={<Notification />} /> {/* Add this route */}
        <Route path="/forgot" element={<Forgot />} /> {/* Add this route */}
        <Route path="/" element={<div>Trang chủ</div>} />
      </Routes>
    </Router>
  );
}

export default App;