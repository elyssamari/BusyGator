/*
 * FILE: Messages.js
 *
 * AUTHOR(S): Siqi Guo, Vishal Ramanand Sharma, Abdullah Sharaf,
 * Samantha Saxton-Getty, Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the messages between the seller and buyer.
 */

import React from 'react';
import { Card, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Messages = () => {
  return (
    <>
      <div className="setHeight">
        <Card id="messagesCard">
          <Card.Header className="text-center">
            <h1>Messages</h1>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Label></Form.Label>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Click here to write a message"
                />

                <Link
                  id="cancelButton"
                  to="/"
                  className="btn btn-primary btn-lg"
                  role="button"
                >
                  Cancel{' '}
                </Link>

                <Link
                  id="sentMessageButton"
                  to="/"
                  className="btn btn-primary btn-lg"
                  role="button"
                >
                  Send Message{' '}
                </Link>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Messages;
