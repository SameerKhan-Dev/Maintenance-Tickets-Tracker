import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Col, Row, Button, Image, Container } from "react-bootstrap";
import logo from "./MTrack_White.png";
import background from "./tools__logo.jpg";
import "./Register_User.scss";

export default function Register_User(props) {
  const history = useHistory();

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

      <Container className="user-register-form__container">
        <div>
          <img className="logo" src={logo}></img>
        </div>
        <h1 className="user-register__title">Register user!</h1>
        {/* <h5>Enter User Information:</h5> */}

        <Form
          className="user-resiger__form"
          inSubmit={(event) => event.preventDefault()}
        >
          <Form.Group as={Col} controlId="selectPropertyAddress">
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
          </Form.Group>

          <fieldset>
            <Form.Group as={Col}>
              <Form.Label as="legend" column sm={8}>
                Please select a user role:
              </Form.Label>
              <Col sm={5}>
                <Form.Check
                  type="radio"
                  label="Property Manager"
                  name="role_id"
                  id="1"
                />

                <Form.Check type="radio" label="Tenant" name="role_id" id="2" />

                <Form.Check
                  type="radio"
                  label="Plumber"
                  name="role_id"
                  id="3"
                />

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

          <Row>
            <Col md>
              <Form.Group as={Col} controlId="formFirstname">
                <Form.Label column sm={2}>
                  Firstname:
                </Form.Label>
                <Col sm={11}>
                  <Form.Control type="text" placeholder="Firstname" />
                </Col>
              </Form.Group>
            </Col>

            <Col md>
              <Form.Group as={Col} controlId="formLastname">
                <Form.Label column sm={2}>
                  Lastname:
                </Form.Label>
                <Col sm={11}>
                  <Form.Control type="text" placeholder="Lastname" />
                </Col>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group as={Col} controlId="formlEmail">
            <Form.Label column sm={5}>
              Email Address:
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Example@email.com" />
            </Col>
          </Form.Group>

          <Form.Group as={Col} controlId="formPassword">
            <Form.Label column sm={2}>
              Password:
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>

          <Form.Group as={Col} controlId="formConfirmPassword">
            <Form.Label column sm={10}>
              Confirm Password:
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}
