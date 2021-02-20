import React, { useState, Component } from "react";
import { useEffect } from "react";

import Ticket_Description_Emp from "./Ticket_Description_Emp";
import Ticket_Summary_Emp from "./Ticket_Summary_Emp";
import Ticket_Form_Emp from "./Ticket_Form_Emp";

export default function Employee_Interface(props) {

  // const [state, setState] = useState(
  //   selectedTicket: 0,
  //   ticketStatus_id: 2, // In progress
  // )
  const test = "Employee_Interface";


  return (
    <section className="employee__interface">
      <h1 className="Text--address-header">
        42 Wallaby Way Toronto, ON M1P 3R9
      </h1>
      <Ticket_Summary_Emp test={test}/>
      <Ticket_Description_Emp />
      <Ticket_Form_Emp />
    </section>
  );
}
