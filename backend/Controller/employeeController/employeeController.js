const connection = require("../../Model/Database/dbconfig");

const getEmp = (req, res) => {
  let query = "SELECT emp_id, emp_name, qualification, status, doj FROM employee";
  connection.query(query, (err, result) => {
    if (err) {
      res.send(err);
      console.log(err.sqlMessage);
    } else {
      res.send(result.rows);
      console.log(result.rows);
    }
  });
};

const postEmp = (req, res) => {
  let { emp_id, emp_name, password, qualification, status, doj } = req.body;
  let query =
    "INSERT INTO employee(emp_id, emp_name, password, qualification, status, doj) VALUES($1, $2, $3, $4, $5, $6)";
  connection.query(
    query,
    [emp_id, emp_name, password, qualification, status, doj],
    (err, result) => {
      if (err) {
        res.send(err);
        console.log(err.sqlMessage);
      } else {
        res.send(result);
        console.log(result);
      }
    }
  );
};

const deleteEmp = (req, res) => {
  let emp_id = req.params.emp_id;
  let query = "DELETE FROM employee WHERE emp_id = $1";
  connection.query(query, [emp_id], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err.sqlMessage);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

const patchEmp = (req, res) => {
  let emp_id = req.params.emp_id;
  let { emp_name, qualification, status, doj } = req.body;
  let query =
    "UPDATE employee SET emp_name=$1,qualification=$2, status=$3, doj=$4 WHERE emp_id=$5";
  connection.query(query, [emp_name, qualification, status, doj, emp_id], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err.sqlMessage);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

const patchEmpPassword = (req, res) => {
  let emp_id = req.params.emp_id;
  let { password } = req.body;
  let query = "UPDATE employee SET password=$1 WHERE emp_id=$2";
  connection.query(query, [password, emp_id], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err.sqlMessage);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

module.exports = { getEmp, postEmp, deleteEmp, patchEmp , patchEmpPassword};
