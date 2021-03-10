import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Form,
  Col,
  Row,
  Button,
  Image,
  Container,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import logo from "./MTrack_White.png";
import background from "./tools__logo.jpg";
import "./Register_PM.scss";

const axios = require("axios");

export default function Register_PM(props) {
  const history = useHistory();

  const [inputsState, setInputsState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    role_id: 1,

    firstnameError: "",
    lastnameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const handleFirstnameChange = (event) => {
    const value = event.target.value;
    setInputsState((inputsState) => ({
      ...inputsState,
      firstname: value,
    }));
  };

  const handleLastnameChange = (event) => {
    const value = event.target.value;
    setInputsState((inputsState) => ({
      ...inputsState,
      lastname: value,
    }));
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setInputsState((inputsState) => ({
      ...inputsState,
      email: value,
    }));
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setInputsState((inputsState) => ({
      ...inputsState,
      password: value,
    }));
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setInputsState((inputsState) => ({
      ...inputsState,
      confirmPassword: value,
    }));
  };

  const validate = () => {
    let firstnameError = "";
    let lastnameError = "";
    let emailError = "";
    let passwordError = "";
    let confirmPasswordError = "";

    if (!inputsState.firstname) {
      firstnameError = "Firstname cannot be blank";
    }

    if (!inputsState.lastname) {
      lastnameError = "Lastname cannot be blank";
    }

    if (!inputsState.email) {
      emailError = "Email cannot be blank";
    } else if (!inputsState.email.includes("@")) {
      emailError = "Invalid email address";
    }

    if (!inputsState.password) {
      passwordError = "Password cannot be blank";
    }

    if (!inputsState.confirmPassword) {
      confirmPasswordError = "Confirm Password cannot be blank";
    } else if (inputsState.password !== inputsState.confirmPassword) {
      confirmPasswordError =
        "Password confirmation does not match the password!";
    }

    if (
      firstnameError ||
      lastnameError ||
      emailError ||
      passwordError ||
      confirmPasswordError
    ) {
      setInputsState({
        firstnameError,
        lastnameError,
        emailError,
        passwordError,
        confirmPasswordError,
      });
      return false;
    }
    return true;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const firstname = inputsState.firstname;
    const lastname = inputsState.lastname;
    const email = inputsState.email;
    const password = inputsState.password;
    const role_id = inputsState.role_id;

    const isValid = validate();

    if (isValid) {
      return axios
        .post(`/register_user/new`, {
          firstname,
          lastname,
          email,
          password,
          role_id,
        })
        .then((response) => {
          // console.log("***From response of onSubmit of Register PM: ", response);
          setInputsState((inputsState) => ({
            ...inputsState,
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassword: "",

            firstnameError: "",
            lastnameError: "",
            emailError: "",
            passwordError: "",
            confirmPasswordError: "",
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

      <Container className="pm-register-form__container">
        <div>
          <img className="logo" src={logo}></img>
        </div>
        <h1 className="pm-register__title">Register as Property Manager!</h1>
        <h5 style={{ marginTop: 30 }}>Enter information to create account:</h5>

        <Form
          className="pm-resiger__form"
          onSubmit={(event) => event.preventDefault()}
        >
          {/* <Form.Group as={Col} controlId="selectPropertyAddress">
            <Form.Label column sm={10} className="text__select-address">
              Select property address:
            </Form.Label>
            <Col sm={10}>
              <Form.Control as="select">
                <option>3116 Brando Gateway</option>
                <option>536 Amanda Loaf</option>
                <option>12 University St</option>
              </Form.Control>
            </Col>
          </Form.Group> */}

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="formFirstname">Firstname</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={inputsState.firstname}
              name="firstname"
              onChange={handleFirstnameChange}
              type="text"
              placeholder="Enter your firstname"
            />
          </InputGroup>
          <div style={{ fontSize: 19, color: "darkred", marginBottom: 10 }}>
            {inputsState.firstnameError}
          </div>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="formLastname">Lastname</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={inputsState.lastname}
              name="lastname"
              onChange={handleLastnameChange}
              type="text"
              placeholder="Enter your lastname"
            />
          </InputGroup>
          <div style={{ fontSize: 19, color: "darkred", marginBottom: 10 }}>
            {inputsState.lastnameError}
          </div>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="formEmail">Email Address</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={inputsState.email}
              name="email"
              onChange={handleEmailChange}
              type="email"
              placeholder="Enter your email address"
            />
          </InputGroup>
          <div style={{ fontSize: 19, color: "darkred", marginBottom: 10 }}>
            {inputsState.emailError}
          </div>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="formPassword">Password</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={inputsState.Password}
              name="password"
              onChange={handlePasswordChange}
              type="password"
              placeholder="Enter your password"
            />
          </InputGroup>
          <div style={{ fontSize: 19, color: "darkred", marginBottom: 10 }}>
            {inputsState.passwordError}
          </div>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="formFPasswordConfirm">
                Confirm Password
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={inputsState.confirmPassword}
              name="confirmPassword"
              onChange={handleConfirmPasswordChange}
              type="password"
              placeholder="Enter confirm password"
            />
          </InputGroup>
          <div style={{ fontSize: 19, color: "darkred", marginBottom: 10 }}>
            {inputsState.confirmPasswordError}
          </div>

          <Button
            className="float-right"
            onClick={onSubmit}
            variant="secondary"
            type="submit"
          >
            Create Account
          </Button>
        </Form>
      </Container>
    </>
  );
}
