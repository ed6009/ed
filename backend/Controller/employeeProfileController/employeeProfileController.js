const connection = require("../../Model/Database/dbconfig");

const getEmpPro = (req, res) => {
  let query =
    "SELECT profile_id, emp_id, email, phone_number, gender, profile_photo, attach_document, address, city, state, salary, nationality, marital_status, dob FROM employeeprofile";
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

const postEmpPro = (req, res) => {
  let {
    profile_id,
    emp_id,
    email,
    phone_number,
    gender,
    profile_photo,
    attach_document,
    address,
    city,
    state,
    salary,
    nationality,
      marital_status,
    dob
  } = req.body;
  let query =
    "INSERT INTO employeeprofile(profile_id, emp_id, email, phone_number, gender, profile_photo, attach_document, address, city, state, salary, nationality, marital_status, dob) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)";
  connection.query(
    query,
    [
      profile_id,
      emp_id,
      email,
      phone_number,
      gender,
      profile_photo,
      attach_document,
      address,
      city,
      state,
      salary,
      nationality,
        marital_status,
      dob
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

const deleteEmpPro = (req, res) => {
  let { profile_id, emp_id } = req.params;
  let query =
    "DELETE FROM employeeprofile WHERE profile_id = $1 AND emp_id = $2";
  connection.query(query, [profile_id, emp_id], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

const patchEmpPro = (req, res) => {
  let { profile_id, emp_id } = req.params;
  let {
    email,
    phone_number,
    gender,
    profile_photo,
    attach_document,
    address,
    city,
    state,
    salary,
    nationality,
      marital_status,
    dob
  } = req.body;
  let query =
    "UPDATE employeeprofile SET email=$1, phone_number=$2, gender=$3, profile_photo=$4, attach_document=$5, address=$6, city=$7, state=$8, salary=$9, nationality=$10, marital_status=$11, dob=$12 WHERE profile_id = $13 AND emp_id = $14";
  connection.query(
    query,
    [
      email,
      phone_number,
      gender,
      profile_photo,
      attach_document,
      address,
      city,
      state,
      salary,
      nationality,
        marital_status,
      dob,
      profile_id,
      emp_id,
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

module.exports = { getEmpPro, postEmpPro, deleteEmpPro, patchEmpPro };
