import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const ForgotPassword = () => {
  return (
    <>
      <Card id="login_signupcard" className="card-center">
        <Card.Header className="text-center">
          <h1> Forgot Password</h1>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-right">
            All fields with an asterick (*) are mandatory
          </Card.Text>
          <Card.Text id="forgot-password-text">
            Please enter your email address that is associated with your
            account.{' '}
          </Card.Text>
          <Form.Group className="mb-3">
            <Form.Label>Email * </Form.Label>
            <Form.Control
              placeholder="Email"
              type="text"
              className="form-control"
            />
          </Form.Group>

          <Form.Group className="text-center">
            <Button id="login_signin_button" variant="primary" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Card.Body>
      </Card>
    </>
  );
};
export default ForgotPassword;
