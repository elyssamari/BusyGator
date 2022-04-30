/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains the page for new users to sign up and make an account.
 */
import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <Card id="login_signupcard" className="card-center">
        <Card.Header className="text-center"><h1>Sign Up</h1></Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="col-sm-2">Email</Form.Label>
              <Form.Control
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="col-sm-4">First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name"
                aria-label="First name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="col-sm-4">Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last name"
                aria-label="Last name"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="col-sm-4 col-form-label">
                Password
              </Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="col-sm-4 col-form-label">
                Confirm Password*
              </Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
          </Form>
  
          <Form.Group className="text-center">
            <Link to="/">
              <Button id="login_signin_button" variant="primary">
                Sign Up
              </Button>
            </Link>
          </Form.Group>

          <Card.Text id="login_signup_text" className="text-center">
            Have an account?
            <span className="space"></span>
            <Link to="/Login">Login Here</Link>
          </Card.Text>
          <input type="checkbox" name="checkbox" value="check" id="agree" /> I have read and agree to the Terms and Conditions and Privacy Policy
        </Card.Body>
      </Card>
    </>
  );
};

export default Signup;
