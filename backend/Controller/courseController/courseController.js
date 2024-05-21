const connection = require("../../Model/dbconfig");

const getCourse = (req, res) => {
  let query =
    "SELECT course_id, course_name, course_description, course_duration, teacher_id FROM course";
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

const postCourse = (req, res) => {
  let {
    course_id,
    course_name,
    course_description,
    course_duration,
    teacher_id,
  } = req.body;
  let query =
    "INSERT INTO course(course_id, course_name, course_description, course_duration, teacher_id) VALUES($1, $2, $3, $4, $5)";
  connection.query(
    query,
    [course_id, course_name, course_description, course_duration, teacher_id],
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

const deleteCourse = (req, res) => {
  let course_id = req.params.course_id;
  let query = "DELETE FROM course WHERE course_id = $1";
  connection.query(query, [course_id], (err, result) => {
    if (err) {
      res.send(err);
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
};

const patchCourse = (req, res) => {
  let course_id = req.params.course_id;
  let { course_name, course_description, course_duration, teacher_id } =
    req.body;
  let query =
    "UPDATE course SET course_name = $1, course_description = $2, course_duration = $3, teacher_id = $4 WHERE course_id = $5";
  connection.query(
    query,
    [course_name, course_description, course_duration, teacher_id, course_id],
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

module.exports = { getCourse, postCourse, deleteCourse, patchCourse };
