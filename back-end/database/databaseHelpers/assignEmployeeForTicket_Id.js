const db = require("../database");

const assignEmployeeForTicket_Id = function (employee_id, ticket_id) {
  return db
    .query(
      `
        UPDATE tickets
        SET employee_id = $1,
            ticket_status_id = 2
        WHERE id = $2`,
      [employee_id, ticket_id]
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

module.exports = assignEmployeeForTicket_Id;
