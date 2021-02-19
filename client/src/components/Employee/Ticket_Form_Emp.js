import React, { useState } from "react";

export default function Ticket_Form_Emp(props) {

  ////////////// GET ACTUAL DATA LATER AND SET AS PROPS.////////////////
  const ticket_id = 9;

  const [finalCost, setFinalCost] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleFinalCostChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setFinalCost((finalCost) => ({
      ...finalCost,
      finalCost: value
    }));
  };

  const onSubmit = () => {
  //   //When employee clicks submit button, it should ask for confirmation
  //   return axios
  //     .put(`/tickets/resolved/${ticket_id}`, {
  //       ticket_id: ticket_id,
  //       actual_cost: final_cost
  //     })
  //     .then((response) => {
  //       console.log("RESPONSE: ", response.data);
  //         history.push("/dashboard-employee");
  //       //   setIssue((issue) => ({
  //       // ...issue,
  //       // ////////// WILL LATER CHANGE LOGIC TO RESET STATE WHEN CLOSE MODAL ////////
  //       // description: "",
  //       // maintenance_type: "general maintenance"
  //     }));
  //   });
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
              onChange={handleFinalCostChange}
              finalCost="finalCost"
              type="text"
              placeholder="Final Cost"
            />
          </section>
          <section className="ticket__actions">
            <button onClick={onSubmit}>Maintenance Complete</button>
          </section>
        </form>
      </section>
      // add popup modal?
      {showModal && <div>Modal</div>}
    </section>
  );
}
