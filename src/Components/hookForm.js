import React, { useState } from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const HookForm = () => {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    } else if (typeof fields.name !== "undefined") {
      debugger;
      let regex = new RegExp(/^[a-zA-Z]+$/);
      if (!regex.test(fields["name"])) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    } else if (typeof fields["email"] !== "undefined") {
      let regex = new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      );

      if (!regex.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    //phone
    if (!fields["phone"]) {
      formIsValid = false;
      errors["phone"] = "Cannot be empty";
    } else if (typeof fields["phone"] !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(fields["phone"])) {
        formIsValid = false;
        errors["phone"] = "Please enter only number.";
      } else if (fields["phone"].length !== 10) {
        formIsValid = false;
        errors["phone"] = "Please enter valid phone number.";
      }
    }
    setErrors({ ...errors });
    return formIsValid;
  };

  const contactSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  };

  const handleChange = (event) => {
    event.persist();
    setFields((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <Container>
      <Form name="contactform" className="contactform" onSubmit={contactSubmit}>
        <Row>
          <Col md={6}>
            <fieldset>
              <Form.Control
                name="name"
                type="text"
                size="30"
                placeholder="Name"
                onChange={(event) => handleChange(event)}
              />
              <span className="error">{errors["name"]}</span>

              <Form.Control
                name="email"
                type="text"
                size="30"
                placeholder="Email"
                onChange={(event) => handleChange(event)}
              />
              <span className="error">{errors["email"]}</span>
              <Form.Control
                name="phone"
                type="text"
                size="30"
                placeholder="Phone"
                onChange={(event) => handleChange(event)}
              />
              <span className="error">{errors["phone"]}</span>
              <Form.Control
                name="address"
                type="text"
                size="30"
                placeholder="Address"
                onChange={(event) => handleChange(event)}
              />
            </fieldset>
          </Col>
          <Col md={6}>
            <Form.Control
              as="textarea"
              name="message"
              cols="28"
              rows="10"
              className="comments"
              placeholder="Message"
              onChange={(event) => handleChange(event)}
            ></Form.Control>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <fieldset>
              <Button
                className="btn btn-lg pro"
                id="submit"
                value="Submit"
                type="submit"
              >
                Send Message
              </Button>
            </fieldset>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default HookForm;
