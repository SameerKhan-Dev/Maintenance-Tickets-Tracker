const db = require('../../../../../back-end/database/database');

const getTicketsByMaintenanceTypeId = function (maintenace_type_id) {

    return db.query(`
      SELECT * FROM tickets
      WHERE maintenance_type_id = $1;`
      , [maintenace_type_id])
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

  module.exports = getTicketsByMaintenanceTypeId;
  
