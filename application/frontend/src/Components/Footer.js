/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains Global footer for the application.
 */
import React from 'react';
import { Row, Col, Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
              <Link to="/About">About Us</Link>
            </Col>
          </Row>
        </Col>
      </Figure>
    </>
  );
};

export default Footer;
