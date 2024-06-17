import React, { useState, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

const Dashboard = () => {
  const [emp_count, setEmpCount] = useState([]);
  const [std_count, setStdCount] = useState([]);
  const [tchr_count, setTchrCount] = useState([]);
  function getEmpData() {
    fetch("http://localhost:8080/getemp")
      .then((res) => res.json())
      .then((result) => {
        setEmpCount(result);
      });
  }
  function getStdData() { 
    fetch("http://localhost:8080/getstd")
      .then((res) => res.json())
      .then((result) => {
        setStdCount(result);
      });
  }
   function getTchrData() {
     fetch("http://localhost:8080/gettchr")
       .then((res) => res.json())
       .then((result) => {
         setTchrCount(result);
       });
   }

  useEffect(() => {
    getEmpData();
    getStdData();
    getTchrData()
  }, []);

  const data = [
    {
      label: "Employee",
      value: emp_count.length,
    },
    {
      label: "Student",
      value: std_count.length,
    },
    {
      label: "Teacher",
      value: tchr_count.length,
    },
  ];
  return (
    <>
      <div className="">
        <div className="flex justify-around">
          <div className="card w-96 h-52 bg-rose-500 text-neutral-content mx-1">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Cookies!</h2>
              <p>We are using cookies for no reason.</p>
            </div>
          </div>
          <div className="card w-96 h-52 bg-rose-500 text-neutral-content mx-1">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Cookies!</h2>
              <p>We are using cookies for no reason.</p>
            </div>
          </div>
          <div className="card w-96 h-52 bg-rose-500 text-neutral-content mx-1">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Cookies!</h2>
              <p>We are using cookies for no reason.</p>
            </div>
          </div>
          <div className="card w-96 h-52 bg-rose-500 text-neutral-content mx-1">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Cookies!</h2>
              <p>We are using cookies for no reason.</p>
            </div>
          </div>
        </div>
        <div className="mt-20 w-full h-96 flex justify-start mx-2">
          <div className="w-1/2 flex">
            <div className="card w-96 h-96 border-4 border-dashed border-rose-400 text-neutral-content mx-4">
              <div className="card-body items-center text-center">
                <Doughnut
                  data={{
                    labels: data.map((data) => data.label),
                    datasets: [
                      {
                        label: "Count",
                        data: data.map((data) => data.value),
                      },
                    ],
                  }}
                />
              </div>
            </div>
            <div className="card w-96 h-96 border-4 border-dashed border-rose-400 text-neutral-content mx-4">
              <div className="card-body items-center text-center pt-20">
                <Bar
                  data={{
                    labels: data.map((data) => data.label),
                    datasets: [
                      {
                        label: "Count",
                        data: data.map((data) => data.value),
                        backgroundColor: "#FF6484",
                      },
                    ],
                  }}
                />
              </div>
            </div>
          </div>
          <div className="card w-96 h-96 border-4 border-dashed border-rose-400 text-neutral-content mx-4">
            <div className="card-body items-center text-center">
              <Line
                data={{
                  labels: data.map((data) => data.label),
                  datasets: [
                    {
                      label: "Count",
                      data: data.map((data) => data.value),
                      borderColor: "#FF6484",
                      backgroundColor: "#FFFF",
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
