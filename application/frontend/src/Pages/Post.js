/*
 * FILE: Post.js
 *
 * AUTHOR(S): Aaron Carlson, Siqi Guo, Janvi Patel, Vishal Ramanand Sharma,
 * Abdullah Sharaf, Samantha Saxton-Getty, Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the page where the seller can make a new post.
 */

import React, { useContext, useState } from 'react';
import {
  Form,
  Button,
  Card,
  Row,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';
import DataContext from '../DataContext/DataContext';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const userInfo = useContext(DataContext)?.userInfo;
  const navigate = useNavigate();
  const categories = useContext(DataContext)?.categories;
  const locations = useContext(DataContext)?.locations;

  const [locationCategoryObj, setLocationCategoryObj] = useState({
    locationId: null,
    categoryId: null,
  });
  function onPostSubmit() {
    if (userInfo.email) {
      // perform post functionality to backend
    } else {
      navigate('/Signup');
    }
  }

  function returnTitle() {
    if (locationCategoryObj.categoryId) {
      const found = categories.find(
        (data) => data.category_id === locationCategoryObj.categoryId
      );
      if (found) return found.name;
    }
    return 'Categories';
  }

  function returnLocationTitle() {
    if (locationCategoryObj.locationId) {
      const found = locations.find(
        (data) => data.location_id === locationCategoryObj.locationId
      );
      if (found) return found.name;
    }
    return 'Locations';
  }

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
              <Form.Control type="file" />
              <Form.Group id="checkbox" className="mb-3">
                <Form.Check
                  type="checkbox"
                  label="Accept User Policy for Uploading Image"
                />
              </Form.Group>
            </Form.Group>
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
                title={returnTitle()}
              >
                {categories &&
                  categories
                    .filter((elem) => elem.name !== 'All')
                    .map((category, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() =>
                          setLocationCategoryObj({
                            ...locationCategoryObj,
                            categoryId: category.category_id || '',
                          })
                        }
                      >
                        {category.name}
                      </Dropdown.Item>
                    ))}
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
                title={returnLocationTitle()}
              >
                {locations &&
                  locations.map((location, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() =>
                        setLocationCategoryObj({
                          ...locationCategoryObj,
                          locationId: location.location_id || '',
                        })
                      }
                    >
                      {location.name}
                    </Dropdown.Item>
                  ))}
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
            <Button id="postbutton1" variant="primary">
              Cancel
            </Button>
            <Button
              id="postbutton2"
              variant="primary"
              onClick={() => onPostSubmit()}
            >
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
