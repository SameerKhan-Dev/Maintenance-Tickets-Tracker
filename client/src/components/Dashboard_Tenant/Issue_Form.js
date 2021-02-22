import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MyVerticallyCenteredModal from "./tenantIssue_Modal";
import Spinner from "react-bootstrap/Spinner";
import { Button, Form, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import axios from "axios";
// import backgroundImg from "./Maintenance-Tickets-Tracker/client/public/images/backgroundImg.jpg";
import backgroundImg from "./backgroundImg.jpg";

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
    <Card className="bg-dark text-white">
      <Card.Img src="./backgroundImg.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    // <Container fluid="md">
    //     <Form onSubmit={(event) => event.preventDefault()}>
    //       <h2>42 Wallaby Way Toronto, ON M1P 3R9</h2>
    //       <Form.Group as={Col} controlId="formHorizontalEmail">
    //         {/* <h3>
    //       Please enter the maintenance requirement and select the type of
    //       maintenance:
    //     </h3> */}
    //         <Form.Label column sm={2}>
    //           Description:
    //         </Form.Label>
    //         <Col sm={5}>
    //           <Form.Control
    //             value={issue.description}
    //             name="description"
    //             onChange={handleDescriptionChange}
    //             description="description"
    //             type="text"
    //             placeholder="Pleas enter maintenance description..."
    //           />
    //         </Col>
    //       </Form.Group>

    //       <fieldset>
    //         <Form.Group as={Col}>
    //           <Form.Label as="legend" column sm={2}>
    //             Maintenance Type:
    //           </Form.Label>
    //           <Col sm={10}>
    //             <Form.Check
    //               type="radio"
    //               label="Plumbing"
    //               name="maintenance_type"
    //               id="plumbing"
    //               // value="plumbing"
    //               checked={issue.maintenance_type === "plumbing"}
    //               onChange={handleMaintenanceChange}
    //             />
    //             <Form.Check
    //               type="radio"
    //               label="Electrical"
    //               name="maintenance_type"
    //               id="electrical"
    //               // value="electrical"
    //               checked={issue.maintenance_type}
    //               onChange={handleMaintenanceChange}
    //             />
    //             <Form.Check
    //               type="radio"
    //               label="General Maintenance"
    //               name="maintenance_type"
    //               id="general maintenance"
    //               // value="general maintenance"
    //               checked={issue.maintenance_type === "general maintenance"}
    //               onChange={handleMaintenanceChange}
    //             />
    //           </Col>
    //         </Form.Group>
    //       </fieldset>

    //       <Form.Group as={Col}>
    //         <Col sm={{ span: 10, offset: 2 }}>
    //           <Button type="submit" onClick={onSubmit}>
    //             Submit maintenance request
    //           </Button>
    //         </Col>
    //       </Form.Group>
    //     </Form>
    //     <MyVerticallyCenteredModal show={showModal} onHide={handleShowModal} />
    // </Container>
  );
}
