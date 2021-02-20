import React from "react";
import classnames from "classnames";
import Button from 'react-bootstrap/Button';
import "./Employee_List_Item_PM.scss";
import axios from "axios";

export default function Employee_List_Item_PM(props) {
  const { id, name, setEmployee, selected } = props;

  // this function will handle updating database and local-state
  const handleEmployeeConfirmation = function () {
    


  }

  const EmployeeListItemClass = classnames({
    "employees-view": true,
    "employees-selected": selected
  });

  return (
    <li className={EmployeeListItemClass} onClick={setEmployee}>
      <Button variant="outline-primary">{name}</Button>{' '}
    </li>
  );
};
