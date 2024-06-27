const connection = require("../../Model/Database/dbconfig");

const getStdPro = (req, res) => {
  let query =
    "SELECT profile_id, student_id, gender, email, address, city, state, nationality, profile_photo, doj, dob, phone_number FROM studentprofile";
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result.rows);
      console.log(result.rows);
    }
  });
};

const getSinglePro = (req, res) => {
  let student_id = req.params.student_id;
  let query =
    "SELECT profile_id, student_id, gender, email, address, city, state, nationality, profile_photo, doj, dob, phone_number FROM studentprofile WHERE student_id=$1";
  connection.query(query, [student_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result.rows);
      console.log(result.rows);
    }
  });
};

const postStdPro = (req, res) => {
  console.log("Received data:", req.body);

  const fullUrl = `${req.protocol}://${req.get("host")}/images/`;
  const student_id = req.body.student_id;
  const {
    gender,
    email,
    address,
    city,
    state,
    nationality,
    doj,
    dob,
    phone_number,
  } = req.body;

  const profile_photo = req.file ? fullUrl + req.file.filename : null;

  const query = `
    INSERT INTO studentprofile(
      student_id, gender, email, address, city, state, nationality, profile_photo, doj, dob, phone_number
    ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`;

  const data = [
    student_id,
    gender,
    email,
    address,
    city,
    state,
    nationality,
    profile_photo,
    doj,
    dob,
    phone_number,
  ];

  console.log("Data to be inserted:", data);

  connection.query(query, data, (err, result) => {
    if (err) {
      console.error("Error inserting student profile:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.status(201).json({ message: "Profile created successfully", result });
    }
  });
};

const deleteStdPro = (req, res) => {
  let { profile_id, student_id } = req.params;
  let query =
    "DELETE FROM studentprofile WHERE profile_id = $1 AND student_id = $2";
  connection.query(query, [profile_id, student_id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).send(result);
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
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
        console.log(result);
      }
    }
  );
};

module.exports = {
  getStdPro,
  postStdPro,
  deleteStdPro,
  patchStdPro,
  getSinglePro,
};
