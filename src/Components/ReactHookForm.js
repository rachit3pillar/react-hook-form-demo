import React from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

const ReactHookForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (formData) => {
    console.log("formData", formData);
  };
  return (
    <Container>
      <Form
        name="contactform"
        className="contactform"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Row>
          <Col md={12}>
            <fieldset>
              <Form.Control
                name="name"
                type="text"
                size="30"
                placeholder="Name"
                ref={register({
                  required: true,
                  pattern: /^[a-zA-Z]+$/,
                  maxLength: 50,
                })}
              />
              {errors.name?.type === "required" && (
                <span className="error">Cannot be empty</span>
              )}
              {errors.name?.type === "pattern" && (
                <span className="error">Invalid Name</span>
              )}
              {errors.name?.type === "maxLength" && (
                <span className="error">Your input exceed maxLength</span>
              )}
              <Form.Control
                name="email"
                type="text"
                size="30"
                placeholder="Email"
                ref={register({
                  required: true,
                  pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
              />
              {errors.email?.type === "required" && (
                <span className="error">Cannot be empty</span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="error">Email is not valid</span>
              )}
              <Form.Control
                name="phone"
                type="text"
                size="30"
                placeholder="Phone"
                ref={register({
                  required: true,
                  pattern: /^[0-9\b]+$/,
                })}
              />
              {errors.phone?.type === "required" && (
                <span className="error">Cannot be empty</span>
              )}
              {errors.phone?.type === "pattern" && (
                <span className="error">Please enter valid phone number.</span>
              )}
              <Form.Control
                name="address"
                type="text"
                size="30"
                placeholder="Address"
                ref={register}
              />
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

export default ReactHookForm;
