import React from "react";
import PropertyListItem_Tickets from "./PropertyListItem_Tickets"


export default function Propertylist_Tickets(props){

  const {selectProperty, properties, selectedProperty} = props;

  const propertiesListArray = properties.map((property) => {
    return (
      <PropertyListItem_Tickets style={{backgroundColor: selectedProperty === property.id ? `#343a40` : `transparent`}}
        property_id = {property.id}
        selectProperty = {selectProperty}
        key={property.id}
        name={property.name}
        address = {property.address}
       
      />
      )
  });

  return (
    <>
    <li onClick={ () => {
      
      selectProperty(0);
     
                        }} >
      <h4 className="text--regular--ticket">All Properties</h4>
    </li>
    {propertiesListArray}
    </>  
  )
};


