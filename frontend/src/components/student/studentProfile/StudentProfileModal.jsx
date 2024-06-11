import React from "react";

const StudentProfileModal = (props) => {
  return (
    <div>
      <button
        className="btn btn-sm"
        onClick={() =>
          document.getElementById(`modal_${props.student_id}`).showModal()
        }
      >
        Show Profile
      </button>
      <dialog id={`modal_${props.student_id}`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{props.student_name}</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default StudentProfileModal;
