import React from "react";

export default function Issue_Form(props) {

  
  return (
    <main className="issue__form">
      <section className="issue__maintenance-type">
        <form onSubmit={(event) => event.preventDefault()}>
          <section className="issue__description">
            <h1>Please enter description for maintenance request:</h1>
            <input
              className="issue_create-input"
              description="description"
              type="text"
              placeholder="Enter description..."
            />
          </section>
          <h1>Please select a maintenance type:</h1>
          <label>
            <input
              type="radio"
              value="plumbing"
              // onChange={(event) => setMaintenanceType(event.target.value)}
            />
            Plumbing
          </label>
          <label>
            <input
              type="radio"
              value="electrical"
              // onChange={(event) => setMaintenanceType(event.target.value)}
            />
            Electrical
          </label>
          <label>
            <input
              type="radio"
              value="general maintenance"
              checked={true}
              // onChange={(event) => setMaintenanceType(event.target.value)}
            />
            General Maintenance
          </label>
          <section className="issue__actions">
              {/* <button onClick={upload}>Upload Photos</button>
              <button onClick={submit}>Submit Maintenance Request</button> */}
          </section>
        </form>
      </section>
    </main>
  );
}
