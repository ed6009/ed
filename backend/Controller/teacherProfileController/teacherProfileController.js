const connection = require("../../Model/dbconfig");

const getTchrPro = (req, res) => {
  let query =
    "SELECT profile_id, teacher_id, age, gender, email, teacher_documentation FROM teacherprofile";
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

const postTchrPro = (req, res) => {
  let { profile_id, teacher_id, age, gender, email, teacher_documentation } =
    req.body;
  let query =
    "INSERT INTO teacherprofile(profile_id, teacher_id, age, gender, email, teacher_documentation) VALUES($1, $2, $3, $4, $5, $6)";
  connection.query(
    query,
    [profile_id, teacher_id, age, gender, email, teacher_documentation],
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

const deleteTchrPro = (req, res) => {
  let { profile_id, teacher_id } = req.params;
  let query =
    "DELETE FROM teacherprofile WHERE profile_id = $1 AND teacher_id = $2";
  connection.query(query, [profile_id, teacher_id], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

const patchTchrPro = (req, res) => {
  let { profile_id, teacher_id } = req.params;
  let { age, gender, email } = req.body;
  let query =
    "UPDATE teacherprofile SET age = $1, gender = $2, email = $3, teacher_documentation = $4 WHERE profile_id = $5 AND teacher_id = $6";
  connection.query(
    query,
    [age, gender, email,teacher_documentation, profile_id, teacher_id],
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

module.exports = { getTchrPro, postTchrPro, deleteTchrPro, patchTchrPro };
