const db = require("../database");

const getUsersById = function (user_id) {
  return db
    .query(
      `
      SELECT users.*, roles.role FROM users
      JOIN roles ON role_id = roles.id
      WHERE users.id = $1;`,
      [user_id]
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

module.exports = getUsersById;
