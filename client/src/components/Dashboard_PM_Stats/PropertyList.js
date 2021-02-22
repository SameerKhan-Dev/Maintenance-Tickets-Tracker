import React from "react";
import { ListGroup } from "react-bootstrap";
import PropertyListItem from "./PropertyListItem"


export default function Propertylist(props){

  const {selectProperty, properties} = props;

 const propertiesListArray = properties.map((property) => {
    return (
      <ListGroup.Item style={{backgroundColor: 'transparent', ':hover': {backgroundColor: 'blue'}}} action variant="dark">
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
      <ListGroup.Item action variant="dark">
      <h2 className="text--regular">All Properties</h2>
      </ListGroup.Item>
    </li>
    {propertiesListArray}
    </>  
  )
};

