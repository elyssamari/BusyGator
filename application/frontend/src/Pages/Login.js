/*
 * FILE: Login.js
 *
 * AUTHOR(S): Siqi Guo, Vishal Ramanand Sharma, Samantha Saxton-Getty,
 * Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the user login to the home page.
 */

import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div id="logInHolder">
        <Card id="login_signupcard" className="card-center">
          <Card.Header className="text-center">
            <h1>Login</h1>
          </Card.Header>
          <Card.Body>
            <Card.Text className="text-right">
              All fields with an asterick (*) are mandatory
            </Card.Text>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="e.g: example@mail.sfsu.edu"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password *</Form.Label>
                <Form.Control type="email" placeholder="Password" />
              </Form.Group>
            </Form>

            <Link to="/Login">Forgot Password?</Link>

            <Form.Group className="text-center">
              <Button id="login_signin_button" type="submit" variant="primary">
                Login
              </Button>
            </Form.Group>

            <Card.Text id="login_signup_text" className="text-center">
              {`Don't have an account?`}
              <span className="space"></span>
              <Link to="/Signup">Sign Up Here</Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Login;
