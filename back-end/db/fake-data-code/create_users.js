const faker = require('faker');
const fs = require('fs')

function generateUsers() {

  let users = []

  for (let id=1; id < 12; id++) {

    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email();
    let past_date = faker.date.between('2015-01-01', '2020-02-14');

    if (id < 3) {

      users.push({
        "id": id,
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "password": 'password',
        "role_id": 2,
        "active": Boolean,
        "start_date": past_date,
        "end_date": 'NULL'
    });

    } else if ( 3 <= id < 5) {

      users.push({
        "id": id,
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "password": 'password',
        "role_id": 2,
        "active": Boolean,
        "start_date": past_date,
        "end_date": 'NULL'
    });

    } else if (5 <= id < 7) {

      users.push({
        "id": id,
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "password": 'password',
        "role_id": 3,
        "active": Boolean,
        "start_date": past_date,
        "end_date": 'NULL'
    });

    } else if (7 <= id < 9) {

      users.push({
        "id": id,
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "password": 'password',
        "role_id": 4,
        "active": Boolean,
        "start_date": past_date,
        "end_date": 'NULL'
    });
  
    } else if (9 <= id < 12) {

      users.push({
        "id": id,
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "password": 'password',
        "role_id": 5,
        "active": Boolean,
        "start_date": past_date,
        "end_date": 'NULL'
    });
  }

}
return { "users": users }
}

let dataObj = generateUsers();

fs.writeFileSync('users2.json', JSON.stringify(dataObj, null, '\t'));