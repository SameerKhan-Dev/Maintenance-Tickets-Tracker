import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  InputGroup,
  FormControl,
  Form,
  Button,
  Image,
  Toast,
} from "react-bootstrap";
import logo from "./MTrack_White.png";
import background from "./tools__logo.jpg";
import "./Register_Property.scss";

const axios = require("axios");

export default function Register_Property(props) {
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

    propertyTypeError: "",
    propertyNameError: "",
    addressError: "",
    cityError: "",
    provinceError: "",
    postalCodeError: "",
  });

  const [show, setShow] = useState(false);
  const showToastAppear = () => {
    setShow(true);
  };

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

  const validate = () => {
    let propertyTypeError = "";
    let propertyNameError = "";
    let addressError = "";
    let cityError = "";
    let provinceError = "";
    let postalCodeError = "";

    if (!inputsState.propertyType) {
      propertyTypeError = "Property type cannot be blank";
    }

    if (!inputsState.propertyName) {
      propertyNameError = "Property name cannot be blank";
    }

    if (!inputsState.address) {
      addressError = "Address cannot be blank";
    }

    if (!inputsState.city) {
      cityError = "City cannot be blank";
    }

    if (!inputsState.province) {
      provinceError = "Province cannot be blank";
    }

    if (!inputsState.postalCode) {
      postalCodeError = "Postal code cannot be blank";
    }

    if (
      propertyTypeError ||
      propertyNameError ||
      addressError ||
      cityError ||
      provinceError ||
      postalCodeError
    ) {
      setInputsState({
        propertyTypeError,
        propertyNameError,
        addressError,
        cityError,
        provinceError,
        postalCodeError,
      });
      return false;
    }
    return true;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const new_propertyType = inputsState.propertyType;
    const new_propertyName = inputsState.propertyName;
    const new_address = inputsState.address;
    const new_unit = inputsState.unit;
    const new_city = inputsState.city;
    const new_province = inputsState.province;
    const new_postalCode = inputsState.postalCode;
    const new_imagePath = inputsState.imagePath;

    const isValid = validate();
    console.log("isValid = ", isValid);
    if (isValid) {
      console.log("inputsState = ", inputsState);
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
          console.log(
            "***From inside onSubmit of Register Property: ",
            response
          );
          showToastAppear();
          setInputsState((inputsState) => ({
            ...inputsState,
            propertyType: "",
            propertyName: "",
            address: "",
            city: "",
            province: "",
            postalCode: "",
            propertyTypeError: "",
            propertyNameError: "",
            addressError: "",
            cityError: "",
            provinceError: "",
            postalCodeError: "",
          }));
        });
    }
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

        <Form>
          <Form.Group controlId="formPropertyType">
            <Form.Label className="text__property-type">
              Select property type:
            </Form.Label>
            <Form.Control
              className="mb-3"
              as="select"
              value={inputsState.propertyType}
              name="propertyType"
              onChange={handlePropertyTypeChange}
            >
              <option></option>
              <option>Condominium/Apartment Building</option>
              <option>Individual Home</option>
            </Form.Control>
            <div style={{ fontSize: 19, color: "darkred" }}>
              {inputsState.propertyTypeError}
            </div>
          </Form.Group>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="formPropertyName">
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
          <div style={{ fontSize: 19, color: "darkred", marginBottom: 10 }}>
            {inputsState.propertyNameError}
          </div>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="formPropertyAddress">
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
          <div style={{ fontSize: 19, color: "darkred", marginBottom: 10 }}>
            {inputsState.addressError}
          </div>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="formPropertyCity">City</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={inputsState.city}
              name="city"
              onChange={handleCityChange}
              type="text"
              placeholder="Enter city name"
            />
          </InputGroup>
          <div style={{ fontSize: 19, color: "darkred", marginBottom: 10 }}>
            {inputsState.cityError}
          </div>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text
                id="formPropertyProvince"
                className="text__prov-state"
              >
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
          <div style={{ fontSize: 19, color: "darkred", marginBottom: 10 }}>
            {inputsState.provinceError}
          </div>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="formPropertyPostalCode">
                Postal Code
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={inputsState.postalCode}
              name="postalCode"
              onChange={handlePostalCodeChange}
              type="text"
              placeholder="Enter postal code"
            />
          </InputGroup>
          <div style={{ fontSize: 19, color: "darkred", marginBottom: 10 }}>
            {inputsState.postalCodeError}
          </div>

          <Toast
            style={{
              position: "absolute",
              bottom: 10,
              right: 0,
              width: 300,
              backgroundColor: "#EF8633",
            }}
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="round mr-2"
                alt=""
              />
              <strong className="mr-auto">Notification</strong>
              <small>just now</small>
            </Toast.Header>
            <Toast.Body>{`New property: ${inputsState.propertyName} has been saved to database!`}</Toast.Body>
          </Toast>

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
