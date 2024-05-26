const connection = require("../../Model/Database/dbconfig");

const getTchr = (req, res) => {
  let query =
    "SELECT teacher_id, teacher_name, qualification, status, specialization FROM teacher";
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
  let {
    teacher_id,
    teacher_name,
    password,
    qualification,
    status,
    specialization,
  } = req.body;
  let query =
    "INSERT INTO teacher(teacher_id, teacher_name, password, qualification, status, specialization) VALUES($1, $2, $3, $4, $5, $6)";
  connection.query(
    query,
    [teacher_id, teacher_name, password, qualification, status, specialization],
    (err, result) => {
      if (err) {
        res.send(err);
        console.log(err);
      } else {
        res.send(result);
        console.log(result);
      }
    }
  );
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

const patchTchr = (req, res) => {
  let teacher_id = req.params.teacher_id;
  let { teacher_name, qualification, status, specialization } = req.body;
  let query =
    "UPDATE teacher SET teacher_name=$1, qualification=$2, status=$3, specialization=$4 WHERE teacher_id=$5";
  connection.query(
    query,
    [teacher_name, qualification, status, specialization, teacher_id],
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

const patchTchrPassword = (req, res) => {
  let teacher_id = req.params.teacher_id;
  let { password } = req.body;
  let query = "UPDATE teacher SET password=$1 WHERE teacher_id=$2";
  connection.query(query, [password, teacher_id], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err.sqlMessage);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

module.exports = {
  getTchr,
  postTchr,
  deleteTchr,
  patchTchr,
  patchTchrPassword,
};
