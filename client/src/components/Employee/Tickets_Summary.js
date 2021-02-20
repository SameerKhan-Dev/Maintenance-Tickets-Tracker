import React from "react";
import Table from 'react-bootstrap/Table'
import "./AssignedTicketsListItem.scss";
import classnames from "classnames";

export default function Tickets_Summary(props) {
    //const{ticketsOrganizedByProperty} = props;
  
  //const {id, description, created_at,maintenance_type_id, property_id, selectTicket} = props;

  return (
    <Table striped bordered hover>
        <h1>HelloWorld</h1>
        <thead>
            <tr>
            <th>Property</th>
            <th>Total Assigned Tickets</th>
            <th>Last Name</th>
            <th>Username</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
    </Table>

  );
}
