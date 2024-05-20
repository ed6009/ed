const express = require("express");
const employeeRouter = require("./Routes/employeeRoutes/employeeRoutes");
const roleRouter = require("./Routes/roleRoutes/roleRoutes");

const app = express();
app.use(express.json())

const port = 8080;

app.use("/", employeeRouter);
app.use("/", roleRouter);

app.listen(port, () => {
  console.log("SERVER IS RUNNING");
});
