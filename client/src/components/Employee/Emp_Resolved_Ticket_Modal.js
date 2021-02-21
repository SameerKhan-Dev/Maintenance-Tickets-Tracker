import React, { useState, Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function ResolvedTicketModal(props) {
  const { onConfirm, show, onHide, ticketId, finalCost, onSubmit } = props;

  return (
    <>
      <Button variant="primary" onClick={onSubmit}>
        Maintenance Complete
      </Button>

      <Modal show={show} onHide={onHide}>
        <Modal.Body>
          Are you sure you would like to resolve the ticket?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={onConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}