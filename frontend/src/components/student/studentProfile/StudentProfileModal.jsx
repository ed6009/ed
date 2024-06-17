import React, { useState, useEffect } from "react";

const StudentProfileModal = (props) => {
  const [profile, setProfile] = useState([]);

  function getSingleStudentProfileData(student_id) {
    fetch(`http://localhost:8080/getsinglestdpro/${student_id}`)
      .then((res) => res.json())
      .then((result) => {
        setProfile(result);
      });
  }

  useEffect(() => {
    getSingleStudentProfileData(props.student_id);
  }, [props.student_id]);

  const handleShowProfile = () => {
    if (profile.length === 0) {
      document.getElementById(`alert_${props.student_id}`).showModal();
    } else {
      document.getElementById(`modal_${props.student_id}`).showModal();
    }
  };

  return (
    <>
      <button className="btn btn-sm btn-accent" onClick={handleShowProfile}>
        Show Profile
      </button>

      <dialog id={`alert_${props.student_id}`} className="modal">
        <div className="modal-box">
          {/* <h3 className="font-bold text-lg">Glitch In The Matrix</h3> */}
          <div role="alert" className="alert alert-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-white">Error! Please insert profile data.</span>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {profile.map((currEle, index) => {
        const dob = new Date(currEle.dob).toLocaleString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });

        return (
          <div key={index}>
            <dialog id={`modal_${props.student_id}`} className="modal">
              <div className="modal-box shadow-lg rounded-lg p-6 max-w-md mx-auto">
                <div className="flex justify-evenly items-center mb-6">
                  <div className="avatar">
                    <div className="w-24 h-24 rounded-full overflow-hidden">
                      <img
                        src={currEle.profile_photo}
                        alt="Profile Photo"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="ml-4 text-center">
                    <h1 className="font-bold text-2xl mb-2 text-gray-400">
                      {props.student_name}
                    </h1>
                    <h1 className="text-lg mb-4 text-gray-500">
                      {currEle.email}
                    </h1>
                  </div>
                </div>
                <ul className="mt-3 divide-y rounded py-2 px-3 text-gray-500 shadow-sm hover:text-gray-700 hover:shadow">
                  {/* Profile details */}
                  <li className="flex items-center py-3 text-sm">
                    <span>Gender</span>
                    <span className="ml-auto">{currEle.gender}</span>
                  </li>
                  <li className="flex items-center py-3 text-sm">
                    <span>Date Of Birth</span>
                    <span className="ml-auto">{dob}</span>
                  </li>
                  <li className="flex items-center py-3 text-sm">
                    <span>Phone Number</span>
                    <span className="ml-auto">{currEle.phone_number}</span>
                  </li>
                  <li className="flex items-center py-3 text-sm">
                    <span>Address</span>
                    <span className="ml-auto">{currEle.address}</span>
                  </li>
                  <li className="flex items-center py-3 text-sm">
                    <span>City</span>
                    <span className="ml-auto">{currEle.city}</span>
                  </li>
                  <li className="flex items-center py-3 text-sm">
                    <span>State</span>
                    <span className="ml-auto">{currEle.state}</span>
                  </li>
                  <li className="flex items-center py-3 text-sm">
                    <span>Nationality</span>
                    <span className="ml-auto">{currEle.nationality}</span>
                  </li>
                  <li className="flex items-center py-3 text-sm">
                    <span>Joining Date</span>
                    <span className="ml-auto">{currEle.doj}</span>
                  </li>
                  <li className="flex items-center py-3 text-sm">
                    <span>Status</span>
                    <span className="ml-auto">
                      <span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">
                        active
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center py-3 text-sm">
                    <span>Profile Documentation</span>
                    <span className="ml-auto">
                      {currEle.student_documentation}
                    </span>
                  </li>
                </ul>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button
                  onClick={() =>
                    document.getElementById(`modal_${props.student_id}`).close()
                  }
                >
                  Close
                </button>
              </form>
            </dialog>
          </div>
        );
      })}
    </>
  );
};

export default StudentProfileModal;
