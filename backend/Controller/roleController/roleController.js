const connection = require("../../Model/dbconfig");

const getRole = (req, res) => {
  let query = "SELECT role_id, role_name FROM role";
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

const postRole = (req, res) => {
  let { role_id, role_name } = req.body;
  let query = "INSERT INTO role(role_id, role_name) VALUES($1, $2)";
  connection.query(query, [role_id, role_name], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err.sqlMessage);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

const deleteRole = (req, res) => {
  let role_id = req.params.role_id;
  let query = "DELETE FROM role WHERE role_id = $1";
  connection.query(query, [role_id], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err.sqlMessage);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

const patchRoleName = (req, res) => {
  let role_id = req.params.role_id;
  let { role_name } = req.body;
  let query = "UPDATE role SET role_name = $1 WHERE role_id = $2";
  connection.query(query, [role_name, role_id], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err.sqlMessage);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

module.exports = { getRole, postRole, deleteRole, patchRoleName };
