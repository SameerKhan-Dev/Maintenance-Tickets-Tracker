import React from "react";
import { ListGroup } from "react-bootstrap";
import PropertyListItem from "./PropertyListItem"
import "./PropertyList.scss";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
export default function Propertylist(props) {
  const { selectProperty, properties, selectedProperty } = props;

  console.log("*** Props inside PropertyList: ", props);
  //style={{backgroundColor: selectedProperty === property.id ? `#343a40` : `transparent`}} 
  // style={{backgroundColor: 'transparent'}}
  
  //let variantColor = ;


  const propertiesListArray = properties.map((property) => {
    return (
      
      <ListGroup.Item action variant={(selectedProperty !== property.id ? "dark" : "light")}>

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
      <ListGroup.Item action variant={(selectedProperty !== 0 ? "dark" : "light")}>
      <h5 className="text--regular property_name"><FontAwesomeIcon icon={faBuilding} /> All Properties</h5>
      </ListGroup.Item>
    </li>
    {propertiesListArray}
    </>  
  )
};

