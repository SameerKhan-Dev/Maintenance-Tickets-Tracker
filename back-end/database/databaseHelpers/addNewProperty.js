const db = require("../database");

const addNewProperty = function (
  property_manager_id,
  name,
  address,
  unit,
  city,
  province,
  postal_code,
  property_type,
  image_path
) {
  return db
    .query(
      `
      INSERT INTO properties (
        property_manager_id,
        name,
        address,
        unit,
        city,
        province,
        postal_code,
        property_type,
        image_path)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *;`,
      [
        property_manager_id,
        name,
        address,
        unit,
        city,
        province,
        postal_code,
        property_type,
        image_path,
      ]
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

module.exports = addNewProperty;
