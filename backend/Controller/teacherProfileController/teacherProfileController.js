const connection = require("../../Model/Database/dbconfig");

const getTchrPro = (req, res) => {
  let query =
    "SELECT profile_id, teacher_id, gender, email, address, city, state, marital_status, nationality, salary, profile_photo, doj, dob FROM teacherprofile";
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
    "SELECT profile_id, teacher_id, gender, email, address, city, state, marital_status, nationality, salary, profile_photo, doj, dob FROM teacherprofile WHERE teacher_id=$1";
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
    teacher_id: req.body.teacher_id,
    gender: req.body.gender,
    email: req.body.email,
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
    teacher_profile_data.teacher_id,
    teacher_profile_data.gender,
    teacher_profile_data.email,
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
    "INSERT INTO teacherprofile(teacher_id, gender, email, address, city, state, marital_status, nationality, salary, profile_photo, doj, dob) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)";
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
    "UPDATE teacherprofile SET gender = $1, email = $2, address = $3, city = $4, state = $5, marital_status = $6, nationality = $7, salary = $8, profile_photo = $9, doj = $10, dob = $11 WHERE profile_id = $12 AND teacher_id = $13";
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
