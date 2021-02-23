import React, { useState, Component } from "react";
import { useEffect } from "react";

import Ticket_Description_Emp from "./Ticket_Description_Emp";
import Tickets_Summary from "./Tickets_Summary";
import Ticket_Summary_Emp from "./Ticket_Summary_Emp";
import Ticket_Form_Emp from "./Ticket_Form_Emp";
import Card from 'react-bootstrap/Card';
import './Employee_Interface.scss';
import Toast from 'react-bootstrap/Toast';


export default function Employee_Interface(props) {
  const {selectedTicketInfo,  selectedProperty, selectedTicket, properties, tickets, setLocalTicketToResolved , recentlyResolvedTickets} = props;
  const [show, setShow] = useState(true);
  const showToastAppear = function () {
    setShow(true);  
  }

  return (
    <section className="employee__interface">
        <>
          {recentlyResolvedTickets.map(ticket => (
            <Toast     style={{
              position: 'absolute',
              bottom: 10,
              left: 10,
              width: 250
            }}
             onClose={() => setShow(false)} show={show} delay={3000} autohide>
              <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Notification</strong>
                <small>just now</small>
              </Toast.Header>
              <Toast.Body>{`Ticket: ${recentlyResolvedTickets[0]} has been resolved!`}</Toast.Body>
            </Toast>
           ))
          }
        </>
        {selectedTicket === 0 && 
          <Tickets_Summary 
            properties= {properties}
            selectedTicket = {selectedTicket}
            tickets = {tickets}
            selectedProperty = {selectedProperty}
          />}

          { selectedTicketInfo && selectedTicket!== 0 &&  
          
          <Ticket_Summary_Emp 
            selectedTicketInfo = {selectedTicketInfo}
            selectedTicket = {selectedTicket}
          />}
          { selectedTicketInfo && selectedTicket !== 0 &&
            <Ticket_Description_Emp 
              selectedTicketInfo = {selectedTicketInfo}
              selectedTicket = {selectedTicket}
            />
          } 
          { selectedTicketInfo && selectedTicket !== 0 &&

          <Ticket_Form_Emp 
            selectedTicketInfo = {selectedTicketInfo}
            setLocalTicketToResolved = {setLocalTicketToResolved}
            showToastAppear = {showToastAppear}
          />
          }
        
    </section>
  );
}
