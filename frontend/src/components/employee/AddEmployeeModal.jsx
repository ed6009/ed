import React, { useState } from "react";

const AddEmployeeModal = ({ fetchEmpData }) => {
  const [emp_id, setEmp_id] = useState("");
  const [emp_name, setEmp_name] = useState("");
  const [status, setStatus] = useState("active");
  const [password, setPassword] = useState("");
  const [qualification, setQualification] = useState("");
  const [doj, setDoj] = useState("");

  const postEmp = () => {
    let data = { emp_id, emp_name, status, password, qualification, doj };
    fetch("http://localhost:8080/postemp", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => {
        console.log(result);
        fetchEmpData(); // Uncomment this line if you have a function to refresh employee data
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  return (
    <div>
      <div>
        <button
          className="btn btn-neutral hover:scale-110 transition-transform duration-300"
          onClick={() =>
            document.getElementById(`my_modal_employee`).showModal()
          }
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
          Add Employee
        </button>
        <dialog id={`my_modal_employee`} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Add Employee</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                postEmp();
              }}
            >
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Employee ID
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Employee ID"
                  onChange={(e) => {
                    setEmp_id(e.target.value);
                  }}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Employee Name
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Employee Name"
                  onChange={(e) => {
                    setEmp_name(e.target.value);
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
                  type="password"
                  className="grow"
                  placeholder="Enter Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Date of Joining
                <input
                  type="date"
                  className="grow"
                  onChange={(e) => {
                    setDoj(e.target.value);
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
    </div>
  );
};

export default AddEmployeeModal;
