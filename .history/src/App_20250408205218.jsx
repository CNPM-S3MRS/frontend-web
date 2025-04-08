import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '@/pages/auth/Login' 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<div>Trang chủ</div>} />
        <Route path="/notification" element={<div>Notification</div>} />
      </Routes>
    </Router>
  )
}

export default App