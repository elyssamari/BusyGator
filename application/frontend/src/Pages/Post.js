/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains the page where the seller can make a new post.
 */
import React, { useEffect, useContext } from 'react';
import {
  Form,
  Button,
  Card,
  Col,
  Row,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';

const Post = () => {

  return (
    <>
      <Card id="login_signupcard" className="card h-100">
        <Card.Header>New Post</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group id="" className="mb-3">
              <Card.Text>Add image:</Card.Text>
              <Col>
                <Form.Control type="file" />
                <Form.Group id="checkbox" className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Accept User Policy for Uploading Image"
                  />
                </Form.Group>
              </Col>
            </Form.Group>
          </Form>

          <Card.Text id="posttext">
            All fields with an asterisk (*) are mandatory
          </Card.Text>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product Title*</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                placeholder="Product Title"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Categories*</Form.Label>
              <DropdownButton
                id="dropdown-basic-button"
                variant="secondary"
                title="Categories"
              >
                <Dropdown.Item>Electronics</Dropdown.Item>
                <Dropdown.Item>Pets</Dropdown.Item>
                <Dropdown.Item>Home</Dropdown.Item>
                <Dropdown.Item>Recreational</Dropdown.Item>
                <Dropdown.Item>Books</Dropdown.Item>
              </DropdownButton>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Price"
                aria-label="Price"
              />
            </Form.Group>

            <Form.Group className="mb-3"> 
              <Form.Label>Location*</Form.Label>
              <DropdownButton id="dropdown-basic-button" variant="secondary" title="Locations">
                <Dropdown.Item>Annex I & Annex II</Dropdown.Item>
                <Dropdown.Item>University Park North</Dropdown.Item>
                <Dropdown.Item>Hensill Hall</Dropdown.Item>
                <Dropdown.Item>J. Paul Leonard Library</Dropdown.Item>
                <Dropdown.Item>Manzanita Square</Dropdown.Item>
                <Dropdown.Item>University Park South</Dropdown.Item>
                <Dropdown.Item>Masshouf Wellness Center</Dropdown.Item>
                <Dropdown.Item>Parking Garage</Dropdown.Item>
                <Dropdown.Item>Cox Stadium </Dropdown.Item>
              </DropdownButton>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description*</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                placeholder="Description"
              />
            </Form.Group>
          </Form>

          <Form.Group className="text-center">
            <Button id="postbutton1" variant="primary" type="submit">
              Cancel
            </Button>
            <Button id="postbutton2" variant="primary" type="submit">
              Post
            </Button>
          </Form.Group>
          <Row className="mt-3 text-center">
            <Card.Text>May take up to 24 hours to be approved</Card.Text>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Post;
