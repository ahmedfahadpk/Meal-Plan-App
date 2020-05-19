import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

class SignUp extends Component {
  render() {
    return (
      <Container fluid="sm">
        <Col md={{ span: 8, offset: 2 }}>
        <form>
          <h2
            style={{ textAlign: "center", padding: "20px", color: "green" }}
          >
            Sign Up
          </h2>

          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <Button variant="success" block>
            Sign Up
          </Button>
          <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
          </p>
        </form>
        </Col>
      </Container>
    );
  }
}

export default SignUp;
