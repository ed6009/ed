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
                        className="btn btn-sm"
                        onClick={() =>
                          document
                            .getElementById(`my_modal_${index}`)
                            .showModal()
                        }
                      >
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
              className="btn"
              onClick={() => document.getElementById(`my_modal`).showModal()}
            >
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
