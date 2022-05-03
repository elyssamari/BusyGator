/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains future My Page implementation.
 */
import React from 'react';
import { Card, Tab, Row, Col, Nav } from 'react-bootstrap';

const MyPage = () => {
  return (
    <>
      <Card id="welcomeCard">
        <Card.Header>Welcome user-id</Card.Header>
        <Tab.Container id="tabCont">
          <Row>
            <Col sm={4}>
              <Nav class="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="msgs">My Messages</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="posts">My Posts</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={4}>
              <Tab.Content>
                <Tab.Pane eventKey="msgs">My messages will go here!</Tab.Pane>
                <Tab.Pane eventKey="posts">My posts will go here!</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Card>
    </>
  );
};

export default MyPage;
