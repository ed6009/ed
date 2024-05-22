const express = require("express");
const swaggerui = require("swagger-ui-express");
const swaggerjsdoc = require("swagger-jsdoc");
const port = 8080;
const employeeRouter = require("./Routes/employeeRoutes/employeeRoutes");
const roleRouter = require("./Routes/roleRoutes/roleRoutes");
const roleAssignRouter = require("./Routes/roleAssignRoutes/roleAssignRoutes");
const studentRouter = require("./Routes/studentRoutes/studentRoutes");
const teacherRouter = require("./Routes/teacherRoutes/teacherRoutes");
const studentProfileRouter = require("./Routes/studentProfileRoutes/studentProfileRoutes");
const teacherProfileRouter = require("./Routes/teacherProfileRoutes/teacherProfileRoutes");
const courseRouter = require("./Routes/courseRoutes/courseRoutes");
const enrollmentRouter = require("./Routes/enrollmentRoutes/enrollmentRoutes");

const app = express();
app.use(express.json());

app.use("/", employeeRouter);
app.use("/", roleRouter);
app.use("/", roleAssignRouter);
app.use("/", studentRouter);
app.use("/", teacherRouter);
app.use("/", studentProfileRouter);
app.use("/", teacherProfileRouter);
app.use("/", courseRouter);
app.use("/", enrollmentRouter);

const option = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node.js API documentation for ED Tech",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:8080",
      },
    ],
  },
  apis: [
    "./Routes/studentRoutes/studentSwagger.js",
    "./Routes/employeeRoutes/employeeSwagger.js",
    "./Routes/roleRoutes/roleSwagger.js",
    "./Routes/roleAssignRoutes/roleAssignSwagger.js",
    "./Routes/studentProfileRoutes/studentProfileSwagger.js",
    "./Routes/teacherProfileRoutes/teacherProfileSwagger.js",
    "./Routes/courseRoutes/courseSwagger.js",
    "./Routes/enrollmentRoutes/enrollmentSwagger.js",
    "./Routes/teacherRoutes/teacherSwagger.js",
  ],
};

app.use("/testing", swaggerui.serve, swaggerui.setup(swaggerjsdoc(option)));

app.listen(port, () => {
  console.log("SERVER IS RUNNING");
});
