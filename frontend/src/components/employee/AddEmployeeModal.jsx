import React, { useState } from "react";

const AddEmployeeModal = () => {
  const [emp_id, setEmp_id] = useState("");
  const [emp_name, setEmp_name] = useState("");
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");
  const [qualification, setQualification] = useState("");
  const [doj, setDoj] = useState("");

  const postEmp = () => {
    let data = { emp_id, emp_name, status, password, qualification, doj };
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
      <div>
        <button
          className="btn btn-wide"
          onClick={() => document.getElementById(`my_modal`).showModal()}
        >
          Add Employee
        </button>
        <dialog id={`my_modal`} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Edit Employee</h3>
            <form onSubmit={() => postEmp()}>
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
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Specialization
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
                Status
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Status"
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                />
              </label>
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
    </div>
  );
};

export default AddEmployeeModal;
