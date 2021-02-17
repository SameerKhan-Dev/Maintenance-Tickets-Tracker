const db = require('../database');

const getAllPropertiesByPM_Id = function (PM_Id) {

    return db.query(`
        SELECT * FROM properties
        WHERE property_manager_id = $1;`, [PM_Id])
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

  module.exports = getAllPropertiesByPM_Id;