const db = require("../database");

const getUserByEmail = function (email) {
  return db
    .query(
      `
      SELECT users.*, roles.role FROM users
      JOIN roles ON role_id = roles.id
      WHERE users.email = $1;`,
      [email]
    )
    .then((res) => {
      if (res.rows) {
        console.log("res.rows is, ", res.rows);
        return res.rows;
      } else {
        console.log("null returned");
        return null;
      }
    })
    .catch((err) => console.log(err));
};

module.exports = getUserByEmail;
