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

//('Tim','Ankunding','tim_ankunding.com','password',3,'2016-09-08T05:42:28.509Z'), /* OPTION general-maintenance */
//('Mike','Boyer','mike_boyer@hotmail.com','password',4,'2018-06-18T13:28:53.282Z'),  /* OPTION general-maintenance */
//('Roger','Ruecker','roger_ruecker@gmail.com','password',4,'2017-11-08T20:19:29.374Z'); /* OPTION general-maintenance */





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
