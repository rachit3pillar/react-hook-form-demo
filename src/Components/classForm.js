import React from "react";
import { Form, Row, Col, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

class ClassForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    } else if (typeof fields["name"] !== "undefined") {
      if (!fields["name"].test(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    } else if (typeof fields["email"] !== "undefined") {
      var regex = new RegExp(
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
    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();
    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <Container>
        <Form
          name="contactform"
          className="contactform"
          onSubmit={this.contactSubmit.bind(this)}
        >
          <Row>
            <Col md={6}>
              <fieldset>
                <Form.Control
                  ref="name"
                  type="text"
                  size="30"
                  placeholder="Name"
                  onChange={this.handleChange.bind(this, "name")}
                  value={this.state.fields["name"]}
                />
                <span className="error">{this.state.errors["name"]}</span>
                <Form.Control
                  refs="email"
                  type="text"
                  size="30"
                  placeholder="Email"
                  onChange={this.handleChange.bind(this, "email")}
                  value={this.state.fields["email"]}
                />
                <span className="error">{this.state.errors["email"]}</span>
                <Form.Control
                  refs="phone"
                  type="text"
                  size="30"
                  placeholder="Phone"
                  onChange={this.handleChange.bind(this, "phone")}
                  value={this.state.fields["phone"]}
                />
                <span className="error">{this.state.errors["phone"]}</span>
                <Form.Control
                  refs="address"
                  type="text"
                  size="30"
                  placeholder="Address"
                  onChange={this.handleChange.bind(this, "address")}
                  value={this.state.fields["address"]}
                />
              </fieldset>
            </Col>
            <Col md={6}>
              <fieldset>
                <textarea
                  refs="message"
                  cols="28"
                  rows="10"
                  className="comments"
                  placeholder="Message"
                  onChange={this.handleChange.bind(this, "message")}
                >
                  {this.state.fields["message"]}
                </textarea>
              </fieldset>
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
  }
}

export default ClassForm;
