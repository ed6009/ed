const connection = require("../../Model/Database/dbconfig");

const getEmpPro = (req, res) => {
  let query =
    "SELECT profile_id, emp_id, email, phone_number, gender, profile_photo, address, city, state, salary, nationality, marital_status, dob FROM employeeprofile";
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

const getSinglePro = (req, res) => {
  let emp_id = req.params.emp_id;
  let query =
    "SELECT profile_id, emp_id, email, phone_number, gender, profile_photo, address, city, state, salary, nationality, marital_status, dob FROM employeeprofile WHERE emp_id=$1";
  connection.query(query, [emp_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result.rows);
      console.log(result.rows);
    }
  });
};

const postEmpPro = (req, res) => {
  var fullUrl = req.protocol + "://" + req.get("host") + "/images/";
  let emp_profile_data = {
    emp_id: req.body.emp_id,
    email: req.body.email,
    phone_number: req.body.phone_number,
    gender: req.body.gender,
    profile_photo: fullUrl + req.file.filename,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    salary: req.body.salary,
    nationality: req.body.nationality,
    marital_status: req.body.marital_status,
    dob: req.body.dob,
  };
  let data = [
    emp_profile_data.emp_id,
    emp_profile_data.email,
    emp_profile_data.phone_number,
    emp_profile_data.gender,
    emp_profile_data.profile_photo,
    emp_profile_data.address,
    emp_profile_data.city,
    emp_profile_data.state,
    emp_profile_data.salary,
    emp_profile_data.nationality,
    emp_profile_data.marital_status,
    emp_profile_data.dob,
  ];
  let query =
    "INSERT INTO employeeprofile(emp_id, email, phone_number, gender, profile_photo, address, city, state, salary, nationality, marital_status, dob) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)";
  connection.query(query, data, (err, result) => {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
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
    address,
    city,
    state,
    salary,
    nationality,
    marital_status,
    dob,
  } = req.body;
  let query =
    "UPDATE employeeprofile SET email=$1, phone_number=$2, gender=$3, profile_photo=$4, address=$5, city=$6, state=$7, salary=$8, nationality=$9, marital_status=$10, dob=$11 WHERE profile_id = $12 AND emp_id = $13";
  connection.query(
    query,
    [
      email,
      phone_number,
      gender,
      profile_photo,
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

module.exports = {
  getEmpPro,
  postEmpPro,
  deleteEmpPro,
  patchEmpPro,
  getSinglePro,
};
