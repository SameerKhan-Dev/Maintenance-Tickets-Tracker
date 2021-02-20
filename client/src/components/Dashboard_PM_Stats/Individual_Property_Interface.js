import React from "react";
import Pie_Chart from "./Pie_Chart";
import Bar_Chart from "./Bar_Chart";

import { Card, Button } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import "./Individual_Property_Interface.scss"

export default function Individual_Property_Interface(props) {

  //const {specificStats} = props; 

  return (
    <main className="stats__view">
      <section className="address__title">
        {/* <h1 className="Text--address-header"> */}
          <Card className="bg-dark text-white">
            <Card.Img src="holder.js/100px270" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        {/* </h1> */}
      </section>
      <section className="ticket__info">
        {/* <div class="unsolved"> */}
        <Card
          bg={'danger'}
          text={'danger' === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header style={{ fontSize: '20px', textAlign: 'center' }}>
            Total Unsolved Tickets</Card.Header>
          <Card.Body>
            <Card.Title style={{ fontSize: '40px', textAlign: 'center' }}>
              {props.specificStats.totalUnsolved}</Card.Title>
          </Card.Body>
        </Card>

        {/* <div class="pending"> */}
        <Card
          bg={'warning'}
          text={'warning' === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header style={{ fontSize: '20px', textAlign: 'center' }}>
            Toal Pending Tickets:</Card.Header>
          <Card.Body>
            <Card.Title style={{ fontSize: '40px', textAlign: 'center' }}>
              {props.specificStats.pending}</Card.Title>
          </Card.Body>
        </Card>

        {/* <div class="progress"> */}
        <Card
          bg={'success'}
          text={'success' === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header style={{ fontSize: '20px', textAlign: 'center' }}>
            Tickets In Progress:</Card.Header>
          <Card.Body>
            <Card.Title style={{ fontSize: '40px', textAlign: 'center' }}>
              {props.specificStats.in_Progress}</Card.Title>
          </Card.Body>
        </Card>


        {/* <Button variant="outline-info">View Tickets</Button>{' '} */}
      </section>
      <section className="expenses__info">
        <Card
          bg={'primary'}
          text={'primary' === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header style={{ fontSize: '20px', textAlign: 'center' }}>
            Total Expenses: January 2019 - December 2020</Card.Header>
          <Card.Body>
            <Card.Title style={{ fontSize: '40px', textAlign: 'center' }}>
              $12,432</Card.Title>
          </Card.Body>
        </Card>
        <Card
          bg={'primary'}
          text={'primary' === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header style={{ fontSize: '20px', textAlign: 'center' }}>
            Total Expenses: January 2020 - Current</Card.Header>
          <Card.Body>
            <Card.Title style={{ fontSize: '40px', textAlign: 'center' }}>
              $3,532</Card.Title>
          </Card.Body>
        </Card>
      </section>
      <section className="graph__allProperties">
        <Card>
          <Card.Header>Percentage of Maintenance Types</Card.Header>
          <Card.Body>
            <Pie_Chart specificTicketsforPropertyPie={props.ticketsForSelectedProperty} />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Maintenance Cost: Estimates Cost Vs. Actual Cost</Card.Header>
          <Card.Header>For All Properties</Card.Header>
          <Card.Body>
            <Bar_Chart specificTicketsforProperty={props.ticketsForSelectedProperty} />
          </Card.Body>
        </Card>
      </section>
    </main>
  );
}


