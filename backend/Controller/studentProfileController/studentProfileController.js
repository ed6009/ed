const connection = require("../../Model/dbconfig");
const upload = require("../../Model/multerconfig");

const getStdPro = (req, res) => {
  let query =
    "SELECT profile_id, student_id, gender, email, student_documentation, address, city, state, nationality, profile_photo, doj, dob, phone_number FROM studentprofile";
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
  let {
    profile_id,
    student_id,
    gender,
    email,
    student_documentation,
    address,
    city,
    state,
    nationality,
    profile_photo,
    doj,
    dob,
    phone_number,
  } = req.body;
  let query =
    "INSERT INTO studentprofile(profile_id, student_id, gender, email, student_documentation, address, city, state, nationality, profile_photo, doj, dob, phone_number) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)";
  connection.query(
    query,
    [
      profile_id,
      student_id,
      gender,
      email,
      student_documentation,
      address,
      city,
      state,
      nationality,
      profile_photo,
      doj,
      dob,
      phone_number,
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
  let {
    gender,
    email,
    student_documentation,
    address,
    city,
    state,
    nationality,
    profile_photo,
    doj,
    dob,
    phone_number,
  } = req.body;
  let query =
    "UPDATE studentprofile SET gender=$1, email=$2, student_documentation=$3, address=$4, city=$5, state=$6, nationality=$7, profile_photo=$8, doj=$9, dob=$10, phone_number=$11 WHERE profile_id = $12 AND student_id = $13";
  connection.query(
    query,
    [
      gender,
      email,
      student_documentation,
      address,
      city,
      state,
      nationality,
      profile_photo,
      doj,
      dob,
      phone_number,
      profile_id,
      student_id,
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

module.exports = { getStdPro, postStdPro, deleteStdPro, patchStdPro };
