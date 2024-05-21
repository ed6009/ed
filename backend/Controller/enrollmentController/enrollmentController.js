const connection = require("../../Model/dbconfig");

const getEnrol = (req, res) => {
  let query =
    "SELCT enrollment_id, student_id, course_id, enrollment_date FROM enrollment";
  connection.query(query, (err, result) => {
    if (err) {
      res.send(err);
      console.log(result.rows);
    } else {
      res.send(result.rows);
      console.log(result.rows);
    }
  });
};

const postEnrol = (req, res) => {
  let { enrollment_id, student_id, course_id, enrollment_date } = req.body;
  let query =
    "INSERT INTO enrollment(enrollment_id, student_id, course_id, enrollment_date) VALUES($1, $2, $3, $4)";
  connection.query(
    query,
    [enrollment_id, student_id, course_id, enrollment_date],
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

const deleteEnrol = (req, res) => {
  let { enrollment_id } = req.params.enrollment_id;
  let query = "DELETE FROM enrollment WHERE enrollment_id = $1";
  connection.query(query, [enrollment_id], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

const patchEnrol = (req, res) => {
  let enrollment_id = req.params.enrollment_id;
  let { student_id, course_id, enrollment_date } = req.body;
  let query =
    "UPDATE enrollment SET student_id = $1, course_id = $2, enrollment_date = $3 WHERE enrollment_id = $4";
  connection.query(
    query,
    [student_id, course_id, enrollment_date, enrollment_id],
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

module.exports = { getEnrol, postEnrol, deleteEnrol, patchEnrol };
