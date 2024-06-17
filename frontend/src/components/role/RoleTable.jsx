import React, { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  const [role_id, setRole_id] = useState("");
  const [role_name, setRole_name] = useState("");

  function getRoleData() {
    fetch("http://localhost:8080/getrole")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }

  useEffect(() => {
    getRoleData();
  }, []);

  const postRole = () => {
    let data = { role_id, role_name };
    fetch("http://localhost:8080/postrole", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => {
        console.log(result);
        setRole_id("")
        setRole_name("")
        getRoleData();
      })
      .catch((error) => {
        console.error("Error saving data:", error);
      });
  };

  const patchRoleName = (role_id) => {
    const data = { role_name };
    fetch(`http://localhost:8080/patchrolename/${role_id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        getRoleData();
      })
      .catch((error) => {
        console.error("Error Editing data:", error);
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        {/* <div className="text-end mr-12">
          <button
            className="btn bg-primary-content"
            onClick={() => document.getElementById(`my_modal`).showModal()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Add Role
          </button>
          <dialog id={`my_modal`} className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Edit Role</h3>
              <form onSubmit={() => postRole()}>
                <label className="input input-bordered flex items-center gap-2 mb-2">
                  Role ID
                  <input
                    type="text"
                    className="grow"
                    placeholder="Enter Role ID"
                    onChange={(e) => {
                      setRole_id(e.target.value);
                    }}
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2 mb-2">
                  Role Name
                  <input
                    type="text"
                    className="grow"
                    placeholder="Enter role name"
                    onChange={(e) => {
                      setRole_name(e.target.value);
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
        </div> */}
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-center text-base">Serial No.</th>
              <th className="text-center text-base">Role ID</th>
              <th className="text-center text-base">Role Name</th>
              <th className="text-center text-base">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((currEle, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{currEle.role_id}</td>
                  <td className="text-center">{currEle.role_name}</td>
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
                          <h3 className="font-bold text-lg">Edit Role</h3>
                          <form onSubmit={() => patchRoleName(currEle.role_id)}>
                            <label className="input input-bordered flex items-center gap-2 mb-2">
                              Role ID
                              <input
                                type="text"
                                className="grow"
                                placeholder={`${currEle.role_id}`}
                                disabled
                              />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 mb-2">
                              Role Name
                              <input
                                type="text"
                                className="grow"
                                placeholder="Enter role name"
                                onChange={(e) => {
                                  setRole_name(e.target.value);
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
        <div className="text-center">
          <div>
            <button
              className="btn bg-primary-content"
              onClick={() => document.getElementById(`my_modal`).showModal()}
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
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Add Role
            </button>
            <dialog id={`my_modal`} className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Edit Role</h3>
                <form onSubmit={() => postRole()}>
                  <label className="input input-bordered flex items-center gap-2 mb-2">
                    Role ID
                    <input
                      type="text"
                      className="grow"
                      placeholder="Enter Role ID"
                      onChange={(e) => {
                        setRole_id(e.target.value);
                      }}
                    />
                  </label>
                  <label className="input input-bordered flex items-center gap-2 mb-2">
                    Role Name
                    <input
                      type="text"
                      className="grow"
                      placeholder="Enter role name"
                      onChange={(e) => {
                        setRole_name(e.target.value);
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
      </div>
    </div>
  );
};

export default Table;
