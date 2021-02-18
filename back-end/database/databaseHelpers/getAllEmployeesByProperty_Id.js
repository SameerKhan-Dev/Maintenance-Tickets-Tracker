const db = require("../database");

const getAllEmployeesByProperty_Id = function (property_id) {
  return db
    .query(
      `
        SELECT users.* FROM users 
        JOIN users_properties on users.id = users_properties.user_id
        WHERE users.role_id IN (3,4,5)
        AND property_id = $1`,
      [property_id]
    )
    .then((res) => {
      if (res.rows) {
        // console.log("res.rows is, ", res.rows);
        return res.rows;
      } else {
        console.log("null returned");
        return null;
      }
    })
    .catch((err) => console.log(err));
};

module.exports = getAllEmployeesByProperty_Id;
