const db = require("../database");

const getPropertyByTenantUser_Id = function (user_id) {
  return db
    .query(
      `
      SELECT properties.*, users_properties.user_id FROM properties
      JOIN users_properties ON users_properties.property_id = properties.id
      WHERE users_properties.user_id = $1;`,
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

module.exports = getPropertyByTenantUser_Id;
