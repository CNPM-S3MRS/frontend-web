import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '@/pages/auth/Login';
import Notification from './pages/notification/notification';
@tailwind base;
@tailwind components;
@tailwind utilities;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/notification" element={<Notification />} /> {/* Add this route */}
        <Route path="/" element={<div>Trang chủ</div>} />
      </Routes>
    </Router>
  );
}

export default App;