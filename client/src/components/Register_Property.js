import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { InputGroup, FormControl, Form, Button, Image } from "react-bootstrap";
import logo from "./MTrack_White.png";
import background from "./tools__logo.jpg";
import "./Register_Property.scss";

export default function Register_Property(props) {
  const [inputsState, setInputsState] = useState({
    pmId: "",
    propertyType: "",
    propertyName: "",
    address: "",
    unit: "",
    city: "",
    province: "",
    postalCode: "",
    imagePath: "",
  });

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
            <Form.Control as="select" size="sm">
              <option>Condominium/Apartment Building</option>
              <option>Individual Home</option>
            </Form.Control>
          </Form.Group>

          <InputGroup className="mb-3" size="sm">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Property Name
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={inputsState.propertyName}
              name="propertyName"
              // onChange={(event) =>
              //   onFormChange("propertyName", event.target.value)
              // }
              type="text"
              placeholder="Enter property name"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>

          <InputGroup size="sm">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default" className="mb-3">
                Address
              </InputGroup.Text>
              <FormControl
                className="mr-3"
                size="sm"
                // aria-label="Default"
                // aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup.Prepend>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default" className="mb-3">
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

          <InputGroup className="mb-3" size="sm">
            <InputGroup.Prepend>
              <InputGroup.Text>City</InputGroup.Text>
              {/* <FormControl /> */}
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>

          <InputGroup className="mb-3" size="sm">
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

          <InputGroup className="mb-3" size="sm">
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

          <Form className="mb-3">
            <Form.File
              size="sm"
              id="chooseImageUpload"
              label="Choose image upload"
              custom
            />
          </Form>

          {/* <div className="input-group mb-3">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="chooseImageUpload"
              ></input>
              <label className="custom-file-label" for="chooseImageUpload">
                Choose file
              </label>
            </div>
            <div className="input-group-append">
              <button className="btn btn-secondary" type="button">
                Upload
              </button>
            </div>
          </div> */}

          <Button
            className="float-right"
            // onClick={onPropertyRegisterSubmit}
            variant="secondary"
            type="submit"
            size="sm"
          >
            Save Property Information
          </Button>
        </Form>
      </section>
    </>
  );
}
