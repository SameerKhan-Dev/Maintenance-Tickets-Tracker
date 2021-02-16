const faker = require('faker');
const fs = require('fs')

const getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateTickets() {

  let tickets = []

  for (let id=1; id <= 200; id++) {

    let description = faker.lorem.paragraph();
    let estimated_cost = faker.finance.amount();
    let actual_cost = faker.finance.amount();
    let image = faker.image.business();
    let past_date = faker.date.between('2017-01-01', '2020-02-14');
    let final_date = faker.date.between(past_date, '2020-02-14');

    if (id < 60) {
      tickets.push({
        "id": id,
        "property_id": getRandomInt(1, 4),
        "creator_id": getRandomInt(3, 7),
        "employee_id": getRandomInt(8, 14),
        "maintenance_type": getRandomInt(1, 3),
        "ticket_status_id": getRandomInt(1, 2),
        "description": description,
        "estimated_cost": estimated_cost,
        "actual_cost": actual_cost,
        "created_at": past_date,
        "completed_at": 'NULL',
        "image_path": image
      });
      
    } else if (id => 60) {

      tickets.push({
        "id": id,
        "property_id": getRandomInt(1, 4),
        "creator_id": getRandomInt(3, 7),
        "employee_id": getRandomInt(8, 14),
        "maintenance_type": getRandomInt(1, 3),
        "ticket_status_id": getRandomInt(1, 2),
        "description": description,
        "estimated_cost": estimated_cost,
        "actual_cost": actual_cost,
        "created_at": past_date,
        "completed_at": final_date,
        "image_path": image
      });
    }

  }

  return { "data": tickets }
}

let dataObj = generateTickets();

fs.writeFileSync('tickets.json', JSON.stringify(dataObj, null, '\t'));