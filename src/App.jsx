import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage"
import Login from './components/Auth/Login';
import Register from "./components/Auth/Register";
import OTP from "./components/Auth/OTP.jsx";

 



function App() {
  

  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/otp/:userId" element={<OTP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
