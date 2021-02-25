import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ResolvedTicketModal from "./Emp_Resolved_Ticket_Modal";
const axios = require("axios");
export default function Ticket_Form_Emp(props) {
  const history = useHistory(); 
  const {selectedTicketInfo,  showToastAppear} = props;
  const {setLocalTicketToResolved} = props;

  ////////////// GET ACTUAL DATA LATER AND SET AS PROPS.////////////////


  const [finalCost, setFinalCost] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleHideModal = () => {
    setShowModal(false);
  };

  const handleFinalCostChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setFinalCost((finalCost) => ({
      ...finalCost,
      finalCost: value,
    }));
  };

  const onSubmit = () => {
    setShowModal(true);
  };

  const onConfirm = () => {
    setShowModal(false);

    return axios
      .put(`/tickets/resolved/`, {
        ticket_id: selectedTicketInfo.id,
        actual_cost: finalCost.finalCost,
      })
      .then((response) => {
        console.log("RESPONSE: ", response.data);
        history.push("/dashboard-employee");
        setLocalTicketToResolved(selectedTicketInfo.id);
        showToastAppear();
      });
  };

  return (
    <>
    <Card>
    <Card.Body className="address__info">
      <Card.Title><b>Upon Ticket Completion:</b></Card.Title>
      <Form >
          <section className="ticket__card-form-section">
          <section className="ticket__card-form">
            <form onSubmit={(event) => event.preventDefault()}>
              <section className="ticket__card-final-cost">           
                <h6 className="final_cost">Final Cost ($) <input
                  className="ticket__final-cost"
                  value={finalCost.actual_cost}
                  name="finalCost"
                  onChange={handleFinalCostChange}
                  finalCost="finalCost"
                  type="text"
                  placeholder="Final Cost"
                /></h6>
               
              </section>
              <ResolvedTicketModal
                  onConfirm={onConfirm}
                  show={showModal}
                  onHide={handleHideModal}
                  ticketId={props.ticket_id}
                  finalCost={finalCost}
                  onSubmit={onSubmit}
              />
            </form>
          </section>
          {/*showModal && <div>Modal</div>*/}
        </section>
      </Form>
    </Card.Body>
  </Card>

    {/*
    <section className="ticket__card-form-section">
      <section className="ticket__card-form">
        <form onSubmit={(event) => event.preventDefault()}>
          <section className="ticket__card-final-cost">
            <h1>Please enter final cost:</h1>
            <label>Final Cost: $</label>
            <input
              className="ticket__final-cost"
              value={finalCost.actual_cost}
              name="finalCost"
              onChange={handleFinalCostChange}
              finalCost="finalCost"
              type="text"
              placeholder="Final Cost"
            />
          </section>
          <ResolvedTicketModal
            onConfirm={onConfirm}
            show={showModal}
            onHide={handleHideModal}
            ticketId={props.ticket_id}
            finalCost={finalCost}
            onSubmit={onSubmit}
          />
        </form>
      </section>
    </section>
    </>
   */}
   </>
  );
}
