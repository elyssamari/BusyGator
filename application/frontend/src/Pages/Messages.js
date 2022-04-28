/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains the messages between the seller and buyer. 
 */
import React from 'react';
import { Card, Form, Button, InputGroup } from 'react-bootstrap';
import {Link} from "react-router-dom";

const Messages = () => {
  return (
    <>
      <Card id="messagesCard">
        <Card.Header>Messages</Card.Header>
        <Card.Body>
          <Card id="textMessage">
            <InputGroup id="inputGroup">
            </InputGroup>
            <Card.Body id="textBody">
            </Card.Body>
          </Card>
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
Cancel      </Link>

         
               <Link
        id="sentMessageButton"
        to="/"
        className="btn btn-primary btn-lg"
        role="button"
      >
Send Message      </Link>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Messages;