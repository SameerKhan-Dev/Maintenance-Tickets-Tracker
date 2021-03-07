import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { InputGroup, FormControl, Form, Button, Image } from "react-bootstrap";
import logo from "./MTrack_White.png";
import background from "./tools__logo.jpg";
import "./Register_Property.scss";

export default function Register_Property(props) {
  return (
    <>
      <div className="background-img">
        <Image
          src={background}
          alt="background img"
          fluid
          className="img__bkg"
        />
      </div>

      <section className="property-register__form">
        <div>
          <img className="logo" src={logo}></img>
        </div>
        <h1 className="property-register__title">Register your property!</h1>
        {/* <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>First and last name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl />
          <FormControl />
        </InputGroup> */}

        <h5>Enter Property Information:</h5>
        <Form inSubmit={(event) => event.preventDefault()}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label className="text__property-type">
              Select property type:
            </Form.Label>
            <Form.Control as="select">
              <option>Condominium/Apartment Building</option>
              <option>Individual Home</option>
            </Form.Control>
          </Form.Group>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Property Name
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Address
              </InputGroup.Text>
              <FormControl className="mr-4"
              // aria-label="Default"
              // aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup.Prepend>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Unit#
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            // aria-label="Default"
            // aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>

          {/* <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Unit#
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup> */}

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>City</InputGroup.Text>
              {/* <FormControl /> */}
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text className="text__prov-state">
                Province/State
              </InputGroup.Text>
              {/* <FormControl /> */}
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Postal Code
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>

          <Button
            className="float-right"
            // onClick={onPropertyRegisterSubmit}
            variant="secondary"
            type="submit"
          >
            Save Property Information
          </Button>
        </Form>
      </section>
    </>
  );
}
