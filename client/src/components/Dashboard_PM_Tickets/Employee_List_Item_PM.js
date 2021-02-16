import React from "react";
import classnames from "classnames";

import "./Employee_List_Item_PM.scss";

export default function Employee_List_Item_PM(props) {
  const { name, setEmployee, selected } = props;

  const EmployeeListItemClass = classnames({
    "employees-view": true,
    "employees-selected": selected
  });

  return (
    <li className={EmployeeListItemClass} onClick={setEmployee}>{name}</li>
  );
};
