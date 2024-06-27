import React, { useState } from "react";

const AddCourseModal = ({ fetchCourseData }) => {
  const [course_id, setCourse_id] = useState("");
  const [course_name, setCourse_name] = useState("");
  const [course_description, setCourse_description] = useState("");
  const [syllabus, setSyllabus] = useState("");
  const [fees, setFees] = useState("");

  const postCourse = () => {
    let data = {
      course_id,
      course_name,
      course_description,
      syllabus,
      fees,
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
        fetchCourseData();
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  return (
    <div>
      <button
        className="btn btn-neutral hover:scale-110 transition-transform duration-300"
        onClick={() => document.getElementById("add_course_modal").showModal()}
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
        Add Course
      </button>
      <dialog id="add_course_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Course</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              postCourse();
            }}
          >
            <label className="input input-bordered flex items-center gap-2 mb-2">
              Course ID
              <input
                type="text"
                className="grow"
                placeholder="Enter Course ID"
                onChange={(e) => {
                  setCourse_id(e.target.value);
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
                  setCourse_name(e.target.value);
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
                  setCourse_description(e.target.value);
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
                type="number"
                className="grow"
                placeholder="Enter Fees"
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
  );
};

export default AddCourseModal;
