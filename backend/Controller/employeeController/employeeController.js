const connection = require("../../Model/dbconfig");

const getEmp = (req, res) => {
  let query = "SELECT emp_id, emp_name FROM employee";
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
  let { emp_id, emp_name } = req.body;
  let query = "INSERT INTO employee(emp_id, emp_name) VALUES($1, $2)";
  connection.query(query, [emp_id, emp_name], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err.sqlMessage);
    } else {
      res.send(result);
      console.log(result);
    }
  });
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

const patchEmpName = (req, res) => {
  let emp_id = req.params.emp_id;
  let { emp_name } = req.body;
  let query = "UPDATE employee SET emp_name=$1 WHERE emp_id=$2";
  connection.query(query, [emp_name, emp_id], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err.sqlMessage);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

module.exports = { getEmp, postEmp, deleteEmp, patchEmpName };
