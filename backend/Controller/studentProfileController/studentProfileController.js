const connection = require("../../Model/dbconfig");
const upload = require("../../Model/multerconfig");

const getStdPro = (req, res) => {
  let query =
    "SELECT profile_id, student_id, age, gender, email, student_documentation FROM studentprofile";
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
  let { profile_id, student_id, age, gender, email, student_documentation } =
    req.body;
  let query =
    "INSERT INTO studentprofile(profile_id, student_id, age, gender, email, student_documentation) VALUES($1, $2, $3, $4, $5, $6)";
  connection.query(
    query,
    [profile_id, student_id, age, gender, email, student_documentation],
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
  let { age, gender, email, student_documentation } = req.body;
  let query =
    "UPDATE studentprofile SET age = $1, gender = $2, email = $3, student_documentation = $4 WHERE profile_id = $5 AND student_id = $6";
  connection.query(
    query,
    [age, gender, email, student_documentation, profile_id, student_id],
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
