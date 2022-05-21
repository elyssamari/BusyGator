/*
 * FILE: Messages.js
 *
 * AUTHOR(S): Siqi Guo, Vishal Ramanand Sharma, Abdullah Sharaf,
 * Samantha Saxton-Getty, Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the messages between the seller and buyer.
 */

import React, { useEffect, useContext, useState } from 'react';
import DataContext from '../DataContext/DataContext';
import { Card, Button, Form, InputGroup } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { toastError, toastSuccess } from '../ToastService';
import { createMessage } from '../services/messageService';
import { getListingById } from '../services/listingService';

const Messages = () => {
  const navigate = useNavigate();
  const userInfo = useContext(DataContext)?.userInfo;
  const users = useContext(DataContext)?.users;

  const [messageInfo, setMessageInfo] = useState({
    creatorId: '',
    receiverId: '',
    product: '',
    subject: '',
    messageBody: '',
  });

  let productId = useParams().productId;
  useEffect(() => {
    getListingById(productId).then((data) => {
      let listing = data.data;

      setMessageInfo({
        ...messageInfo,
        creatorId: users.find((userData) => userData.email === userInfo.email)
          ?.user_id,
        receiverId: listing.seller_id,
        product: productId,
        subject: listing.title,
      });
    });
  }, []);

  function onFormSubmit() {
    if (userInfo.email) {
      try {
        createMessage(messageInfo);
        navigate('/');
        toastSuccess('Message sent');
      } catch (error) {
        toastError(error);
      }
    } else {
      navigate('/Signup');
    }
  }

  return (
    <>
      <Card id="messagesCard">
        <Card.Header className="text-center">
          <h1>Messages</h1>
        </Card.Header>
        <Card.Body>
          <Card id="textMessage">
            <Card.Body id="message-box"> </Card.Body>
          </Card>
          <Form>
            <Form.Group>
              <Form.Control
                id="message-text-box"
                as="textarea"
                rows={4}
                placeholder="Click here to write a message"
              />
            </Form.Group>

            <Form.Group className="text-center">
              <Button id="cancelButton" className="primary">
                Cancel{' '}
              </Button>

              <Button id="sentMessageButton" className="primary">
                Send Message{' '}
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Messages;
