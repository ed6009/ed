import React, { useState, useEffect } from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  DoughnutController,
  LineController,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  DoughnutController,
  LineController,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [empCount, setEmpCount] = useState([]);
  const [stdCount, setStdCount] = useState([]);
  const [tchrCount, setTchrCount] = useState([]);
  const [crsCount, setCrsCount] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const fetchData = async (url, setState) => {
    try {
      const res = await fetch(url);
      const result = await res.json();
      setState(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData("http://localhost:8080/getemp", setEmpCount);
    fetchData("http://localhost:8080/getstd", setStdCount);
    fetchData("http://localhost:8080/gettchr", setTchrCount);
    fetchData("http://localhost:8080/getcourse", setCrsCount);
  }, []);

  const data = [
    { label: "Employee", value: empCount.length },
    { label: "Student", value: stdCount.length },
    { label: "Teacher", value: tchrCount.length },
    { label: "Course", value: crsCount.length },
  ];

  const chartData = {
    labels: data.map((d) => d.label),
    datasets: [
      {
        label: "Count",
        data: data.map((d) => d.value),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        borderColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="grid gap-4 p-4 m-4 border-2 rounded-lg">
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="w-full bg-blue-400 card h-52 text-neutral-content">
          <div className="pt-12 card-body">
            <div className="stat">
              <div className="ml-6 text-white stat-figure">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
              </div>
              {loading && (
                <span className="loading loading-dots loading-lg"></span>
              )}
              {visible && (
                <div className="text-gray-800 stat-value">
                  {empCount.length}
                </div>
              )}
              <div className="text-lg stat-title">Total Employees</div>
            </div>
          </div>
        </div>
        <div className="w-full bg-orange-400 card h-52 text-neutral-content">
          <div className="pt-12 card-body">
            <div className="stat">
              <div className="ml-6 text-white stat-figure">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </div>
              {loading && (
                <span className="loading loading-dots loading-lg"></span>
              )}
              {visible && (
                <div className="text-gray-800 stat-value">
                  {stdCount.length}
                </div>
              )}
              <div className="text-lg stat-title">Total Students</div>
            </div>
          </div>
        </div>
        <div className="w-full bg-red-400 card h-52 text-neutral-content">
          <div className="pt-12 card-body">
            <div className="stat">
              <div className="ml-6 text-white stat-figure">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                  />
                </svg>
              </div>
              {loading && (
                <span className="loading loading-dots loading-lg"></span>
              )}
              {visible && (
                <div className="text-gray-800 stat-value">
                  {tchrCount.length}
                </div>
              )}
              <div className="text-lg stat-title">Total Teachers</div>
            </div>
          </div>
        </div>
        <div className="w-full bg-green-400 card h-52 text-neutral-content">
          <div className="pt-12 card-body">
            <div className="stat">
              <div className="ml-6 text-white stat-figure">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 h-12"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              {loading && (
                <span className="loading loading-dots loading-lg"></span>
              )}
              {visible && (
                <div className="text-gray-800 stat-value">
                  {crsCount.length}
                </div>
              )}
              <div className="text-lg stat-title">Total Courses</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-8 mt-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          <div className="border-4 border-gray-400 border-dashed card h-96 text-neutral-content">
            <div className="items-center text-center card-body">
              <Doughnut data={chartData} />
            </div>
          </div>
          <div className="border-4 border-gray-400 border-dashed card h-96 text-neutral-content">
            <div className="items-center pt-20 text-center card-body">
              <Bar data={chartData} />
            </div>
          </div>
        </div>
        <div className="w-full border-4 border-gray-400 border-dashed card h-96 text-neutral-content">
          <div className="items-center overflow-hidden card-body">
            <Line data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
