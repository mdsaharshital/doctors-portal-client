import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AllUsers = () => {
  // data from backend was doing some problems so i wrap in a object to make it cleaner
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("user", () =>
    fetch(
      "https://doctors-portal-server-bdatfzui1-mdsaharshital.vercel.app/users",
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );
  console.log(users);
  const handleMakeAdmin = (email) => {
    fetch(
      `https://doctors-portal-server-bdatfzui1-mdsaharshital.vercel.app/user/admin/${email}`,
      {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => {
        console.log(res.status);
        if (res.status === 403) {
          toast.error("Can't perfome this action");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success("Added as admin");
          refetch();
        }
      });
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h1>All users: {users?.data.length}</h1>
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
            {users?.data.map((a, index) => (
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
