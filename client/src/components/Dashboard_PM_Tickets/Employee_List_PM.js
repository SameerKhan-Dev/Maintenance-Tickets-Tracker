import React, { useState } from "react";
import PropTypes from "prop-types";
import Employee_List_Item_PM from "./Employee_List_Item_PM";
import "./Employee_List_PM.scss"

// import "components/Employee_List_PM.scss";

const employees = [
  { 
    id: 24,
    name: "Sameer",
    role_id: 3,
  },
  { 
    id: 25,
    name: "Mike",
    role_id: 4,
  },
  { 
    id: 26,
    name: "Rogers",
    role_id: 5,
  }
];

export default function Employee_List_PM(props) {
  const {setSelectEmployee, selectedEmployee} = props;

  const currentEmployee = selectedEmployee;
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light"><b>Assign Employee:</b></h4>
      <ul className="employees__list">
        {employees.map((employee) => (
          <Employee_List_Item_PM
            key={employee.id}
            id = {employee.id}
            name={employee.name}
            selected={currentEmployee === employee.name}
            setEmployee={()=>setSelectEmployee(employee.id)}
          />
        ))}
      </ul>
    </section>

  );
}
