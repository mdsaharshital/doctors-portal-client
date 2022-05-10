import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Shared/Navbar";
import About from "./pages/About/About";
import Login from "./pages/LoginSignUp/Login";
import Appointment from "./pages/Appointment/Appointment";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/appointment" element={<Appointment />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
