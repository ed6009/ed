const connection = require("../../Model/dbconfig");

const getStdPro = (req, res) => {
  let query =
    "SELECT profile_id, student_id, age, gender, email FROM studentprofile";
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

const postStdPro = (req, res) => {
  let { profile_id, student_id, age, gender, email } = req.body;
  let query =
    "INSERT INTO studentprofile(profile_id, student_id, age, gender, email) VALUES($1, $2, $3, $4, $5)";
  connection.query(
    query,
    [profile_id, student_id, age, gender, email],
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

const deleteStdPro = (req, res) => {
  let { profile_id, student_id } = req.params;
  let query =
    "DELETE FROM studentprofile WHERE profile_id = $1 AND student_id = $2";
  connection.query(query, [profile_id, student_id], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

const patchStdPro = (req, res) => {
  let { profile_id, student_id } = req.params;
  let { age, gender, email } = req.body;
  let query =
    "UPDATE studentprofile SET age = $1, gender = $2, email = $3 WHERE profile_id = $4 AND student_id = $5";
  connection.query(
    query,
    [age, gender, email, profile_id, student_id],
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

module.exports = { getStdPro, postStdPro, deleteStdPro, patchStdPro };
