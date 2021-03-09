import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { InputGroup, FormControl, Form, Button, Image } from "react-bootstrap";
import logo from "./MTrack_White.png";
import background from "./tools__logo.jpg";
import "./Register_Property.scss";

const axios = require("axios");

export default function Register_Property(props) {
  console.log("*** Inside Register Property Page: ", props.pm_id);
  const { pm_id } = props;
  const history = useHistory();

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

  console.log("*** InputsState = ", inputsState);

  const handlePropertyTypeChange = (event) => {
    const value = event.target.value;
    setInputsState((inputsState) => ({
      ...inputsState,
      propertyType: value,
    }));
  };

  const handlePropertyNameChange = (event) => {
    const value = event.target.value;
    setInputsState((inputsState) => ({
      ...inputsState,
      propertyName: value,
    }));
  };

  const handleAddressChange = (event) => {
    const value = event.target.value;
    setInputsState((inputsState) => ({
      ...inputsState,
      address: value,
    }));
  };

  const handleUnitChange = (event) => {
    const value = event.target.value;
    setInputsState((inputsState) => ({
      ...inputsState,
      unit: value,
    }));
  };

  const handleCityChange = (event) => {
    const value = event.target.value;
    setInputsState((inputsState) => ({
      ...inputsState,
      city: value,
    }));
  };

  const handleProvinceChange = (event) => {
    const value = event.target.value;
    setInputsState((inputsState) => ({
      ...inputsState,
      province: value,
    }));
  };

  const handlePostalCodeChange = (event) => {
    const value = event.target.value;
    setInputsState((inputsState) => ({
      ...inputsState,
      postalCode: value,
    }));
  };

  const goBack = () => {
    history.push("/dashboard-pm-stats");
  };

  const onSubmit = () => {
    const new_propertyType = inputsState.propertyType;
    const new_propertyName = inputsState.propertyName;
    const new_address = inputsState.address;
    const new_unit = inputsState.unit;
    const new_city = inputsState.city;
    const new_province = inputsState.province;
    const new_postalCode = inputsState.postalCode;
    const new_imagePath = inputsState.imagePath;

    return axios
      .post(`/register_property/new`, {
        property_manager_id: pm_id,
        name: new_propertyName,
        address: new_address,
        unit: new_unit,
        city: new_city,
        province: new_province,
        postal_code: new_postalCode,
        property_type: new_propertyType,
        imagePath: new_imagePath,
      })
      .then((response) => {
        console.log("***From inside onSubmit of Register Property: ", response);
        setInputsState((inputsState) => ({
          ...inputsState,
          propertyType: "",
          propertyName: "",
          address: "",
          unit: "",
          city: "",
          province: "",
          postalCode: "",
          imagePath: "",
        }));
      });
  };

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

        <h4 style={{ marginTop: 30 }}>Enter Property Information:</h4>

        <Form onSubmit={(event) => event.preventDefault()}>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label className="text__property-type">
              Select property type:
            </Form.Label>
            <Form.Control
              className="mb-4"
              as="select"
              value={inputsState.propertyType}
              name="propertyType"
              onChange={handlePropertyTypeChange}
            >
              <option></option>
              <option>Condominium/Apartment Building</option>
              <option>Individual Home</option>
            </Form.Control>
          </Form.Group>

          <InputGroup className="mb-4">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Property Name
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={inputsState.propertyName}
              name="propertyName"
              onChange={handlePropertyNameChange}
              type="text"
              placeholder="Enter property name"
            />
          </InputGroup>

          <InputGroup className="mb-4">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Address
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={inputsState.address}
              name="address"
              onChange={handleAddressChange}
              type="text"
              placeholder="Enter street address"
            />
          </InputGroup>

          <InputGroup className="mb-4">
            <InputGroup.Prepend>
              <InputGroup.Text>City</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={inputsState.city}
              name="city"
              onChange={handleCityChange}
              type="text"
              placeholder="Enter city name"
            />
          </InputGroup>

          <InputGroup className="mb-4">
            <InputGroup.Prepend>
              <InputGroup.Text className="text__prov-state">
                Province/State
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={inputsState.province}
              name="province"
              onChange={handleProvinceChange}
              type="text"
              placeholder="Enter province name"
            />
          </InputGroup>

          <InputGroup className="mb-4">
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroup-sizing-default">
                Postal Code
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={inputsState.postalCode}
              name="ostalCode"
              onChange={handlePostalCodeChange}
              type="text"
              placeholder="Enter postal code"
            />
          </InputGroup>

          {/* <Form className="mb-4">
            <Form.File
              size="sm"
              id="chooseImageUpload"
              label="Choose image to upload"
              custom
            />
          </Form> */}

          <Button
            className="float-right"
            onClick={onSubmit}
            variant="secondary"
            type="submit"
          >
            Save Property Information
          </Button>

          <Button
            className="float-left"
            onClick={goBack}
            variant="secondary"
            type="submit"
          >
            Go Back
          </Button>
        </Form>
      </section>
    </>
  );
}
