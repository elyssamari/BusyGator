/*
 * FILE: Post.js
 * 
 * AUTHOR(S): Aaron Carlson, Siqi Guo, Janvi Patel, Vishal Ramanand Sharma, 
 * Abdullah Sharaf, Samantha Saxton-Getty, Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the page where the seller can make a new post.
 */

import React from 'react';
import {
  Form,
  Button,
  Card,
  Col,
  Row,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';

const Post = () => {
  return (
    <>
      <Card id="login_signupcard" className="card h-100">
        <Card.Header className="text-center">
          <h1>New Post</h1>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-right">
            All fields with an asterick (*) are mandatory
          </Card.Text>
          <Form>
            <Form.Group id="" className="mb-3">
              <Card.Text>Add Product Image *</Card.Text>
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

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Product Title *</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                placeholder="e.g: Foundations of Computer Science Textbook"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Product Category *</Form.Label>
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
              <Form.Label>Product Price *</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g: 200"
                aria-label="Price"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Product Pickup Location</Form.Label>
              <DropdownButton
                id="dropdown-basic-button"
                variant="secondary"
                title="Locations"
              >
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
              <Form.Label>Brief Product Description *</Form.Label>
              <Form.Control
                type="text"
                className="form-control"
                placeholder="e.g: Textbooks require Author and Edition"
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
