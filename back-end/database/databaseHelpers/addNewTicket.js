const db = require("../database");

const addNewTicket = function (
  property_id, 
  creator_id, 
  maintenance_type_id, 
  ticket_status_id,
  description) {
  return db
    .query(
      `
      INSERT INTO tickets (
        property_id, 
        creator_id,
        maintenance_type_id, 
        ticket_status_id,
        description
      )
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;`, [
        property_id, 
        creator_id,
        maintenance_type_id, 
        ticket_status_id,
        description
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

module.exports = addNewTicket;