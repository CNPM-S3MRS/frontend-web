import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '@/pages/auth/Login';
import Notification from './pages/notification/Notification';
import Homepage from "./pages/homepage/Homepage";
import Forgot from "./pages/forgotpwd/Forgot";
import RegisterRoom from "./pages/register-room/RegisterRoom"; 
import MyRooms from "./pages/my-rooms/MyRooms"; 
import Account from "./pages/account/Account";
// import MyRooms, Account nếu bạn có

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/forgotpwd" element={<Forgot />} />
        <Route path="/register-room" element={<RegisterRoom />} /> {/* ➕ Thêm dòng này */}
        {/* <Route path="/my-rooms" element={<MyRooms />} /> */}
        {/* <Route path="/account" element={<Account />} /> */}
        <Route path="/my-rooms" element={<MyRooms />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;
