import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '@/pages/auth/Login';
import Notification from './pages/notification/notification';
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        import { Navigate } from "react-router-dom";

        <Routes>
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
        <Route path="/notification" element={<Notification />} /> {/* Add this route */}
        <Route path="/" element={<div>Trang chủ</div>} />
      </Routes>
    </Router>
  );
}

export default App;