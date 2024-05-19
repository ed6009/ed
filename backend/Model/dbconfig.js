const pg = require("pg");

let connection = new pg.Client({
  host: "localhost",
  user: "postgres",
  password: "1121",
  database: "edtemp",
  port: 5432,
});

connection.connect((err) => {
  if (err) {
    console.log("ERROR", err.message);
  } else {
    console.log("CONNECTED");
  }
});

module.exports = connection;
