import React from "react";
import Pie_Chart from "./Pie_Chart";
import Bar_Chart from "./Bar_Chart";

import prop1 from "./prop1.jpg";
import prop2 from "./prop2.jpg";
import prop3 from "./prop3.jpg";
import money from "./money_logo.png";

import { Card, Button, Badge } from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
import "./Individual_Property_Interface.scss"

export default function Individual_Property_Interface(props) {

  //const {specificStats} = props; 

  return (
    <main className="stats__view">
      <section className="top">
        <section className="address__title">
          <Card className="bg-dark text-white">
            <Card.Img src={prop1} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Condominium</Card.Title>
              <Card.Text>
                1 Blue Jays Way Toronto, ON
                </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </section>
        <section className="property__cards__ind">
          <Card>
            <Card.Img variant="top" src={money} style={{ paddingLeft: '90px', paddingRight: '90px', paddingTop: '30px', paddingBottom: '5px' }} />
            <Card.Body>
              <Card.Text>
                Total Expenses: January 2019 - December 2020
            </Card.Text>
              <Card.Title style={{ fontSize: '50px', textAlign: 'center', color: '#3FA1DB' }} >$12, 432</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={money} style={{ paddingLeft: '90px', paddingRight: '90px', paddingTop: '30px', paddingBottom: '5px' }} />
            <Card.Body>
              <Card.Text>
                Total Expenses: January 2020 - Current
            </Card.Text>
              <Card.Title style={{ fontSize: '50px', textAlign: 'center', color: '#3FA1DB' }} >$3, 532</Card.Title>
            </Card.Body>
          </Card>
        </section>
      </section>
      <section className="middle">
        <section className="ticket__info__specific">
          <Button variant="danger" size="lg">
            Unresolved Tickets:  <Badge style={{fontSize: '25px'}}variant="light">{props.specificStats.totalUnsolved}</Badge>
            <span className="sr-only">unread messages</span>
          </Button>
          <Button variant="warning" size="lg">
            Pending Tickets:  <Badge style={{fontSize: '25px'}}variant="light">{props.specificStats.pending}</Badge>
            <span className="sr-only">unread messages</span>
          </Button>
          <Button variant="success" size="lg">
            In Progress:  <Badge style={{fontSize: '25px'}}variant="light">{props.specificStats.in_Progress}</Badge>
            <span className="sr-only">unread messages</span>
          </Button>
        </section>
      </section>
      <section className="prop__data">
        <section className="left">
          <section className="graph_cost">
            <Card>
              <Card.Header>Maintenance Cost: Estimates Cost Vs. Actual Cost</Card.Header>
              <Card.Body>
                <Bar_Chart specificTicketsforProperty={props.ticketsForSelectedProperty} />
              </Card.Body>
            </Card>
          </section>
        </section>
        <section className="right">
          <section className="graph__pie">
              <Card>
                <Card.Header>Percentage of Maintenance Types</Card.Header>
                <Card.Body>
                  <Pie_Chart specificTicketsforPropertyPie={props.ticketsForSelectedProperty} />
                </Card.Body>
              </Card>
            </section>
        </section>
      </section>
    </main>

  );
}


