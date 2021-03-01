const db = require("../database");

const getAllTicketsByEmployee_Id = function (employee_id) {
  return db
    .query(
      `
      SELECT tickets.* FROM tickets
      WHERE employee_id = $1;`,
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

module.exports = getAllTicketsByEmployee_Id;
