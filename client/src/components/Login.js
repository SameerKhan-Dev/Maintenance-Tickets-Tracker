import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const axios = require("axios");

export default function Login(props) {
  const history = useHistory(); 

  const [inputsState, setInputsState] = useState({
    emailInput: "",
    passwordInput: "",
  });

  // Handle input changing of state on the login form
  const onFormChange = function (inputType, newValue) {
    if (inputType === "email") {
      setInputsState({
        ...inputsState,
        emailInput: newValue,
      });
    }

    if (inputType === "password") {
      setInputsState({
        ...inputsState,
        passwordInput: newValue,
      });
    }
  };

  //  1 ('propertyManager'),
  //  2 ('tenant'),
  //  3 ('plumber'),
  //  4 ('electrician'),
  //  5 ('general-maintenance')

  const getPathForRole = ((userRole) => {
    const paths = {
      1: "/dashboard-pm-stats",
      2: "/dashboard-tenant",
      3: "/dashboard-employee",
      4: "/dashboard-employee",
      5: "/dashboard-employee"
    }

    return paths[userRole] || "/login";
  });
// *******************
  const onLoginSubmit = () => {
    const currentEmail = inputsState.emailInput;
    const currentPassword = inputsState.passwordInput;
    console.log("currentEmail: ", currentEmail);
    console.log("currentPassword: ", currentPassword);
    console.log("Button submitted");

    return axios
      .post(`/login`, {
        email: currentEmail,
        password: currentPassword,
      })
      .then((response) => {
        console.log("RESPONSE: ", response.data);
        if (response.data) {
          props.setLoginUser((prev) => ({
            ...prev, 
            loggedIn: true, 
            userEmail: response.data.email, 
            userRole: response.data.role_id 
          }));
          history.push(getPathForRole(response.data.role_id));
        }
      });
  };
// **************************
  return (
    <>
      <h1> Hello from "/login" Page</h1>
      <form onSubmit={(event) => event.preventDefault()}>
        <section className="issue__description">
          <h1>Please enter email:</h1>
          <input
            className="issue__create-input"
            value={inputsState.emailInput}
            name="email"
            onChange={(event) =>
              onFormChange("email", event.target.value)
            }
            description="description"
            type="email"
            placeholder="Enter email"
          />
        </section>
        <h1>Please enter password:</h1>
        <input
          type="password"
          name="password"
          value={inputsState.passwordInput}
          onChange={(event) =>
            onFormChange("password", event.target.value)
          }
        />
        <section className="issue__actions">
          {/* <button onClick={upload}>Upload Photos</button> */}
          {/* <button onClick={submit}>Submit</button> */}
          <button onClick={onLoginSubmit}>Empty Submit</button>
        </section>
      </form>
    </>
  )
}