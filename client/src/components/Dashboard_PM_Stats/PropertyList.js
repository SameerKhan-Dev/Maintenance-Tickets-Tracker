import React from "react";
import { ListGroup } from "react-bootstrap";
import PropertyListItem from "./PropertyListItem"

export default function Propertylist(props) {
  const { selectProperty, properties, selectedProperty } = props;

  console.log("*** Props inside PropertyList: ", props);

  const propertiesListArray = properties.map((property) => {
    return (

      <ListGroup.Item style={{backgroundColor: selectedProperty === property.id ? `gray` : `blue`}} action variant="dark">
        <PropertyListItem
          property_id = {property.id}
          selectProperty = {selectProperty}
          key={property.id}
          name={property.name} 
        
        />
      </ListGroup.Item>
      )
  });

  return (
    <>
    <li onClick={ () => {
      
      selectProperty(0);
     
                        }} >
      <ListGroup.Item style={{backgroundColor: 'transparent'}} action variant="dark">
      <h2 className="text--regular">All Properties</h2>
      </ListGroup.Item>
    </li>
    {propertiesListArray}
    </>  
  )
};

