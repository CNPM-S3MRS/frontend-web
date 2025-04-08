import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '@/pages/auth/Login';
import notification
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/notifications" element={<Notifications />} /> {/* Add this route */}
        <Route path="/" element={<div>Trang chủ</div>} />
      </Routes>
    </Router>
  );
}

export default App;