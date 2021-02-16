import React from "react";
// import Button from "./Button";
import Comparison_Chart from "./Comparison_Chart";

export default function All_Property_Interface(props) {
  return (
    <main className="stats__view">
      <section className="ticket__info">
        <h2 className="Text--semi-bold">Total Unsolved Tickets:</h2>
        <h1 className="Text--big-bold">43</h1>
        <h2 className="Text--semi-bold">Pending:</h2>
        <h1 className="Text--big-bold">20</h1>
        <h2 className="Text--semi-bold">In Progress:</h2>
        <h1 className="Text--big-bold">23</h1>
      </section>
      <section className="expenses__info">
        <h2 className="Text--semi-bold">Total Expenses:</h2>
        <h1 className="Text--big-bold">$12,432</h1>
      </section>
      <Comparison_Chart />
    </main>
  );
}
