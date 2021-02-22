import React, { useState, Component } from "react";
import { useEffect } from "react";

import Ticket_Description_Emp from "./Ticket_Description_Emp";
import Tickets_Summary from "./Tickets_Summary";
import Ticket_Summary_Emp from "./Ticket_Summary_Emp";
import Ticket_Form_Emp from "./Ticket_Form_Emp";
import Card from "react-bootstrap/Card";
import "./Employee_Interface.scss";

export default function Employee_Interface(props) {
  const {
    selectedTicketInfo,
    selectedProperty,
    selectedTicket,
    properties,
    tickets,
    setLocalTicketToResolved,
  } = props;

  console.log("***Employee_Interface: properties ", props);
  return (
    <>
      <h1 className="Text--address-header">
        Address: {props.addressForSelectedProperty}
      </h1>
      <section className="employee__interface">
        {selectedTicket === 0 && (
          <Tickets_Summary
            properties={properties}
            selectedTicket={selectedTicket}
            tickets={tickets}
            selectedProperty={selectedProperty}
          />
        )}

        {selectedTicketInfo && selectedTicket !== 0 && (
          <Ticket_Summary_Emp
            selectedTicketInfo={selectedTicketInfo}
            selectedTicket={selectedTicket}
          />
        )}
        {selectedTicketInfo && selectedTicket !== 0 && (
          <Ticket_Description_Emp
            selectedTicketInfo={selectedTicketInfo}
            selectedTicket={selectedTicket}
          />
        )}
        {selectedTicketInfo && selectedTicket !== 0 && (
          <Ticket_Form_Emp
            selectedTicketInfo={selectedTicketInfo}
            setLocalTicketToResolved={setLocalTicketToResolved}
          />
        )}
      </section>
    </>
  );
}
