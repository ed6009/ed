import React, { useState } from "react";

const AddCourseModal = () => {
  const [course_id, setCourseId] = useState("");
  const [course_name, setCourseName] = useState("");
  const [course_description, setCourseDescription] = useState("");
  const [teacher_id, setTeacherId] = useState("");
  const [syllabus, setSyllabus] = useState("");

  const postCourse = () => {
    let data = {
      course_id,
      course_name,
      course_description,
      teacher_id,
      syllabus,
    };
    fetch("http://localhost:8080/postcourse", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => {
        console.log(result);
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
          Add Course
        </button>
        <dialog id={`my_modal`} className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Add Course</h3>
            <form onSubmit={() => postCourse()}>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                Course ID
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Course ID"
                  onChange={(e) => {
                    setCourseId(e.target.value);
                  }}
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
                  placeholder="Enter Description"
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
                Teacher ID
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Teacher ID"
                  onChange={(e) => {
                    setTeacherId(e.target.value);
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

export default AddCourseModal;
