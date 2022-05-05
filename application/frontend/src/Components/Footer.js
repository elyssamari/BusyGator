/*
 * FILE: Footer.js
 *
 * AUTHOR(S): Siqi Guo, Vishal Ramanand Sharma, Samantha Saxton-Getty,
 * Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains Global footer for the application.
 */

import React from 'react';
import { Row, Col, Figure } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <Figure id="footer">
        <Col>
          <Row>
            <Col id="footertext">
              SFSU Software Engineering Project CSC 648-848, Spring 2022. For
              Demonstration Only.
            </Col>
          </Row>

          <Row>
            <Col id="footertext">
              Software Engineering Class SFSU Spring 2022 Section 3 - Team 4{' '}
              <span className="space"></span>
            </Col>
          </Row>
        </Col>
      </Figure>
    </>
  );
};

export default Footer;
