const db = require("../database");

const getAllPropertiesByEmployee_Id = function (employee_id) {
  return db
    .query(
      `
      SELECT properties.*, users_properties.user_id
      FROM properties
      JOIN users_properties
      ON properties.id = users_properties.property_id
      WHERE users_properties.user_id = $1;`,
      [employee_id]
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

module.exports = getAllPropertiesByEmployee_Id;
