import React from "react";

import Comparison_Chart from "./Comparison_Chart";
import { Card } from 'react-bootstrap';
import "./All_Property_Interface.scss"

export default function All_Property_Interface(props) {

  //const {specificStats} = props; 
  console.log("This is props:")
  console.log(props);

  return (
    <>
    {/* <main className="stats__view">
      <section className="ticket__info">
        <h2 className="Text--semi-bold">Total Unsolved Tickets:</h2>
        <h1 className="Text--big-bold">{props.specificStats.totalUnsolved}</h1>
        <h2 className="Text--semi-bold">Pending:</h2>
        <h1 className="Text--big-bold">{props.specificStats.pending}</h1>
        <h2 className="Text--semi-bold">In Progress:</h2>
        <h1 className="Text--big-bold">{props.specificStats.in_Progress}</h1>
      </section>
      <section className="expenses__info">
        <h2 className="Text--semi-bold">Total Expenses:</h2>
        <h1 className="Text--big-bold">$12,432</h1>
      </section>
      <Comparison_Chart />
    </main> */}

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
        <Card.Header style={{ fontSize: '30px', textAlign: 'center' }}>
          Total Unsolved Tickets</Card.Header>
        <Card.Body>
          <Card.Title style={{ fontSize: '50px', textAlign: 'center' }}>
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
        <Card.Header style={{ fontSize: '30px', textAlign: 'center' }}>
          Pending Tickets:</Card.Header>
        <Card.Body>
          <Card.Title style={{ fontSize: '50px', textAlign: 'center' }}>
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
        <Card.Header style={{ fontSize: '30px', textAlign: 'center' }}>
          Tickets In Progress:</Card.Header>
        <Card.Body>
          <Card.Title style={{ fontSize: '50px', textAlign: 'center' }}>
          {props.specificStats.in_Progress}</Card.Title>
        </Card.Body>
      </Card>
      {/* </div> */}
    </section>
    <section className="expenses__info">
      <Card
        bg={'primary'}
        text={'primary' === 'light' ? 'dark' : 'white'}
        style={{ width: '18rem' }}
        className="mb-2"
      >
        <Card.Header style={{ fontSize: '30px', textAlign: 'center' }}>
          Total Expenses:</Card.Header>
        <Card.Body>
          <Card.Title style={{ fontSize: '50px', textAlign: 'center' }}>
          $12,432</Card.Title>
        </Card.Body>
      </Card>
    </section>
    <section className="graph__allProperties">
      <Comparison_Chart/>
    </section>
    {/* </main> */}
    </>
  );
};
