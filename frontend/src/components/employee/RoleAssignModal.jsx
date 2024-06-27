import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const RoleAssignModal = (props) => {
  const [data, setData] = useState([]);
  const [role_id, setRoleId] = useState("R1");
  const emp_id = props.emp_id;
  const [singleData, setSingleData] = useState([]);

  useEffect(() => {
    fetchRoleData();
    fetchSingleRoleData(emp_id);
  }, [emp_id]);

  const fetchRoleData = () => {
    fetch("http://localhost:8080/getrole")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error("Error fetching role data:", error);
      });
  };

  const fetchSingleRoleData = (emp_id) => {
    fetch(`http://localhost:8080/getsingleroleassign/${emp_id}`)
      .then((res) => res.json())
      .then((result) => {
        setSingleData(result);
      })
      .catch((error) => {
        console.error("Error fetching single role data:", error);
      });
  };

  const postRoleAssign = (e) => {
    e.preventDefault();
    let data = {
      role_id,
      emp_id,
    };
    fetch("http://localhost:8080/postroleassign", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => {
        console.log(result);
        fetchSingleRoleData(emp_id);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  const revokeRole = (role_id, emp_id) => {
    fetch(`http://localhost:8080/deleteroleassign/${role_id}/${emp_id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        fetchSingleRoleData(emp_id);
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  return (
    <div>
      <div className="dropdown dropdown-right">
        <div tabIndex={0} role="button" className="m-1 btn btn-sm">
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
              d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
            />
          </svg>
        </div>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <button
              className="btn btn-sm btn-ghost"
              onClick={() =>
                document
                  .getElementById(`my_modal_assign_${props.emp_id}`)
                  .showModal()
              }
            >
              Assign Role
            </button>
          </li>
          <li>
            <button
              className="btn btn-sm btn-ghost"
              onClick={() =>
                document
                  .getElementById(`my_modal_edit_${props.emp_id}`)
                  .showModal()
              }
            >
              View Role
            </button>
          </li>
        </ul>
      </div>
      {/* Assign Role */}
      <dialog id={`my_modal_assign_${props.emp_id}`} className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Assign Role to {props.emp_name}</h3>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-center">Employee ID</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">{props.emp_id}</td>
                  <td className="text-center">
                    <form onSubmit={postRoleAssign}>
                      <select
                        className="mx-2 text-center select select-bordered"
                        value={role_id}
                        onChange={(e) => setRoleId(e.target.value)}
                      >
                        {data.map((ele) => {
                          return (
                            <option key={ele.role_id} value={ele.role_id}>
                              {ele.role_name}
                            </option>
                          );
                        })}
                      </select>
                      <button type="submit" className="mt-2 btn">
                        Submit
                      </button>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      {/* Edit Role */}
      <dialog id={`my_modal_edit_${props.emp_id}`} className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Edit Role of {props.emp_name}</h3>
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th className="text-center">Role Name</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {singleData.map((role) => (
                  <tr key={role.role_id}>
                    <td className="text-center">
                      {data.map((ceel) => {
                        if (ceel.role_id === role.role_id)
                          return <>{ceel.role_name}</>;
                      })}
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-sm btn-outline btn-error"
                        onClick={() => revokeRole(role.role_id, role.emp_id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="size-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        Revoke
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default RoleAssignModal;
