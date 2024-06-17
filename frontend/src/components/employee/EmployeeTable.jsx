import React, { useEffect, useState } from "react";
import AddEmployeeModal from "./AddEmployeeModal";

const EmployeeTable = () => {
  const [data, setData] = useState([]);
  const [emp_name, setEmp_name] = useState("");
  const [status, setStatus] = useState("");
  const [qualification, setQualification] = useState("");
  const [doj, setDoj] = useState("");

  function getEmpData() {
    fetch("http://localhost:8080/getemp")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }

  useEffect(() => {
    getEmpData();
  }, []);

  const patchEmp = (emp_id) => {
    const data = { emp_name, status, qualification, doj };
    fetch(`http://localhost:8080/patchemp/${emp_id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        getEmpData();
      })
      .catch((error) => {
        console.error("Error Editing data:", error);
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center text-base">Serial No.</th>
              <th className="text-center text-base">Employee ID</th>
              <th className="text-center text-base">Employee Name</th>
              <th className="text-center text-base">Qualification</th>
              <th className="text-center text-base">Date Of Joining</th>
              <th className="text-center text-base">Status</th>
              <th className="text-center text-base">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((currEle, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{currEle.emp_id}</td>
                  <td className="text-center">{currEle.emp_name}</td>
                  <td className="text-center">{currEle.qualification}</td>
                  <td className="text-center">
                    {currEle.doj.toString().slice(0, 10)}
                  </td>
                  <td className="text-center">{currEle.status}</td>
                  <td className="text-center">
                    <div>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() =>
                          document
                            .getElementById(`my_modal_${index}`)
                            .showModal()
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-4"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                        Edit
                      </button>
                      <dialog id={`my_modal_${index}`} className="modal">
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">Edit Employee</h3>
                          <form onSubmit={() => patchEmp(currEle.emp_id)}>
                            <label className="input input-bordered flex items-center gap-2 mb-2">
                              Employee ID
                              <input
                                type="text"
                                className="grow"
                                placeholder={`${currEle.emp_id}`}
                                disabled
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
                              Date Of Joining
                              <input
                                type="text"
                                className="grow"
                                placeholder="Enter Date Of Joining"
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
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-4">
        <AddEmployeeModal />
      </div>
    </div>
  );
};

export default EmployeeTable;
