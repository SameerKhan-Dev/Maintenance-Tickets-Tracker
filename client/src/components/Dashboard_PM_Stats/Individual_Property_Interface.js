import React from "react";
import Button from "./Button";
import Pie_Chart from "./Pie_Chart";
import Bar_Chart from "./Bar_Chart";

export default function Individual_Property_Interface(props) {
  
  //const {specificStats} = props; 

  return (
    <main className="stats__view">
      <section className="ticket__info">
        <h1 className="Text--address-header">
          42 Wallaby Way Toronto, ON M1P 3R9
        </h1>
        <Button onClick={props.onClick}>View Tickets</Button>
        <h2 className="Text--semi-bold">Total Unsolved Tickets:</h2>
        <h1 className="Text--big-bold">{props.specificStats.totalUnsolved}</h1>
        <h2 className="Text--semi-bold">Pending:</h2>
        <h1 className="Text--big-bold">{props.specificStats.pending}</h1>
        <h2 className="Text--semi-bold">In Progress:</h2>
        <h1 className="Text--big-bold">{props.specificStats.in_Progress}</h1>
      </section>
      <section className="expenses__info">
        <h2 className="Text--semi-bold">
          Total Expenses: January 2019 - December 2020
        </h2>
        <h1 className="Text--big-bold">$12,432</h1>
        <h2 className="Text--semi-bold">
          Total Expenses: January 2020 - Current
        </h2>
        <h1 className="Text--big-bold">$3,532</h1>
      </section>
      <Pie_Chart />
      <Bar_Chart />
    </main>
  );
}


