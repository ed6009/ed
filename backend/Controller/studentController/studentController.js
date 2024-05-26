const connection = require("../../Model/Database/dbconfig");

const getStd = (req, res) => {
  let query = "SELECT student_id, student_name, status, education FROM student";
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

const postStd = (req, res) => {
  let { student_id, student_name, password, status, education } = req.body;
  let query =
    "INSERT INTO student(student_id, student_name, password, status, education) VALUES($1, $2, $3, $4, $5)";
  connection.query(
    query,
    [student_id, student_name, password, status, education],
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

const deleteStd = (req, res) => {
  let student_id = req.params.student_id;
  let query = "DELETE FROM student WHERE student_id = $1";
  connection.query(query, [student_id], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

const patchStd = (req, res) => {
  let student_id = req.params.student_id;
  let { student_name, status, education } = req.body;
  let query =
    "UPDATE student SET student_name=$1, status=$2, education=$3 WHERE student_id=$4";
  connection.query(
    query,
    [student_name, status, education, student_id],
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

const patchStdPassword = (req, res) => {
  let student_id = req.params.student_id;
  let { password } = req.body;
  let query = "UPDATE student SET password=$1 WHERE student_id=$2";
  connection.query(query, [password, student_id], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err.sqlMessage);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

module.exports = { getStd, postStd, deleteStd, patchStd, patchStdPassword };
