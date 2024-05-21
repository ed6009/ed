const express = require("express");
const employeeRouter = require("./Routes/employeeRoutes/employeeRoutes");
const roleRouter = require("./Routes/roleRoutes/roleRoutes");
const roleAssignRouter = require("./Routes/roleAssignRoutes/roleAssignRoutes");
const studentRouter = require("./Routes/studentRoutes/studentRoutes");
const teacherRouter = require("./Routes/teacherRoutes/teacherRoutes");
const studentProfileRouter = require("./Routes/studentProfileRoutes/studentProfileRoutes");
const teacherProfileRouter = require("./Routes/teacherProfileRoutes/teacherProfileRoutes");
const courseRouter = require("./Routes/courseRoutes/courseRoutes");

const app = express();
app.use(express.json());

const port = 8080;

app.use("/", employeeRouter);
app.use("/", roleRouter);
app.use("/", roleAssignRouter);
app.use("/", studentRouter);
app.use("/", teacherRouter);
app.use("/", studentProfileRouter);
app.use("/", teacherProfileRouter);
app.use("/", courseRouter);

app.listen(port, () => {
  console.log("SERVER IS RUNNING");
});
