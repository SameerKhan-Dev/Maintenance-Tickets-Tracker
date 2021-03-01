import React from "react";
import PropertyListItem_Tickets from "./PropertyListItem_Tickets";
import "./PropertyListItem_Tickets.scss";
import { ListGroup } from "react-bootstrap";

export default function Propertylist_Tickets(props){

  const {selectProperty, properties, selectedProperty} = props;
  const propertiesListArray = properties.map((property) => {
    return (
      <ListGroup.Item action variant={(selectedProperty !== property.id ? "dark" : "light")}>
        <PropertyListItem_Tickets 
          property_id = {property.id}
          selectProperty = {selectProperty}
          key={property.id}
          name={property.name}
          address = {property.address}
        />
      </ListGroup.Item>
      )
  });

  return (
    <>
    <li onClick={ () => {
      
      selectProperty(0);
     
                        }} >
      <ListGroup.Item action variant={(selectedProperty !== 0 ? "dark" : "light")}>
        <h5 className="text--regular--ticket property_name">All Properties</h5>
      </ListGroup.Item>
        
    </li>
    {propertiesListArray}
    </>  
  )
};


