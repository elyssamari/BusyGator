/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains future My Page implementation.
 */
import React from 'react';
import { Card, Tab, Row, Col, Nav, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyPage = () => {
  return (
    <>
      <div id="myPageHolder">
        <Card id="welcomeCard">
          <Card.Header id="cardHeader" className="text-center">
            <h1>Welcome</h1>
          </Card.Header>
          <Tab.Container id="tabCont">
            <Row id="rowId">
              <Col sm={1.5}>
                <Nav className="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="msgs" className="myPageLink">
                      My Messages
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="posts" className="myPageLink">
                      My Posts
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={1.5} id="tabContent">
                <Tab.Content>
                  <Tab.Pane eventKey="msgs">
                    <Card id="messageCard">
                      <Table bordered id="msgContent">
                        <tbody>
                          <tr>
                            <td>Date</td>
                            <td>Recipient</td>
                            <td>
                              <Link to="">Product</Link>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                      <Card.Text id="messageText">
                        The messages will go here!
                      </Card.Text>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="posts">
                    <Table bordered id="postContent">
                      <thead>
                        <tr>
                          <th width="80%">Post</th>
                          <th width="20%"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Link to="">placeholder</Link>
                          </td>
                          <td>
                            <Button>Delete Post</Button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Card>
      </div>
    </>
  );
};

export default MyPage;
