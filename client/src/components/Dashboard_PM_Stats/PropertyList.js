import React from "react";
import { ListGroup } from "react-bootstrap";
import PropertyListItem from "./PropertyListItem"

export default function Propertylist(props) {
  const { selectProperty, properties, selectedProperty } = props;

  console.log("*** Props inside PropertyList: ", props);

  const propertiesListArray = properties.map((property) => {
    return (

      <ListGroup.Item style={{backgroundColor: selectedProperty === property.id ? `#343a40` : `transparent`}} action variant="dark">
        <PropertyListItem
          property_id = {property.id}
          selectProperty = {selectProperty}
          key={property.id}
          name={property.name} 
          address={property.address} 
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
      <h4 className="text--regular">All Properties</h4>
      </ListGroup.Item>
    </li>
    {propertiesListArray}
    </>  
  )
};

