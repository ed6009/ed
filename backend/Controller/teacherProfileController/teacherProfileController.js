const connection = require("../../Model/dbconfig");

const getTchrPro = (req, res) => {
  let query =
    "SELECT profile_id, teacher_id, gender, email, teacher_documentation, address, city, state, marital_status, nationality, salary, profile_photo, doj, dob FROM teacherprofile";
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
  let {
    profile_id,
    teacher_id,
    gender,
    email,
    teacher_documentation,
    address,
    city,
    state,
    marital_status,
    nationality,
    salary,
    profile_photo,
    doj,
    dob,
  } = req.body;
  let query =
    "INSERT INTO teacherprofile(profile_id, teacher_id, gender, email, teacher_documentation, address, city, state, marital_status, nationality, salary, profile_photo, doj, dob) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)";
  connection.query(
    query,
    [
      profile_id,
      teacher_id,
      gender,
      email,
      teacher_documentation,
      address,
      city,
      state,
      marital_status,
      nationality,
      salary,
      profile_photo,
      doj,
      dob,
    ],
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
  let {
    gender,
    email,
    teacher_documentation,
    address,
    city,
    state,
    marital_status,
    nationality,
    salary,
    profile_photo,
    doj,
    dob,
  } = req.body;
  let query =
    "UPDATE teacherprofile SET gender = $1, email = $2, teacher_documentation = $3, address = $4, city = $5, state = $6, marital_status = $7, nationality = $8, salary = $9, profile_photo = $10, doj = $11, dob = $12 WHERE profile_id = $13 AND teacher_id = $14";
  connection.query(
    query,
    [
      gender,
      email,
      teacher_documentation,
      address,
      city,
      state,
      marital_status,
      nationality,
      salary,
      profile_photo,
      doj,
      dob,
      profile_id,
      teacher_id,
    ],
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
