import React, { useState } from "react";

export default function Ticket_Form_Emp(props) {
  const [finalCost, setFinalCost] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const submit = () => {
    //When employee clicks submit button, it should ask for confirmation
  };

  return (
    <section className="ticket__card-form-section">
      <section className="ticket__card-form">
        <form onSubmit={(event) => event.preventDefault()}>
          <section className="ticket__card-final-cost">
            <h1>Please enter final cost:</h1>
            <label>Final Cost: $</label>
            <input
              className="ticket__final-cost"
              value={finalCost.actual_cost}
              name="finalCost"
              onChange={(event) => setFinalCost(event.target.value)}
              finalCost="finalCost"
              type="text"
              placeholder="Final Cost"
            />
          </section>
          <section className="ticket__actions">
            <button onClick={submit}>Maintenance Complete</button>
          </section>
        </form>
      </section>
      // add popup modal?
      {showModal && <div>Modal</div>}
    </section>
  );
}
