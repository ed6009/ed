const connection = require("../../Model/dbconfig");

const getStd = (req, res) => {
  let query = "SELECT student_id, student_name FROM student";
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
  let { student_id, student_name } = req.body;
  let query = "INSERT INTO student(student_id, student_name) VALUES($1, $2)";
  connection.query(query, [student_id, student_name], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
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

const patchStdName = (req, res) => {
  let student_id = req.params.student_id;
  let { student_name } = req.body;
  let query = "UPDATE student SET student_name=$1 WHERE student_id=$2";
  connection.query(query, [student_name, student_id], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err.sqlMessage);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

module.exports = { getStd, postStd, deleteStd, patchStdName };
