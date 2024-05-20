const connection = require("../../Model/dbconfig");

const getRoleAssign = (req, res) => {
  let query = "SELECT emp_id, role_id FROM roleassign";
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

const postRoleAssign = (req, res) => {
  let { role_id, emp_id } = req.body;
  let query = "INSERT INTO roleassign(role_id, emp_id) VALUES($1, $2)";
  connection.query(query, [role_id, emp_id], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err.sqlMessage);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

const deleteRoleAssign = (req, res) => {
  let { role_id, emp_id } = req.params;
  let query = "DELETE FROM roleassign WHERE role_id = $1 AND emp_id = $2";
  connection.query(query, [role_id, emp_id], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err.sqlMessage);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

const patchRoleAssign = (req, res) => {
  let { role_id, emp_id } = req.body;
  let { old_role_id, old_emp_id } = req.params;
  let query =
    "UPDATE roleassign SET role_id = $1, emp_id = $2 WHERE role_id = $3 AND emp_id = $4";
  connection.query(
    query,
    [role_id, emp_id, old_role_id, old_emp_id],
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

module.exports = {
  getRoleAssign,
  postRoleAssign,
  deleteRoleAssign,
  patchRoleAssign,
};
