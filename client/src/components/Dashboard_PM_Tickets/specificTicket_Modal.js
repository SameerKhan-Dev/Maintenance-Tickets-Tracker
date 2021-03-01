import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import React, {useState, Component} from 'react';
import Employee_List_PM from "./Employee_List_PM";

export default function MyVerticallyCenteredModal(props) {
   const {employeeList, description, assignEmployeeToTicket, ticket_id} = props;
   const [selectedEmployee, setSelectEmployee] = useState("none");

   const handleConfirmAssignEmployee = function(ticket_id,employee_id) {

    props.onHide();
    //assignEmployeeToTicket(ticket_id,employee_id);

   }

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
          <h4><b>Description</b></h4>
          <p>
           {description}
          </p>
        </Modal.Body>
        <Employee_List_PM employeeList={employeeList} 
            selectedEmployee= {selectedEmployee}
            setSelectEmployee = {setSelectEmployee}

        />
        <Modal.Footer>
          <Button onClick={() => props.onHide(ticket_id, selectedEmployee)}
        >Confirm</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  
  
  
  