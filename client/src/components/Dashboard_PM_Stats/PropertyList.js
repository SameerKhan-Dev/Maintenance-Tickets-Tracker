import React from "react";
import PropertyListItem from "./PropertyListItem"

let properties = [
  {name: "property #1", property_id:1, address: 'address #1'},
  {name: "property #2", property_id:2, address: 'address #2'},
  {name: "property #3", property_id:2, address: 'address #3'},
  {name: "property #4", property_id:2, address: 'address #4'},
]

export default function Propertylist(props){
  return (
    (properties.map((property) => (
        <PropertyListItem
          key={property.id}
          name={property.name} 
        />
    )))
  );
};
