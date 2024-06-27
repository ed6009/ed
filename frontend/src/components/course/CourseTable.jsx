import React, { useEffect, useMemo, useState, useCallback } from "react";
import AddCourseModal from "./AddCourseModal";
import { Link } from "react-router-dom";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";

const EditCourseModal = ({ course, patchCourse }) => {
  const [course_name, setCourse_name] = useState(course.course_name);
  const [course_description, setCourse_description] = useState(
    course.course_description
  );
  const [syllabus, setSyllabus] = useState(course.syllabus);
  const [fees, setFees] = useState(course.fees);

  const handleSubmit = (e) => {
    e.preventDefault();
    patchCourse(course.course_id, {
      course_name,
      course_description,
      syllabus,
      fees,
    });
  };

  return (
    <dialog id={`my_modal_${course.course_id}`} className="modal">
      <div className="modal-box">
        <h3 className="text-lg font-bold">Edit Course</h3>
        <form onSubmit={handleSubmit}>
          <label className="flex items-center gap-2 mb-2 input input-bordered">
            Course ID
            <input
              type="text"
              className="grow"
              value={course.course_id}
              disabled
            />
          </label>
          <label className="flex items-center gap-2 mb-2 input input-bordered">
            Course Name
            <input
              type="text"
              className="grow"
              value={course_name}
              onChange={(e) => setCourse_name(e.target.value)}
            />
          </label>
          <label className="flex items-center gap-2 mb-2 input input-bordered">
            Course Description
            <input
              type="text"
              className="grow"
              value={course_description}
              onChange={(e) => setCourse_description(e.target.value)}
            />
          </label>
          <label className="flex items-center gap-2 mb-2 input input-bordered">
            Syllabus
            <input
              type="text"
              className="grow"
              value={syllabus}
              onChange={(e) => setSyllabus(e.target.value)}
            />
          </label>
          <label className="flex items-center gap-2 mb-2 input input-bordered">
            Fees
            <input
              type="number"
              className="grow"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
            />
          </label>
          <button type="submit" className="mt-2 btn">
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

const CourseTable = () => {
  const [data, setData] = useState([]);

  const columns = useMemo(
    () => [
      {
        Header: "Serial Number",
        Cell: ({ row }) => row.index + 1,
      },
      {
        Header: "Course ID",
        accessor: "course_id",
      },
      {
        Header: "Course Name",
        accessor: "course_name",
      },
      {
        Header: "Course Description",
        accessor: "course_description",
      },
      {
        Header: "Syllabus",
        accessor: "syllabus",
      },
      {
        Header: "Fees",
        accessor: "fees",
      },
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <div className="flex items-center justify-center">
            <button
              className="mr-2 btn btn-sm btn-primary"
              onClick={() =>
                document
                  .getElementById(`my_modal_${row.original.course_id}`)
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
            <EditCourseModal course={row.original} patchCourse={patchCourse} />
          </div>
        ),
      },
    ],
    []
  );

  function fetchCourseData() {
    fetch("http://localhost:8080/getcourse")
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }

  useEffect(() => {
    fetchCourseData();
  }, []);

  const patchCourse = useCallback((course_id, updatedData) => {
    fetch(`http://localhost:8080/patchcourse/${course_id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then(() => {
        fetch("http://localhost:8080/getcourse")
          .then((res) => res.json())
          .then((result) => {
            setData(result);
          })
          .then(fetchCourseData());
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
    setPageSize,
    setGlobalFilter,
    prepareRow,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);

  const { pageIndex, pageSize, globalFilter } = state;

  return (
    <div>
      <div className="mx-10 text-sm breadcrumbs">
        <ul>
          <li>
            <Link to="/dashboard">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link to="/course">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
              Course
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-8 border border-gray-300 rounded-lg table-container">
        <div className="flex items-center justify-between pb-2 mx-20 mt-2 shadow-sm">
          <h1 className="items-center text-xl font-semibold">
            All Courses List
          </h1>
          <AddCourseModal fetchCourseData={fetchCourseData} />
        </div>
        <div className="flex items-center justify-between pb-2 mx-20 mt-2 shadow-sm">
          <div className="flex items-center gap-1">
            <span>Show</span>
            <select
              className="select select-bordered select-sm"
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[5, 10, 15, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
            <span>enrties</span>
          </div>
          <div>
            <label className="flex items-center gap-2 input input-sm input-bordered">
              <input
                type="text"
                className="grow"
                placeholder="Search"
                value={globalFilter || ""}
                onChange={(e) => setGlobalFilter(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table {...getTableProps()} className="table">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="text-base text-center"
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
          <div className="flex items-center justify-center gap-4 mb-2">
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
                    d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10l3.72-3.72a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
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

export default CourseTable;
