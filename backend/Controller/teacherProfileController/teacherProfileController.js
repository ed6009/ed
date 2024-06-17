const connection = require("../../Model/Database/dbconfig");

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

const getSinglePro = (req, res) => {
  let teacher_id = req.params.teacher_id;
  let query =
    "SELECT profile_id, teacher_id, gender, email, teacher_documentation, address, city, state, marital_status, nationality, salary, profile_photo, doj, dob FROM teacherprofile WHERE teacher_id=$1";
  connection.query(query, [teacher_id], (err, result) => {
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
  var fullUrl = req.protocol + "://" + req.get("host") + "/images/";
  let teacher_profile_data = {
    profile_id: req.body.profile_id,
    teacher_id: req.body.teacher_id,
    gender: req.body.gender,
    email: req.body.email,
    teacher_documentation: req.body.teacher_documentation,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    marital_status: req.body.marital_status,
    nationality: req.body.nationality,
    salary: req.body.salary,
    profile_photo: fullUrl + req.file.filename,
    doj: req.body.doj,
    dob: req.body.dob,
  };
  const data = [
    teacher_profile_data.profile_id,
    teacher_profile_data.teacher_id,
    teacher_profile_data.gender,
    teacher_profile_data.email,
    teacher_profile_data.teacher_documentation,
    teacher_profile_data.address,
    teacher_profile_data.city,
    teacher_profile_data.state,
    teacher_profile_data.marital_status,
    teacher_profile_data.nationality,
    teacher_profile_data.salary,
    teacher_profile_data.profile_photo,
    teacher_profile_data.doj,
    teacher_profile_data.dob,
  ];
  let query =
    "INSERT INTO teacherprofile(profile_id, teacher_id, gender, email, teacher_documentation, address, city, state, marital_status, nationality, salary, profile_photo, doj, dob) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)";
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

module.exports = {
  getTchrPro,
  postTchrPro,
  deleteTchrPro,
  patchTchrPro,
  getSinglePro,
};
