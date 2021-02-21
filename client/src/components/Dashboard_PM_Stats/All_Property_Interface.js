import React from "react";

import Comparison_Chart from "./Comparison_Chart";
import { Card } from 'react-bootstrap';
import "./All_Property_Interface.scss"

export default function All_Property_Interface(props) {
  const {ticketsOrganizedByProperty, properties } = props;

  //const {specificStats} = props; 
  console.log("This is props:")
  console.log(props);

  return (
    <>
      {/* Total Unsolved */}
      {/* <main class="ticket-cards"> */}
      <section className="ticket__info">
        {/* <div class="unsolved"> */}
        <Card
          bg={'danger'}
          text={'danger' === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header style={{ fontSize: '15px', textAlign: 'center' }}>
            Unresolved Tickets</Card.Header>
          <Card.Body>
            <Card.Title style={{ fontSize: '30px', textAlign: 'center' }}>
              {props.specificStats.totalUnsolved}</Card.Title>
          </Card.Body>
        </Card>
        {/* </div> */}

        {/* Pending */}
        {/* <div class="pending"> */}
        <Card
          bg={'warning'}
          text={'warning' === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header style={{ fontSize: '15px', textAlign: 'center' }}>
            Pending Tickets:</Card.Header>
          <Card.Body>
            <Card.Title style={{ fontSize: '30px', textAlign: 'center' }}>
              {props.specificStats.pending}</Card.Title>
          </Card.Body>
        </Card>
        {/* </div> */}

        {/* In Progress */}
        {/* <div class="progress"> */}
        <Card
          bg={'success'}
          text={'success' === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header style={{ fontSize: '15px', textAlign: 'center' }}>
            In Progress:</Card.Header>
          <Card.Body>
            <Card.Title style={{ fontSize: '30px', textAlign: 'center' }}>
              {props.specificStats.in_Progress}</Card.Title>
          </Card.Body>
        </Card>
        {/* </div> */}
      </section>
      <section className="expenses__info">
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header style={{ fontSize: '20px', textAlign: 'center' }}>
              Total Expenses: January 2019 - December 2020</Card.Header>
            <Card.Body>
              <Card.Title style={{ fontSize: '40px', textAlign: 'center' }}>
                $12,432</Card.Title>
            </Card.Body>
          </Card>
      </section>
      <section className="graph__allProperties">
        <Card>
          <Card.Header>Total Maintenance Cost</Card.Header>
          <Card.Body>
            <Comparison_Chart ticketsOrganizedByProperty = {ticketsOrganizedByProperty} properties = {properties} />
          </Card.Body>
        </Card>

      </section>
      {/* </main> */}
    </>
  );
};
