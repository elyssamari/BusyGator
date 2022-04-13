/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains the messages between the seller and buyer. 
 */
import React from 'react';
import { Card, Form, Button, InputGroup } from 'react-bootstrap';

const Messages = () => {
  return (
    <>
      <Card id="messagesCard">
        <Card.Header>Messages</Card.Header>
        <Card.Body>
          <Card id="textMessage">
            <InputGroup id="inputGroup">
              <InputGroup.Text>@Mike</InputGroup.Text>
              <InputGroup.Text>10-12-21</InputGroup.Text>
            </InputGroup>
            <Card.Body id="textBody">
              Dummy Text Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit. elit. elit. Aenean commodo ligula eget dolor. Aenean massa.
              sociis natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Donec quam felis, ultricies nec, eu, pretium quis,
              sem. Nulla consequat massa quis enim.
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
              <Button id="sentMessageButton" href="/" variant="primary">
                Send Message
              </Button>
              <Button id="homeButton" href="/" variant="primary">
                Home
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Messages;

// Reference: https://react-bootstrap.github.io
