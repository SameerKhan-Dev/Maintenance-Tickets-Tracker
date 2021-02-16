import React, { useState } from "react";
import PropTypes from "prop-types";
import Employee_List_Item_PM from "./Employee_List_Item_PM";
import "./Employee_List_PM.scss"

// import "components/Employee_List_PM.scss";

const employees = [
  {
    name: "Tim",
    role_id: 1,
  },
  {
    name: "Jack",
    role_id: 2,
  },
  {
    name: "John",
    role_id: 3,
  }
];

export default function Employee_List_PM(props) {
  const [selectedEmployee, setSelectEmployee] = useState("none");
  const currentEmployee = selectedEmployee;
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Employee</h4>
      <ul className="employees__list">
        {employees.map((employee) => (
          <Employee_List_Item_PM
            key={employee.id}
            name={employee.name}
            selected={currentEmployee === employee.name}
            setEmployee={()=>setSelectEmployee(employee.name)}
          />
        ))}
      </ul>
      <h1>{selectedEmployee}</h1>
    </section>

  );
}
