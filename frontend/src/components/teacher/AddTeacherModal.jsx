import React, { useState } from "react";

const AddTeacherModal = () => {
  const [teacher_id, setTeacher_id] = useState("");
  const [teacher_name, setTeacher_name] = useState("");
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");
  const [qualification, setQualification] = useState("");
  const [specialization, setSpecialization] = useState("");

  const postTchr = () => {
    let data = {
      teacher_id,
      teacher_name,
      password,
      qualification,
      status,
      specialization,
    };
    fetch("http://localhost:8080/posttchr", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => {
        console.log(result);
        // getTchrData();
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  return (
    <div>
      <button
        className="btn btn-neutral hover:scale-110 transition-transform duration-300"
        onClick={() => document.getElementById(`my_modal`).showModal()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        Add Teacher
      </button>
      <dialog id={`my_modal`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Teacher</h3>
          <form onSubmit={() => postTchr()}>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              Teacher ID
              <input
                type="text"
                className="grow"
                placeholder="Enter Teacher ID"
                onChange={(e) => {
                  setTeacher_id(e.target.value);
                }}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              Teacher Name
              <input
                type="text"
                className="grow"
                placeholder="Enter Teacher Name"
                onChange={(e) => {
                  setTeacher_name(e.target.value);
                }}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              Qualification
              <input
                type="text"
                className="grow"
                placeholder="Enter Qualification"
                onChange={(e) => {
                  setQualification(e.target.value);
                }}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              Specialization
              <input
                type="text"
                className="grow"
                placeholder="Enter Qualification"
                onChange={(e) => {
                  setSpecialization(e.target.value);
                }}
              />
            </label>
            <select
              className="input select select-bordered w-full mb-2"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option disabled value="">
                Status
              </option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              Password
              <input
                type="text"
                className="grow"
                placeholder="Enter Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>
            <button type="submit" className="btn mt-2">
              Submit
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default AddTeacherModal;
