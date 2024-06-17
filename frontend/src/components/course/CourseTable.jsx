import React, { useEffect, useState } from "react";
import AddCourseModal from "./AddCourseModal";

const CourseTable = () => {
  const [data, setData] = useState([]);
  const [course_name, setCourseName] = useState("");
  const [course_description, setCourseDescription] = useState("");
  const [fees, setFees] = useState();
  const [syllabus, setSyllabus] = useState("");

  function getCourseData() {
    fetch("http://localhost:8080/getcourse")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }

  useEffect(() => {
    getCourseData();
  }, []);

  const patchCourse = (course_id) => {
    const data = { course_name, course_description, fees, syllabus };
    fetch(`http://localhost:8080/patchcourse/${course_id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        getCourseData();
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
              <th className="text-center text-base">Course ID</th>
              <th className="text-center text-base">Course Name</th>
              <th className="text-center text-base">Course Description</th>
              <th className="text-center text-base">Syllabus</th>
              <th className="text-center text-base">Fees</th>
              <th className="text-center text-base">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((currEle, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{currEle.course_id}</td>
                  <td className="text-center">{currEle.course_name}</td>
                  <td className="text-center">{currEle.course_description}</td>
                  <td className="text-center">{currEle.syllabus}</td>
                  <td className="text-center">{currEle.fees}</td>
                  <td className="text-center flex justify-center gap-2">
                    <div>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() =>
                          document
                            .getElementById(`my_modal_${currEle.course_id}`)
                            .showModal()
                        }
                      >
                        Edit
                      </button>
                      <dialog
                        id={`my_modal_${currEle.course_id}`}
                        className="modal"
                      >
                        <div className="modal-box">
                          <h3 className="font-bold text-lg">Edit Course</h3>
                          <form onSubmit={() => patchCourse(currEle.course_id)}>
                            <label className="input input-bordered flex items-center gap-2 mb-2">
                              Course ID
                              <input
                                type="text"
                                className="grow"
                                placeholder={`${currEle.course_id}`}
                                disabled
                              />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 mb-2">
                              Course Name
                              <input
                                type="text"
                                className="grow"
                                placeholder="Enter Course Name"
                                onChange={(e) => {
                                  setCourseName(e.target.value);
                                }}
                              />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 mb-2">
                              Course Description
                              <input
                                type="text"
                                className="grow"
                                placeholder="Enter Course Description"
                                onChange={(e) => {
                                  setCourseDescription(e.target.value);
                                }}
                              />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 mb-2">
                              Syllabus
                              <input
                                type="text"
                                className="grow"
                                placeholder="Enter Syllabus"
                                onChange={(e) => {
                                  setSyllabus(e.target.value);
                                }}
                              />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 mb-2">
                              Fees
                              <input
                                type="text"
                                className="grow"
                                placeholder="Enter Fee Amount"
                                onChange={(e) => {
                                  setFees(e.target.value);
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
        <AddCourseModal />
      </div>
    </div>
  );
};

export default CourseTable;
