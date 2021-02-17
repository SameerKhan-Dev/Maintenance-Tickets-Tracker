import React from "react";
import PropertyListItem from "./PropertyListItem"



export default function Propertylist(props){

  const {selectProperty, properties} = props;

  return (
    (properties.map((property) => (
        <PropertyListItem
          property_id = {property.property_id}
          selectProperty = {selectProperty}
          key={property.id}
          name={property.name} 
        />
    )))
  );
};
