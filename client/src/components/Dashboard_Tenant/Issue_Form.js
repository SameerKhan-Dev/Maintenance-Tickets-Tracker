import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MyVerticallyCenteredModal from "./tenantIssue_Modal";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

export default function Issue_Form(props) {
  const history = useHistory();

  ////////////// GET ACTUAL DATA LATER AND SET AS PROPS.////////////////
  const property_id = 11;
  const creator_id = 7;

  const [issue, setIssue] = useState({
    description: "",
    maintenance_type: "general maintenance",
  });
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleDescriptionChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setIssue((issue) => ({
      ...issue,
      description: value,
    }));
  };

  const handleMaintenanceChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setIssue((issue) => ({
      ...issue,
      maintenance_type: value,
    }));
  };

  const onSubmit = () => {
    let maintenance_type_id = 0;
    if (issue.maintenance_type === "plumbing") {
      maintenance_type_id = 1;
    } else if (issue.maintenance_type === "electrical") {
      maintenance_type_id = 2;
    } else {
      maintenance_type_id = 3;
    }
    handleShowModal();

    return axios
      .post(`/tickets/new`, {
        property_id: property_id,
        creator_id: creator_id,
        maintenance_type_id: maintenance_type_id,
        description: issue.description,
      })
      .then((response) => {
        console.log("RESPONSE: ", response.data);
        history.push("/dashboard-tenant");
        setIssue((issue) => ({
          ...issue,
          description: "",
          maintenance_type: "general maintenance",
        }));
      });
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
              onChange={handleDescriptionChange}
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
              onChange={handleMaintenanceChange}
            />
            Plumbing
          </label>
          <label>
            <input
              type="radio"
              name="maintenance_type"
              value="electrical"
              checked={issue.maintenance_type === "electrical"}
              onChange={handleMaintenanceChange}
            />
            Electrical
          </label>
          <label>
            <input
              type="radio"
              name="maintenance_type"
              value="general maintenance"
              checked={issue.maintenance_type === "general maintenance"}
              onChange={handleMaintenanceChange}
            />
            General Maintenance
          </label>
          <section className="issue__actions">
            {/* <button onClick={upload}>Upload Photos</button> */}
            <button onClick={onSubmit}>Submit Maintenance Request</button>
          </section>
        </form>
      </section>
      <MyVerticallyCenteredModal show={showModal} onHide={handleShowModal} />
    </section>
  );
}
