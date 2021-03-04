import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { InputGroup, FormControl, Form } from "react-bootstrap";
import "./Register.scss"

export default function Register(props) {
  return (
    <>
      <section className="register__form">
        <h1>Register your property!</h1>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>First and last name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl />
          <FormControl />
        </InputGroup>

        <h3>Enter Property Information:</h3>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Select property type:</Form.Label>
          <Form.Control as="select">
            <option>Condominium/Apartment Building</option>
            <option>Individual Home</option>
          </Form.Control>
        </Form.Group>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">Street Address</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">Postal Code</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>City</InputGroup.Text>
            <FormControl />
            <InputGroup.Text>Province/State</InputGroup.Text>
            <FormControl />
          </InputGroup.Prepend>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default">Number of Units</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
      </section>
    </>
  )
}