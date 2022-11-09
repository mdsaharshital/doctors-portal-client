import React from "react";
import { toast } from "react-toastify";

const DeleteModalConfirm = ({ refetch, isModalOpen, setIsModalOpen }) => {
  const { email, name } = isModalOpen;
  const handleDelete = () => {
    fetch(`https://doctors-portal-server-rho.vercel.app/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast.success(data.message);
          setIsModalOpen(null);
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete{" "}
            <span className="text-error">{name}?</span>
          </h3>

          <div className="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn  btn-error text-white"
            >
              Delete
            </button>
            <label htmlFor="delete-modal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModalConfirm;
