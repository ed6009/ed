const multer = require("multer");

const config = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../Assets/Images");
  },
  filename: function (req, file, cb) {
    cb(null, `image-${Date.now()}.${file.originalname}`);
  },
});

const upload = multer({
  storage: config,
});

module.exports = upload;

// app.post("/multerimage", upload.single("image"), async (req, res) => {
//   const filename = req.file.filename;
//   const data = {
//     image: filename,
//   };
//   console.log(data);
//   const query = "INSERT INTO multerimage SET ?";
//   await connection.query(query, data, (err, result) => {
//     if (err) {
//       return res.send({ Error: err.sqlMessage });
//     } else {
//       return res.send({ status: 200, Responses: result.response });
//     }
//   });
// });

const postDoc = (req, res) => {
  const filename = req.file.filename;
  const data = {
    image: filename,
  };
  console.log(data);
  const query = "INSERT INTO studentprofile(student_documentation) VALUES($1)";
  connection.query(query, data, (err, result) => {
    if (err) {
      return res.send({ Error: err.sqlMessage });
    } else {
      return res.send({ status: 200, Responses: result.response });
    }
  });
};
