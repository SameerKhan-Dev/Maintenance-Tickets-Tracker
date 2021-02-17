const db = require('../database');

const getAllTicketsByPm_Id = function (pm_id) {

    return db.query(`
      SELECT * FROM tickets
      JOIN properties ON tickets.property_id = properties.id
      WHERE property_manager_id = $1;`
      , [pm_id])
      .then(res => {
        if (res.rows) {
  
          // console.log("res.rows is, ", res.rows);
          return res.rows;
  
        } else {
            
          console.log("null returned");
          return null;
        }
      })
      .catch(err => console.log(err));
  
  }

  module.exports = getAllTicketsByPm_Id;
  
