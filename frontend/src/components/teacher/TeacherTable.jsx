import React, { useEffect, useState } from "react";
import AddTeacherModal from "./AddTeacherModal";

const TeacherTable = () => {
  const [data, setData] = useState([]);
  const [teacher_name, setTeacher_name] = useState("");
  const [status, setStatus] = useState("");
  const [qualification, setQualification] = useState("");
  const [specialization, setSpecialization] = useState("");

  function getStdData() {
    fetch("http://localhost:8080/gettchr")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }

  useEffect(() => {
    getStdData();
  }, []);

  const patchStudent = (teacher_id) => {
    const data = { teacher_name, status, qualification, specialization };
    fetch(`http://localhost:8080/patchtchr/${teacher_id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        getStdData();
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
              <th className="text-center text-base">Teacher ID</th>
              <th className="text-center text-base">Teacher Name</th>
              <th className="text-center text-base">Qualification</th>
              <th className="text-center text-base">Specialization</th>
              <th className="text-center text-base">Status</th>
              <th className="text-center text-base">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((currEle, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{currEle.teacher_id}</td>
                  <td className="text-center">{currEle.teacher_name}</td>
                  <td className="text-center">{currEle.qualification}</td>
                  <td className="text-center">{currEle.specialization}</td>
                  <td className="text-center">{currEle.status}</td>
                  <td className="text-center">
                    <div>
                      <button
                        className="btn btn-sm"
                        onClick={() =>
                          document
                            .getElementById(`my_modal_${currEle.teacher_id}`)
                            .showModal()
                        }
                      >
                        Edit
                      </button>
                      <dialog
                        id={`my_modal_${currEle.teacher_id}`}
                        className="modal"
                      >
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">Edit Teacher</h3>
                          <form
                            onSubmit={() => patchStudent(currEle.teacher_id)}
                          >
                            <label className="input input-bordered flex items-center gap-2 mb-2">
                              Teacher ID
                              <input
                                type="text"
                                className="grow"
                                placeholder={`${currEle.teacher_id}`}
                                disabled
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
                              Specialization
                              <input
                                type="text"
                                className="grow"
                                placeholder="Enter Specialization"
                                onChange={(e) => {
                                  setSpecialization(e.target.value);
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
        <AddTeacherModal />
      </div>
    </div>
  );
};

export default TeacherTable;
