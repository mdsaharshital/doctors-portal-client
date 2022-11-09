import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";

const AddDoctors = () => {
  const imageStorageKey = "1acbd73a4a8ebea34491d15e22f67080";
  const { data: services, isLoading } = useQuery("user", () =>
    fetch(
      "https://doctors-portal-server-bdatfzui1-mdsaharshital.vercel.app/services"
    ).then((res) => res.json())
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  //
  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          console.log(doctor);
          reset(data);
          fetch(
            "https://doctors-portal-server-bdatfzui1-mdsaharshital.vercel.app/doctor",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
              body: JSON.stringify(doctor),
            }
          )
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.success) {
                toast.success(inserted.message);
                reset(data);
              } else {
                toast.error("Couldn't add");
              }
              console.log(inserted);
            });
        }
      });
  };

  if (isLoading) return <Loading />;
  return (
    <div className="flex justify-center items-center ">
      <div className="card  w-96 lg:w-96 bg-base-100 shadow-xl">
        <div className="card-body ">
          <h2 className="card-title justify-center">Add Doctors!</h2>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.name?.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid email",
                },
              })}
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Specialty</span>
            </label>
            <select
              {...register("specialty")}
              name="specialty"
              className="select select-bordered w-full max-w-xs"
            >
              {services?.data?.map((service) => (
                <option key={service._id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>

            <label className="label">
              {errors.specialty?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.specialty?.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Upload Image</span>
            </label>
            <input
              {...register("image", {
                required: {
                  value: true,
                  message: "Upload Image is Required",
                },
              })}
              type="file"
              className=" w-full max-w-xs"
            />
            <label className="label">
              {errors.image?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors?.image?.message}
                </span>
              )}
            </label>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="submit" className="w-full max-w-xs btn" value="Add" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctors;
