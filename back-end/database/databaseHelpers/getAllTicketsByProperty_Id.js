const db = require('../database');

const getAllTicketsByProperty_Id = function (property_id) {

    return db.query(`
        SELECT * FROM tickets
        WHERE property_id = ($1)`, [property_id])
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

  module.exports = getAllTicketsByProperty_Id;
  
