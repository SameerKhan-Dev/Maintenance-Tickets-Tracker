import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import React, {useState, Component} from 'react';

export default function MyVerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">

        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Your ticket has been submitted!</h4>
        <p>
          Please allow 24 hours for a response. 
          In case of emergency, please call 416-HIRE-ME!.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}