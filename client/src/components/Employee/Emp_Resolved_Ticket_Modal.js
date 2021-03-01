import React, { useState, Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ResolvedTicketModal(props) {
  const { onConfirm, show, onHide, ticketId, finalCost, onSubmit } = props;

  return (
    <>
      <section style={{paddingTop: '20px'}} variant="warning" onClick={onSubmit}>
        <a href="#" class="cta">
              <span>Maintenance Complete?</span>
              <svg width="13px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </a>
      </section>
    

      <Modal show={show} onHide={onHide}>
        <Modal.Body>
          Are you sure you would like to resolve the ticket?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="warning" onClick={onConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}