import React, { useState } from "react";

export default function Issue_Form(props) {
  const [issue, setIssue] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setIssue((issue) => ({
      ...issue,
      [name]: value,
    }));
  };

  // console.log("name = ", issue.description);
  const submit = (description) => {
    if (description) {
      const description = {
        description: description,
        issue,
      };
      // Modal should popup. Set up transition?
    }
  };

  return (
    <section className="issue__form">
      <section className="issue__maintenance-type">
        <form onSubmit={(event) => event.preventDefault()}>
          <section className="issue__description">
            <h1>Please enter description for maintenance request:</h1>
            <input
              className="issue__create-input"
              value={issue.description}
              name="description"
              onChange={handleInputChange}
              description="description"
              type="text"
              placeholder="Enter description..."
            />
          </section>
          <h1>Please select a maintenance type:</h1>
          <label>
            <input
              type="radio"
              name="maintenance_type"
              value="plumbing"
              checked={issue.maintenance_type === "plumbing"}
              onChange={handleInputChange}
            />
            Plumbing
          </label>
          <label>
            <input
              type="radio"
              name="maintenance_type"
              value="electrical"
              checked={issue.maintenance_type === "electrical"}
              onChange={handleInputChange}
            />
            Electrical
          </label>
          <label>
            <input
              type="radio"
              name="maintenance_type"
              value="general maintenance"
              checked={issue.maintenance_type === "general maintenance"}
              onChange={handleInputChange}
            />
            General Maintenance
          </label>
          <section className="issue__actions">
            {/* <button onClick={upload}>Upload Photos</button> */}
            <button onClick={submit}>Submit Maintenance Request</button>
          </section>
        </form>
      </section>
      {/* add popup modal */}
      {showModal && <div>Modal</div>}
    </section>
  );
}
