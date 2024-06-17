import "./App.css";
import Navbar from "./Navbar";
import StudentTable from "./components/student/StudentTable";
import TeacherTable from "./components/teacher/TeacherTable";
import EmployeeTable from "./components/employee/EmployeeTable";
import RoleTable from "./components/role/RoleTable";
import CourseTable from "./components/course/CourseTable";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Example from "./Example";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "/dashboard", element: <Dashboard /> },
        { path: "/student", element: <StudentTable /> },
        { path: "/teacher", element: <TeacherTable /> },
        { path: "/employee", element: <EmployeeTable /> },
        { path: "/role", element: <RoleTable /> },
        { path: "/course", element: <CourseTable /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* <Example/> */}
    </>
  );
}

export default App;
