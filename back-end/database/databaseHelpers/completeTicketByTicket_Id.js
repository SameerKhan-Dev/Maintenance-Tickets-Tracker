const db = require("../database");

const completeTicketByTicket_Id = function (ticket_id, actual_cost) {
  return db
    .query(
      `
      UPDATE tickets
      SET ticket_status_id = 3, 
          actual_cost = $2
      WHERE id = $1
      RETURNING *;`,
      [ticket_id, actual_cost]
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

module.exports = completeTicketByTicket_Id;