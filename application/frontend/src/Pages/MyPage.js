/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains future My Page implementation.
 */

import React, { useEffect, useContext, useState } from 'react';
import { Card, Tab, Row, Col, Nav, Table, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import DataContext from '../DataContext/DataContext';
import { getAllUsers } from '../services/userService';
import { getAllMessages, getMessagesById } from '../services/messageService';

const MyPage = () => {
  const listings = useContext(DataContext)?.listings;
  const users = useContext(DataContext)?.users;
  const setUsers = useContext(DataContext)?.setUsers;
  const [messages, setMessages] = useState([]);
  const userInfo = useContext(DataContext)?.userInfo;
  const navigate = useNavigate();

  useEffect(() => {
    getAllMessages().then((data) => {
      setMessages(data.data);
    });
  }, [setMessages]);

  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data.data);
    });
  }, [setUsers]);

  function getDateString(date) {
    return new Date(date).toLocaleString();
  }

  function getListingName(listingNumber) {
    return (
      listings.find((data) => data.product_id === listingNumber)?.title || null
    );
  }

  function getUserName(userId) {
    let firstName =
      users.find((data) => data.user_id === userId)?.first_name || '';
    let lastName =
      users.find((data) => data.user_id === userId)?.last_name || '';
    return firstName + ' ' + lastName;
  }

  if (!userInfo.userId) {
    navigate('/Login');
  }

  return (
    <>
      <div className="setHeight">
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
                    {messages.map((data, index) => (
                      <Card id="messageCard" key={`div_${index}`}>
                        <Table bordered id="msgContent">
                          <tbody>
                            <tr>
                              <td>{getDateString(data.date_created)}</td>
                              <td>{getUserName(data.creator_id)}</td>
                              <td>⇢</td>
                              <td>{getUserName(data.receiver_id)}</td>
                              <td>
                                {(getListingName(data.product) && (
                                  <Link to={`/Product/${data.product}`}>
                                    {getListingName(data.product)}
                                  </Link>
                                )) ||
                                  'Post waiting for approval'}
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                        <Card.Text id="messageText">
                          {data.message_body}
                        </Card.Text>
                      </Card>
                    ))}
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
                        {listings.map((data, index) => (
                          <tr key={`div_${index}`}>
                            <td>
                              {getListingName(data.product_id) && (
                                <Link to={`/Product/${data.product_id}`}>
                                  {getListingName(data.product_id)}
                                </Link>
                              )}
                            </td>
                            <td>
                              <Button>Delete Post</Button>
                            </td>
                          </tr>
                        ))}
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
