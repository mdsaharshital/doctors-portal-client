import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteModalConfirm from "./DeleteModalConfirm";

const ManageDoctors = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("https://doctors-portal-server.up.railway.app/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) return <Loading />;

  return (
    <div>
      <h1 className="font-medium">Total Doctors: {doctors.length}</h1>
      <div className="overflow-x-auto m-5">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor) => (
              <tr key={doctor._id}>
                <th>
                  <img
                    src={doctor.img}
                    className="aspect-square w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
                    alt="img"
                  />
                </th>
                <td className="capitalize">{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label
                    onClick={() => setIsModalOpen(doctor)}
                    htmlFor="delete-modal"
                    className="btn btn-sm btn-error text-white"
                  >
                    Delete
                  </label>

                  {isModalOpen && (
                    <DeleteModalConfirm
                      isModalOpen={isModalOpen}
                      setIsModalOpen={setIsModalOpen}
                      refetch={refetch}
                    />
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

export default ManageDoctors;
