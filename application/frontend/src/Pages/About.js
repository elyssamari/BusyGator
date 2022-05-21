/*
 * FILE: About.js
 *
 * AUTHOR(S): Siqi Guo, Vishal Ramanand Sharma, Samantha Saxton-Getty,
 * Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains information about the team.
 */

import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <h1 className="homeheader"> About the Team 4: </h1>

      <Container id="aboutHolder">
        <Row>
          <Col xs="auto" md="auto">
            <Link to="/about/Aaron">
              <Button className="name1" variant="outline-dark">
                <h2>Aaron Carlson</h2>
                <p className="title">Back-End Lead</p>{' '}
              </Button>
            </Link>
          </Col>

          <Col xs="auto" md="auto">
            <Link to="/about/Abdullah">
              <Button className="name1" variant="outline-dark">
                <h2>Abdullah Sharaf</h2>
                <p className="title">Front-End</p>{' '}
              </Button>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col xs="auto" md="auto">
            <Link to="/about/Elyssa">
              <Button className="name1" variant="outline-dark">
                <h2>Elyssa Mari Tapawan</h2>
                <p className="title">Front-End Lead</p>{' '}
              </Button>
            </Link>
          </Col>

          <Col xs="auto" md="auto">
            <Link to="/about/Janvi">
              <Button className="name1" variant="outline-dark">
                <h2>Janvi Patel</h2>
                <p className="title">Back-End</p>{' '}
              </Button>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col xs="auto" md="auto">
            <Link to="/about/Samantha">
              <Button className="name1" variant="outline-dark">
                <h2>Samantha Saxton-Getty</h2>
                <p className="title">Team Lead</p>{' '}
              </Button>
            </Link>
          </Col>

          <Col xs="auto" md="auto">
            <Link to="/about/Siqi">
              <Button className="name1" variant="outline-dark">
                <h2>Siqi Guo</h2>
                <p className="title">Front-End</p>{' '}
              </Button>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col xs="auto" md="auto">
            <Link to="/about/Vishal">
              <Button className="name1" variant="outline-dark">
                <h2>Vishal Ramanand Sharma</h2>
                <p className="title">Github Lead</p>
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
