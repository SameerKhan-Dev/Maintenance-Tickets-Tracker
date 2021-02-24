import React from "react";

import Comparison_Chart from "./Comparison_Chart";
import { Card, Button, Badge, CardDeck } from 'react-bootstrap';
import "./All_Property_Interface.scss";
import money from "./money_logo.png";
import prop1 from "./prop1.jpg";
import prop2 from "./prop2.jpg";
import prop3 from "./prop3.jpg";
import progress from "./progress.jpg";
import pending from "./pending.png";
import unresolved from "./unresolved.jpg";

export default function All_Property_Interface(props) {
  const { ticketsOrganizedByProperty, properties, tickets} = props;

  //const {specificStats} = props; 
  console.log("This is props:")
  console.log(props);
  
  const properties2 = [
    {
      id: 11,
      address: '3116 Brando Gateway'
    },
    {
      id: 12,
      address: '536 Amanda Loaf'
    },
    {
      id: 13,
      address: '12 University St.'
    }
  ];

  const getTotalCosts = function (tickets) {

    let totalActualCosts = 0;
    
    for (let ticket of tickets) {
      if(ticket.ticket_status_id === 3){
        totalActualCosts += ticket.actual_cost;
      }
    }
    return totalActualCosts;
  }
  let totalActualCosts = getTotalCosts(tickets); 

  return (
    <>
      {/* Total Unsolved */}
      {/* <main class="ticket-cards"> */}
      <section className="all__stats">
        <section className="property__images">
          <CardDeck>
            <Card>
              <Card.Img variant="top" src={prop1} />
              <Card.Body>
                <Card.Title>{properties2[0].address}</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={prop2} />
              <Card.Body>
                <Card.Title>{properties2[1].address}</Card.Title>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={prop3} />
              <Card.Body>
                <Card.Title>{properties2[2].address}</Card.Title>
              </Card.Body>
            </Card>
          </CardDeck>
        </section>
        <section className="ticket__info__all">
          <Button variant="danger" size="lg">
            Unresolved Tickets:  <Badge style={{fontSize: '25px'}} variant="light">{props.specificStats.totalUnsolved}</Badge>
            <span className="sr-only">unread messages</span>
          </Button>
          <Button variant="warning" size="lg">
            Pending Tickets:  <Badge style={{fontSize: '25px'}} variant="light">{props.specificStats.pending}</Badge>
            <span className="sr-only">unread messages</span>
          </Button>
          <Button variant="success" size="lg">
            In Progress:  <Badge style={{fontSize: '25px'}} variant="light">{props.specificStats.in_Progress}</Badge>
            <span className="sr-only">unread messages</span>
          </Button>
        </section>
        <section className="card__graph">
          <section className="property__cards">
            <Card>
              <Card.Img variant="top" src={money} style={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '30px', paddingBottom: '5px' }} />
              <Card.Body>
                <Card.Text>
                  Total Maintenance Expenses
              </Card.Text>
                <Card.Title style={{ fontSize: '50px', textAlign: 'center', color: '#3FA1DB' }} >${totalActualCosts}</Card.Title>
              </Card.Body>
            </Card>
          </section>
          <section className="graph__comparison">
            <Card>
              <Card.Header>Total Maintenance Cost</Card.Header>
              <Card.Body>
                <Comparison_Chart ticketsOrganizedByProperty={ticketsOrganizedByProperty} properties={properties} />
              </Card.Body>
            </Card>
          </section>
        </section>
      </section>
    </>
  );
}
