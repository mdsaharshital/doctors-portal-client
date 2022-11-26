import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Shared/Navbar";
import About from "./pages/About/About";
import Login from "./pages/LoginSignUp/Login";
import Appointment from "./pages/Appointment/Appointment";
import Signup from "./pages/LoginSignUp/Signup";
import RequireAuth from "./pages/LoginSignUp/RequireAuth";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppointment from "./pages/Dashboard/MyAppointment";
import MyReview from "./pages/Dashboard/MyReview";
import AllUsers from "./pages/Dashboard/AllUsers";
import RequireAdmin from "./pages/LoginSignUp/RequireAdmin";
import AddDoctors from "./pages/Dashboard/AddDoctors";
import ManageDoctors from "./pages/Dashboard/ManageDoctors";
import Payment from "./pages/Dashboard/Payment";
import "./App.css";
import Doctors from "./pages/doctors/Doctors";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointment />}></Route>
          <Route path="myreview" element={<MyReview />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route
            path="allUsers"
            element={
              <RequireAdmin>
                <AllUsers />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="addDoctors"
            element={
              <RequireAdmin>
                <AddDoctors />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manageDoctors"
            element={
              <RequireAdmin>
                <ManageDoctors />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/doctors" element={<Doctors />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
