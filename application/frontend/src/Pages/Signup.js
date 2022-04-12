import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <Card id="login_signupcard" className="card-center">
        <Card.Header className="text-center">Sign Up</Card.Header>
        <Card.Body>
          <Card.Text>All fields with an asterisk (*) are mandatory</Card.Text>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="col-sm-2">Email*</Form.Label>
              <Form.Control
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="col-sm-4">First Name*</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name"
                aria-label="First name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="col-sm-4">Last Name*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last name"
                aria-label="Last name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="col-sm-2 col-form-label">
                Password*
              </Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>

          <Form.Group className="text-center">
            <Button id="login_signin_button" href="/" variant="primary">
              Sign Up
            </Button>
          </Form.Group>

          <Card.Text id="login_signup_text" className="text-center">
            Have an account?
            <span className="space"></span>
            <Link to="/Login">Login Here</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Signup;
