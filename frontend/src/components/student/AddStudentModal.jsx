import React, { useState } from "react";

const AddStudentModal = () => {
  const [student_id, setStudent_id] = useState("");
  const [student_name, setStudent_name] = useState("");
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");
  const [education, setEducation] = useState("");

  const postStd = () => {
    let data = { student_id, student_name, status, password, education };
    fetch("http://localhost:8080/poststd", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => {
        console.log(result);
        // getStdData();
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  return (
    <div>
      <div>
        <button
          className="btn"
          onClick={() => document.getElementById(`my_modal`).showModal()}
        >
          Add Student
        </button>
        <dialog id={`my_modal`} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Add Student</h3>
            <form onSubmit={() => postStd()}>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Student ID
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Student ID"
                  onChange={(e) => {
                    setStudent_id(e.target.value);
                  }}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Student Name
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Student Name"
                  onChange={(e) => {
                    setStudent_name(e.target.value);
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
                    setEducation(e.target.value);
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

export default AddStudentModal;