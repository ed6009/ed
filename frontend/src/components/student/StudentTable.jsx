import React, { useEffect, useState } from "react";
import AddStudentModal from "./AddStudentModal";
import StudentProfileModal from "./studentProfile/StudentProfileModal";

const StudentTable = () => {
  const [data, setData] = useState([]);
  const [student_name, setStudent_name] = useState("");
  const [status, setStatus] = useState("");
  const [education, setEducation] = useState("");

  function getStdData() {
    fetch("http://localhost:8080/getstd")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }

  useEffect(() => {
    getStdData();
  }, []);

  const patchStudent = (student_id) => {
    const data = { student_name, status, education };
    fetch(`http://localhost:8080/patchstd/${student_id}`, {
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
              <th className="text-center text-base">Student ID</th>
              <th className="text-center text-base">Student Name</th>
              <th className="text-center text-base">Education</th>
              <th className="text-center text-base">Status</th>
              <th className="text-center text-base">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((currEle, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{currEle.student_id}</td>
                  <td className="text-center">{currEle.student_name}</td>
                  <td className="text-center">{currEle.education}</td>
                  <td className="text-center">{currEle.status}</td>
                  <td className="text-center flex justify-center gap-2">
                    <div>
                      <button
                        className="btn btn-sm"
                        onClick={() =>
                          document
                            .getElementById(`my_modal_${currEle.student_id}`)
                            .showModal()
                        }
                      >
                        Edit
                      </button>
                      <dialog
                        id={`my_modal_${currEle.student_id}`}
                        className="modal"
                      >
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">Edit Student</h3>
                          <form
                            onSubmit={() => patchStudent(currEle.student_id)}
                          >
                            <label className="input input-bordered flex items-center gap-2 mb-2">
                              Student ID
                              <input
                                type="text"
                                className="grow"
                                placeholder={`${currEle.student_id}`}
                                disabled
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
                              Education
                              <input
                                type="text"
                                className="grow"
                                placeholder="Enter Education"
                                onChange={(e) => {
                                  setEducation(e.target.value);
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
                    <>
                      <StudentProfileModal
                        student_id={currEle.student_id}
                        student_name={currEle.student_name}
                      />
                    </>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-4">
        <AddStudentModal />
      </div>
    </div>
  );
};

export default StudentTable;
