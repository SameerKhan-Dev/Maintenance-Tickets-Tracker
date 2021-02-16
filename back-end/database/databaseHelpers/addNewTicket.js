const pool = require('./database');

const addNewTicket = function (creator_id, property_id, title, description, maintenance_type_id) {

    return pool.query(`
    INSERT INTO tickets (creator_id, property_id, title, description)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;`, [creator_id, property_id, title, description, maintenance_type_id])
      .then(res => {
        console.log('Inside DB, res.rows[0] = ', res.rows[0]);
        return res.rows[0]}
        )
      .catch(err => {
        console.log("CATCH ", err);
      });
  }

  