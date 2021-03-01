import React, { useState, Component } from "react";
import "./PropertyListItem.scss";
import classnames from "classnames";
import "./PropertyList.scss";
import { faBuilding } from "@fortawesome/free-solid-svg-icons"; 

export default function PropertyListItem(props) {
  console.log("*** Props inside PropertyListItem: ", props);

  const { name, selectProperty, property_id } = props;

  return (
    <li
      className={props.name}
      data-testid="day"
      onClick={() => {
        selectProperty(property_id);
      }}
    >
      <h5 className="property_name text--regular" >{props.address}</h5>
    </li>
  );
}
