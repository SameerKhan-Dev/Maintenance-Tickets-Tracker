const faker = require('faker');
const fs = require('fs')

function generateProperties() {

  let properties = []

  for (let id=1; id <= 10; id++) {

    let name = faker.address.streetName();
    let address = faker.address.streetAddress();
    let city = 'Toronto';
    let province = 'Ontario';
    let property_type = 'Condominium';
    let image = faker.image.business();
    let postal_code = faker.address.zipCode();
    let unit = faker.random.number();

    if (id < 5) {
      properties.push({
        "id": id,
        "property_manager_id": 1,
        "name": name,
        "address": address,
        "unit": 'APT ' + Math.floor(unit / 10),
        "city": city,
        "province": province,
        "postal_code": postal_code,
        "property_type": property_type,
        "image_path": image
    });
      
    } else if (id => 5) {
      properties.push({
        "id": id,
        "property_manager_id": 2,
        "name": name,
        "address": address,
        "unit": 'APT ' + Math.floor(unit / 10),
        "city": city,
        "province": province,
        "postal_code": postal_code,
        "property_type": property_type,
        "image_path": image
    });

    }
  }

  return { "data": properties }
}

let dataObj = generateProperties();

fs.writeFileSync('properties.json', JSON.stringify(dataObj, null, '\t'));