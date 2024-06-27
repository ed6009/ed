import React, { useState } from "react";

const AddRoleModal = ({ fetchRoleData }) => {
  const [role_id, setRole_id] = useState("");
  const [role_name, setRole_name] = useState("");

  const postRole = () => {
    let data = {
      role_id,
      role_name,
    };
    fetch("http://localhost:8080/postrole", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => {
        console.log(result);
        fetchRoleData();
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  return (
    <div>
      <button
        className="btn btn-neutral hover:scale-110 transition-transform duration-300"
        onClick={() => document.getElementById("add_role_modal").showModal()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        Add Role
      </button>
      <dialog id="add_role_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Role</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              postRole();
            }}
          >
            <label className="input input-bordered flex items-center gap-2 mb-2">
              Role ID
              <input
                type="text"
                className="grow"
                placeholder="Enter Role ID"
                onChange={(e) => {
                  setRole_id(e.target.value);
                }}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-2">
              Role Name
              <input
                type="text"
                className="grow"
                placeholder="Enter Role Name"
                onChange={(e) => {
                  setRole_name(e.target.value);
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

export default AddRoleModal;
