import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AllUsers = () => {
  const { data, isLoading, refetch } = useQuery("user", () =>
    fetch("http://localhost:5000/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  const handleMakeAdmin = (email) => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        console.log(res.status);
        if (res.status === 403) {
          toast.error("Can't perfome this action");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Added as admin");
          refetch();
        }
      });
  };
  if (isLoading) return <Loading />;
  return (
    <div>
      <h1>All users: {data.length}</h1>
      <div className="overflow-x-auto m-5">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((a, index) => (
              <tr key={a._id}>
                <th>{index + 1}</th>
                <td>{a.email}</td>
                <td>
                  {!a.role && (
                    <button
                      onClick={() => handleMakeAdmin(a.email)}
                      className="btn btn-xs"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-xs btn-error text-white ">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
