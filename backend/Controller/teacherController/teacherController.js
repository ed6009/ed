const connection = require("../../Model/dbconfig");

const getTchr = (req, res) => {
  let query = "SELECT teacher_id, teacher_name FROM teacher";
  connection.query(query, (err, result) => {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.send(result.rows);
      console.log(result.rows);
    }
  });
};

const postTchr = (req, res) => {
  let { teacher_id, teacher_name } = req.body;
  let query = "INSERT INTO teacher(teacher_id, teacher_name) VALUES($1, $2)";
  connection.query(query, [teacher_id, teacher_name], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

const deleteTchr = (req, res) => {
  let teacher_id = req.params.teacher_id;
  let query = "DELETE FROM teacher WHERE teacher_id = $1";
  connection.query(query, [teacher_id], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

const patchTchrName = (req, res) => {
  let teacher_id = req.params.teacher_id;
  let { teacher_name } = req.body;
  let query = "UPDATE teacher SET teacher_name=$1 WHERE teacher_id=$2";
  connection.query(query, [teacher_name, teacher_id], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err.sqlMessage);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

module.exports = { getTchr, postTchr, deleteTchr, patchTchrName };
