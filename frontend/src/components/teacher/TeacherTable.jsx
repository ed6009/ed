import React, { useEffect, useMemo, useState, useCallback } from "react";
import AddTeacherModal from "./AddTeacherModal";
import TeacherProfileModal from "./teacherProfile/TeacherProfileModal";
import { useTable, useSortBy, usePagination } from "react-table";

const EditTeacherModal = ({ teacher, patchTeacher }) => {
  const [teacher_name, setTeacher_name] = useState(teacher.teacher_name);
  const [status, setStatus] = useState(teacher.status);
  const [qualification, setQualification] = useState(teacher.qualification);
  const [specialization, setSpecialization] = useState(teacher.specialization);

  const handleSubmit = (e) => {
    e.preventDefault();
    patchTeacher(teacher.teacher_id, {
      teacher_name,
      status,
      qualification,
      specialization,
    });
  };

  return (
    <dialog id={`my_modal_${teacher.teacher_id}`} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Edit Teacher</h3>
        <form onSubmit={handleSubmit}>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Teacher ID
            <input
              type="text"
              className="grow"
              value={teacher.teacher_id}
              disabled
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Teacher Name
            <input
              type="text"
              className="grow"
              value={teacher_name}
              onChange={(e) => setTeacher_name(e.target.value)}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Specialization
            <input
              type="text"
              className="grow"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
            />
          </label>
          <select
            className="input select select-bordered w-full mb-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option disabled value="">
              Status
            </option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <label className="input input-bordered flex items-center gap-2 mb-2">
            Qualification
            <input
              type="text"
              className="grow"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            />
          </label>
          <button type="submit" className="btn mt-2 ">
            Submit
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

const TeacherTable = () => {
  const [data, setData] = useState([]);

  const columns = useMemo(
    () => [
      {
        Header: "Serial Number",
        Cell: ({ row }) => row.index + 1,
      },
      {
        Header: "Teacher ID",
        accessor: "teacher_id",
      },
      {
        Header: "Teacher Name",
        accessor: "teacher_name",
      },
      {
        Header: "Qualification",
        accessor: "qualification",
      },
      {
        Header: "Specialization",
        accessor: "specialization",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <div className="flex items-center justify-center">
            <button
              className="btn btn-sm btn-primary mr-2"
              onClick={() =>
                document
                  .getElementById(`my_modal_${row.original.teacher_id}`)
                  .showModal()
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
              Edit
            </button>
            <EditTeacherModal
              teacher={row.original}
              patchTeacher={patchTeacher}
            />
            <TeacherProfileModal
              teacher_id={row.original.teacher_id}
              teacher_name={row.original.teacher_name}
            />
          </div>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    fetch("http://localhost:8080/gettchr")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  const patchTeacher = useCallback((teacher_id, updatedData) => {
    fetch(`http://localhost:8080/patchtchr/${teacher_id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then(() => {
        fetch("http://localhost:8080/gettchr")
          .then((res) => res.json())
          .then((result) => {
            setData(result);
          });
      })
      .catch((error) => {
        console.error("Error Editing data:", error);
      });
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    pageCount,
    state,
    prepareRow,
  } = useTable({ columns, data }, useSortBy, usePagination);

  const { pageIndex } = state;

  return (
    <div>
      <div className="table-container border border-gray-300 rounded-lg mx-8">
        <div className="flex justify-between items-center mx-20 mt-2 pb-2 shadow-sm">
          <h1 className="text-xl font-semibold items-center">
            All Teacher List
          </h1>
          <AddTeacherModal />
        </div>
        <div className="overflow-x-auto">
          <table {...getTableProps()} className="table">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="text-center text-base"
                    >
                      <div className="flex items-center justify-center">
                        {column.render("Header")}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="size-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="ml-2">
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="size-5"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="size-5"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )
                          ) : (
                            ""
                          )}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()} className="text-center">
                        {cell.render("Cell")}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex items-center justify-center gap-4">
            <div>
              <span>
                Page{" "}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{" "}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button
                className="btn btn-square btn-outline btn-sm"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L6.31 10l3.72-3.72a.75.75 0 1 0-1.06-1.06L4.72 9.47Zm9.25-4.25L9.72 9.47a.75.75 0 0 0 0 1.06l4.25 4.25a.75.75 0 1 0 1.06-1.06L11.31 10l3.72-3.72a.75.75 0 0 0-1.06-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                className="btn btn-outline btn-primary btn-sm"
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                Previous
              </button>
              <button
                className="btn btn-outline btn-primary btn-sm"
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                Next
              </button>
              <button
                className="btn btn-square btn-outline btn-sm"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10l-3.72-3.72a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherTable;
