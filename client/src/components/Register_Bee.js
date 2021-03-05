import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Col, Row, Button, Image } from "react-bootstrap";
import logo from "./MTrack_White.png";
import background from "./tools__logo.jpg";

export default function Register(props) {
  const history = useHistory();

  return (
    <Form>
      <Form.Group as={Col} controlId="formVerticalFirstname">
        <Form.Label column sm={2}>
          Firstname:
        </Form.Label>
        <Col sm={12}>
          <Form.Control type="text" placeholder="Firstname" />
        </Col>
      </Form.Group>

      <Form.Group as={Col} controlId="formVerticalLastname">
        <Form.Label column sm={2}>
          Lastname:
        </Form.Label>
        <Col sm={12}>
          <Form.Control type="text" placeholder="Lastname" />
        </Col>
      </Form.Group>

      <Form.Group as={Col} controlId="formVerticalEmail">
        <Form.Label column sm={2}>
          Email:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Col} controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>

      <Form.Group as={Col} controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Confirm Password:
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Col>
      </Form.Group>

      <fieldset>
        <Form.Group as={Row}>
          <Form.Label as="legend" column sm={8}>
            Please select a user role:
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Property Manager"
              name="role_id"
              id="1"
            />
            <Form.Check type="radio" label="Tenant" name="role_id" id="2" />
            <Form.Check type="radio" label="Plumber" name="role_id" id="3" />
            <Form.Check
              type="radio"
              label="Electrician"
              name="role_id"
              id="4"
            />
            <Form.Check
              type="radio"
              label="General Maintenance"
              name="role_id"
              id="5"
            />
          </Col>
        </Form.Group>
      </fieldset>
      <Form.Group as={Row} controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Remember me" />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}
