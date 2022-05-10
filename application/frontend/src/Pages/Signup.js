/*
 * FILE: Signup.js
 *
 * AUTHOR(S): Aaron Carlson, Siqi Guo, Janvi Patel, Vishal Ramanand Sharma,
 * Abdullah Sharaf, Samantha Saxton-Getty, Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the page for new users to sign up and make an account.
 */

import React, { useContext, useState } from 'react';
import DataContext from '../DataContext/DataContext';
import { Card, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { emailExists, createUser } from '../services/userService';

const Signup = () => {
  const userInfo = useContext(DataContext)?.userInfo;
  const setUserInfo = useContext(DataContext)?.setUserInfo;

  let emailErrorMessage = '';
  let fNameErrorMessage = '';
  let lNameErrorMessage = '';
  let passwordErrorMessage = '';
  let cPasswordErrorMessage = '';
  const navigate = useNavigate();

  function validateEmail() {
    let errorMessage = [];
    const isValidEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!isValidEmail.test(userInfo.email)) {
      errorMessage.push('Invalid email');
    }
    else if (!userInfo.email.endsWith('mail.sfsu.edu')) {
      errorMessage.push('Must be SFSU email');
    }

    if (userInfo.email.length < 1) {
      errorMessage = ['Please fill in email field'];
    }

    if (errorMessage.length > 1) {
      errorMessage.forEach(function (value, i) {
        if (i == 0)
          emailErrorMessage = value;
        else
          emailErrorMessage += '\n' + value;
      });
    }
    else
      emailErrorMessage = errorMessage;
  }

  function nameValidationHelper(name, type) {
    let errorMessage = [];
    const isValidName = /^[a-z ,.'-]+$/i;

    if (!isValidName.test(name)) {
      errorMessage.push('Invalid ' + type + ' name');
    }
    if (name.length < 1) {
      errorMessage = ['Please fill in ' + type + '  name field'];
    }

    if (type == 'first') {
      if (errorMessage.length > 1) {
        errorMessage.forEach(function (value, i) {
          if (i == 0)
            fNameErrorMessage = value;
          else
            fNameErrorMessage += '\n' + value;
        });
      }
      else
        fNameErrorMessage = errorMessage;
    }
    else {
      if (errorMessage.length > 1) {
        errorMessage.forEach(function (value, i) {
          if (i == 0)
            lNameErrorMessage = value;
          else
            lNameErrorMessage += '\n' + value;
        });
      }
      else
        lNameErrorMessage = errorMessage;
    }
  }

  function validateName() {
    nameValidationHelper(userInfo.fName, 'first');
    nameValidationHelper(userInfo.lName, 'last');
  }

  function validatePassword() {
    let errorMessage = [];
    const hasUpper = /[A-Z]/;
    const hasNum = /[0-9]/;
    const hasSpecial = /[\/*-+!@#$^&*]/;


    if (!hasUpper.test(userInfo.password)) {
      errorMessage.push('Password must have at least 1 uppercase letter');
    }
    if (!hasNum.test(userInfo.password)) {
      errorMessage.push('Password must have at least 1 number');
    }
    if (!hasSpecial.test(userInfo.password)) {
      errorMessage.push('Password must have at least 1 of the following special characters (/ * - + ! @ # $ ^ & * )');
    }
    if (userInfo.password.length < 8) {
      errorMessage.push('Password must be 8 or more characters long');
    }
    if (userInfo.password.length < 1) {
      errorMessage = ['Please fill in password field'];
    }

    if (errorMessage.length > 1) {
      errorMessage.forEach(function (value, i) {
        if (i == 0)
          passwordErrorMessage = value;
        else
          passwordErrorMessage += '\n' + value;
      });
    }
    else
      passwordErrorMessage = errorMessage;
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    validateName();
    validatePassword();

    let validStatus = true;

    if (userInfo.cPassword != userInfo.password) {
      cPasswordErrorMessage = 'Passwords need to match';
      console.error(cPasswordErrorMessage);
      validStatus = false;
    }

    if (emailErrorMessage != '') {
      console.error(emailErrorMessage);
      validStatus = false;
    }
    /*else {
      emailExists(userInfo).then((emailDoesExist) => {
        if (emailDoesExist) {
          console.error('Email already in use. Please choose a different one');
          setValidated(false);
        }
      });
    }*/
      
    if (fNameErrorMessage != '') {
      console.error(fNameErrorMessage);
      validStatus = false;
    }

    if (lNameErrorMessage != '') {
      console.error(lNameErrorMessage);
      validStatus = false;
    }
  
    if (passwordErrorMessage != '') {
      console.error(passwordErrorMessage);
      validStatus = false;
    }

    if (validStatus) {
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
                onChange={(e) =>
                  setUserInfo({
                    ...userInfo,
                    email: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>First Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                aria-label="First name"
                onChange={(e) =>
                  setUserInfo({
                    ...userInfo,
                    fName: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                aria-label="Last name"
                onChange={(e) =>
                  setUserInfo({
                    ...userInfo,
                    lName: e.target.value,
                  })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                aria-label="Password"
                onChange={(e) =>
                  setUserInfo({
                    ...userInfo,
                    password: e.target.value,
                  })
                }
                />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Confirm Password *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                aria-label="Confirm Password"
                onChange={(e) =>
                  setUserInfo({
                    ...userInfo,
                    cPassword: e.target.value,
                  })
                }
              />
            </Form.Group>

            <input type="checkbox" name="checkbox" value="check" id="agree" required/> I 
            have read and agree to the Terms and Conditions and Privacy Policy
            <Form.Group className="text-center">
              <Button
                id="login_signin_button"
                variant="primary"
                type="submit"
                required
              >
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
