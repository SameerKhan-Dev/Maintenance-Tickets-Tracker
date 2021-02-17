import React from "react";
import PropertyListItem from "./PropertyListItem"



export default function Propertylist(props){

  const {selectProperty, properties} = props;

 const propertiesListArray = properties.map((property) => {
    return (
      <PropertyListItem
        property_id = {property.id}
        selectProperty = {selectProperty}
        key={property.id}
        name={property.name} 
      />
      )
  });

  return (
    <>
    <li onClick={ () => selectProperty(0)} >
      <h2 className="text--regular">All Properties</h2>
    </li>
    {propertiesListArray}
    </>  
  )
};

