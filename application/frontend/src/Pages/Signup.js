/*
 * FILE: Signup.js
 *
 * AUTHOR(S): Aaron Carlson, Siqi Guo, Janvi Patel, Vishal Ramanand Sharma,
 * Abdullah Sharaf, Samantha Saxton-Getty, Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the page for new users to sign up and make an account.
 */

import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../services/userService';

const Signup = () => {
  const navigate = useNavigate();

  const [emailFormObj, setEmailFormObj] = useState({
    value: '',
    isValid: true,
    errorMessage: '',
  });
  const [firstNameFormObj, setFirstNameFormObj] = useState({
    value: '',
    isValid: true,
    errorMessage: '',
  });
  const [lastNameFormObj, setLastNameFormObj] = useState({
    value: '',
    isValid: true,
    errorMessage: '',
  });
  const [passwordFormObj, setPasswordFormObj] = useState({
    value: '',
    isValid: true,
    errorMessage: '',
  });
  const [confirmPasswordFormObj, setConfirmPasswordFormObj] = useState({
    value: '',
    isValid: true,
    errorMessage: '',
  });
  const [userInfo, setUserInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  });

  const setFormData = (key, value) => {
    if (key === 'email') {
      const isValidEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!value) {
        setEmailFormObj({
          ...emailFormObj,
          isValid: false,
          errorMessage: 'Please fill in email field',
        });
      } else if (!isValidEmail.test(value)) {
        setEmailFormObj({
          ...emailFormObj,
          isValid: false,
          errorMessage: 'Invalid email',
        });
      } else if (!value.endsWith('mail.sfsu.edu')) {
        setEmailFormObj({
          ...emailFormObj,
          isValid: false,
          errorMessage: 'Must be SFSU email',
        });
      } else {
        setEmailFormObj({
          ...emailFormObj,
          value: value,
          isValid: true,
          errorMessage: '',
        });

        setUserInfo({ ...userInfo, email: value });
      }
    } else if (key === 'firstName') {
      const isValidName = /^[a-z ,.'-]+$/i;

      if (!value) {
        setFirstNameFormObj({
          ...firstNameFormObj,
          isValid: false,
          errorMessage: 'Please fill in last name field',
        });
      } else if (!isValidName.test(value)) {
        setFirstNameFormObj({
          ...firstNameFormObj,
          isValid: false,
          errorMessage: 'Invalid first name',
        });
      } else {
        setFirstNameFormObj({
          ...firstNameFormObj,
          value: value,
          isValid: true,
          errorMessage: '',
        });

        setUserInfo({ ...userInfo, firstName: value });
      }
    } else if (key === 'lastName') {
      const isValidName = /^[a-z ,.'-]+$/i;

      if (!value) {
        setLastNameFormObj({
          ...lastNameFormObj,
          isValid: false,
          errorMessage: 'Please fill in last name field',
        });
      } else if (!isValidName.test(value)) {
        setLastNameFormObj({
          ...lastNameFormObj,
          isValid: false,
          errorMessage: 'Invalid last name',
        });
      } else {
        setLastNameFormObj({
          ...lastNameFormObj,
          value: value,
          isValid: true,
          errorMessage: '',
        });

        setUserInfo({ ...userInfo, lastName: value });
      }
    } else if (key === 'password') {
      const hasUpper = /[A-Z]/;
      const hasNum = /[0-9]/;
      const hasSpecial = /[\/*-+!@#$^&*]/;

      if (!value) {
        setPasswordFormObj({
          ...passwordFormObj,
          isValid: false,
          errorMessage: 'Please fill in password field',
        });
      } else if (!hasUpper.test(value)) {
        setPasswordFormObj({
          ...passwordFormObj,
          isValid: false,
          errorMessage: 'Password must have at least 1 uppercase letter',
        });
      } else if (!hasNum.test(value)) {
        setPasswordFormObj({
          ...passwordFormObj,
          isValid: false,
          errorMessage: 'Password must have at least 1 number',
        });
      } else if (!hasSpecial.test(value)) {
        setPasswordFormObj({
          ...passwordFormObj,
          isValid: false,
          errorMessage:
            'Password must have at least 1 of the following special characters (/ * - + ! @ # $ ^ & * )',
        });
      } else if (value.length < 8) {
        setPasswordFormObj({
          ...passwordFormObj,
          isValid: false,
          errorMessage: 'Password must be 8 or more characters long',
        });
      } else {
        setPasswordFormObj({
          ...passwordFormObj,
          value: value,
          isValid: true,
          errorMessage: '',
        });

        setUserInfo({ ...userInfo, password: value });
      }
    } else if (key === 'confirmPassword') {
      if (!value) {
        setConfirmPasswordFormObj({
          ...confirmPasswordFormObj,
          isValid: false,
          errorMessage: 'Please confirm password',
        });
      } else if (value !== passwordFormObj.value) {
        setConfirmPasswordFormObj({
          ...confirmPasswordFormObj,
          isValid: false,
          errorMessage: 'Passwords must match',
        });
      } else {
        setConfirmPasswordFormObj({
          ...confirmPasswordFormObj,
          value: value,
          isValid: true,
          errorMessage: '',
        });
      }
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (
      emailFormObj.isValid &&
      firstNameFormObj.isValid &&
      lastNameFormObj.isValid &&
      passwordFormObj.isValid &&
      confirmPasswordFormObj.isValid
    ) {
      createUser(userInfo);
      navigate('/');
    }
  };

  return (
    <>
      <Card id="login_signupcard" className="card-center">
        <Card.Header className="text-center">
          <h1>Sign Up</h1>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-right">
            All fields with an asterick (*) are mandatory
          </Card.Text>
          <Form onSubmit={onFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                placeholder="e.g: example@mail.sfsu.edu"
                isInvalid={!emailFormObj.isValid}
                onChange={(e) => setFormData('email', e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                {emailFormObj.errorMessage}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>First Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                aria-label="First name"
                isInvalid={!firstNameFormObj.isValid}
                onChange={(e) => setFormData('firstName', e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                {firstNameFormObj.errorMessage}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                aria-label="Last name"
                isInvalid={!lastNameFormObj.isValid}
                onChange={(e) => setFormData('lastName', e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                {lastNameFormObj.errorMessage}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                aria-label="Password"
                isInvalid={!passwordFormObj.isValid}
                onChange={(e) => setFormData('password', e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                {passwordFormObj.errorMessage}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                aria-label="Confirm Password"
                isInvalid={!confirmPasswordFormObj.isValid}
                onChange={(e) => setFormData('confirmPassword', e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                {confirmPasswordFormObj.errorMessage}
              </Form.Control.Feedback>
            </Form.Group>
            <input
              type="checkbox"
              name="checkbox"
              value="check"
              id="agree"
              required
            />{' '}
            I have read and agree to the Terms and Conditions and Privacy Policy
            <Form.Group className="text-center">
              <Button id="login_signin_button" variant="primary" type="submit">
                Sign Up
              </Button>
            </Form.Group>
          </Form>
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
