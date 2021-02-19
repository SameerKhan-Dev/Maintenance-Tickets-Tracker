import React, { useState } from "react";
import PropTypes from "prop-types";
import Employee_List_Item_PM from "./Employee_List_Item_PM";
import "./Employee_List_PM.scss"

// import "components/Employee_List_PM.scss";

const employees = [
  { 
    id: 21,
    name: "Tim",
    role_id: 3,
  },
  { 
    id: 22,
    name: "Mike",
    role_id: 4,
  },
  { 
    id: 23,
    name: "Rogers",
    role_id: 5,
  }
];

export default function Employee_List_PM(props) {
  //const [selectedEmployee, setSelectEmployee] = useState("none");
  const {setSelectEmployee, selectedEmployee} = props;

  const currentEmployee = selectedEmployee;
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Assign Employee:</h4>
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
      <h1>{selectedEmployee}</h1>
    </section>

  );
}
