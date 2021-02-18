const db = require("../database");

const addNewUser = function (firstname, lastname, email, password, role_id) {
  return db
    .query(
      `
      INSERT INTO users (firstname, lastname, email, password, role_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;`, [firstname, lastname, email, password, role_id]
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

module.exports = addNewUser;