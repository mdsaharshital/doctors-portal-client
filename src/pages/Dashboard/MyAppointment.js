import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const MyAppointment = () => {
  const [myAppointments, setMyAppointments] = useState([]);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  useEffect(() => {
    fetch(
      `https://boiling-fortress-58648.herokuapp.com/booking?email=${user?.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          toast.error("Unauthorize user");
          navigate("/");
        }
        return res.json();
      })
      .then((data) => setMyAppointments(data.data));
  }, [user]);
  return (
    <div>
      <h1>My Appointments: {myAppointments.length}</h1>
      <div className="overflow-x-auto m-5">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {myAppointments.map((a, index) => (
              <tr key={a._id}>
                <th>{index + 1}</th>
                <td>{a.patientName}</td>
                <td>{a.slot}</td>
                <td>{a.date}</td>
                <td>{a.treatmentName}</td>
                <td>
                  {a.price && !a.paid && (
                    <Link to={`payment/${a._id}`}>
                      <button className="btn btn-xs btn-error">Pay</button>
                    </Link>
                  )}
                  {a.price && a.paid && (
                    <>
                      <p>
                        <span className=" text-success">Paid</span>
                      </p>
                      <small>
                        Transaction ID:{" "}
                        <span className="text-secondary">
                          {a.transactionId}
                        </span>
                      </small>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
