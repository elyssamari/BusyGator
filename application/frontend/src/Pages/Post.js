/*
 * FILE: Post.js
 *
 * AUTHOR(S): Aaron Carlson, Siqi Guo, Janvi Patel, Vishal Ramanand Sharma,
 * Abdullah Sharaf, Samantha Saxton-Getty, Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the page where the seller can make a new post.
 */

import React, { useContext, useState, useEffect } from 'react';
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
import { createListing } from '../services/listingService';

const Post = () => {
  const userInfo = useContext(DataContext)?.userInfo;
  const navigate = useNavigate();
  const categories = useContext(DataContext)?.categories;
  const locations = useContext(DataContext)?.locations;

  const [imageFormObj, setImageFormObj] = useState({
    value: null,
    isValid: true,
    errorMessage: '',
  });
  const [titleFormObj, setTitleFormObj] = useState({
    value: null,
    isValid: true,
    errorMessage: '',
  });
  const [categoryFormObj, setCategoryFormObj] = useState({
    value: null,
    isValid: true,
    errorMessage: '',
  });
  const [priceFormObj, setPriceFormObj] = useState({
    value: null,
    isValid: true,
    errorMessage: '',
  });
  const [locationFormObj, setLocationFormObj] = useState({
    value: null,
    isValid: true,
    errorMessage: '',
  });
  const [descriptionFormObj, setDescriptionFormObj] = useState({
    value: null,
    isValid: true,
    errorMessage: '',
  });
  const [listingInfo, setListingInfo] = useState({
    image: null,
    title: null,
    category: null,
    price: null,
    location: 1, // Figure out other default value since input not required
    description: null,
    sellerID: 1, // Change to null once real value is available
  });

  useEffect(() => {
    console.log(listingInfo);
  }, [listingInfo]);

  function returnTitle() {
    if (categoryFormObj.value) {
      const found = categories.find(
        (data) => data.category_id === categoryFormObj.value
      );
      if (found) return found.name;
    }
    return 'Categories';
  }

  function returnLocationTitle() {
    if (locationFormObj.value) {
      const found = locations.find(
        (data) => data.location_id === locationFormObj.value
      );
      if (found) return found.name;
    }
    return 'Locations';
  }

  const setFormData = (key, value) => {
    if (key === 'title') {
      if (!value) {
        setTitleFormObj({
          ...titleFormObj,
          isValid: false,
          errorMessage: 'Please fill in title field',
        });
      } else {
        setTitleFormObj({
          ...titleFormObj,
          value: value,
          isValid: true,
          errorMessage: '',
        });

        setListingInfo({ ...listingInfo, title: value });
      }
    } else if (key === 'price') {
      // Remove non-numbers from input
      let priceParsed = parseInt(value.replace(/\D/g, ''));

      if (!priceParsed) {
        setPriceFormObj({
          ...priceFormObj,
          isValid: false,
          errorMessage: 'Please enter number in price field',
        });
      } else {
        setPriceFormObj({
          ...priceFormObj,
          value: priceParsed,
          isValid: true,
          errorMessage: '',
        });

        setListingInfo({ ...listingInfo, price: priceParsed });
      }
    } else if (key === 'description') {
      if (!value) {
        setDescriptionFormObj({
          ...descriptionFormObj,
          isValid: false,
          errorMessage: 'Please fill in description field',
        });
      } else {
        setDescriptionFormObj({
          ...descriptionFormObj,
          value: value,
          isValid: true,
          errorMessage: '',
        });

        setListingInfo({ ...listingInfo, description: value });
      }
    }
  };

  function onPostSubmit() {
    //if (userInfo.email) {   Check if user is logged in
    //  Check if file is a valid image
    if (
      !imageFormObj.value ||
      imageFormObj.value['type'].split('/')[0] !== 'image'
    ) {
      setImageFormObj({
        ...imageFormObj,
        isValid: false,
        errorMessage: 'Please add an image',
      });
    }

    if (!categoryFormObj.value) {
      setCategoryFormObj({
        ...categoryFormObj,
        isValid: false,
        errorMessage: 'Please select a category',
      });
    }

    if (!locationFormObj.value) {
      setLocationFormObj({
        ...locationFormObj,
        isValid: false,
        errorMessage: 'Please select a location',
      });
    }

    if (
      imageFormObj.value &&
      titleFormObj.value &&
      categoryFormObj.value &&
      priceFormObj.value &&
      descriptionFormObj.value
    ) {
      // setListingInfo({ ...listingInfo, sellerID: userID });  Assign ID of user logged in to product seller ID. Must be done before this function due to promise return

      createListing(listingInfo);
      navigate('/');
    }

    /*} else {
      navigate('/Signup');
    }*/
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
              <Form.Control
                id="file_button"
                type="file"
                // Only accept image files
                accept="image/*"
                isInvalid={!imageFormObj.isValid}
                onChange={(e) => {
                  setImageFormObj({
                    ...imageFormObj,
                    value: e.target.files[0],
                    isValid: true,
                    errorMessage: '',
                  });
                  setListingInfo({
                    ...listingInfo,
                    image: e.target.files[0] || '',
                  });
                }}
              />
              <Form.Control.Feedback type="invalid">
                {imageFormObj.errorMessage}
              </Form.Control.Feedback>
              <Form.Group id="checkbox" className="mb-3">
                <Form.Check
                  type="checkbox"
                  required
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
                isInvalid={!titleFormObj.isValid}
                onChange={(e) => setFormData('title', e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                {titleFormObj.errorMessage}
              </Form.Control.Feedback>
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
                        onClick={() => {
                          setCategoryFormObj({
                            ...categoryFormObj,
                            value: category.category_id || '',
                            isValid: true,
                            errorMessage: '',
                          });
                          setListingInfo({
                            ...listingInfo,
                            category: category.category_id || '',
                          });
                        }}
                      >
                        {category.name}
                      </Dropdown.Item>
                    ))}
              </DropdownButton>
              {!categoryFormObj.isValid && (
                <small className="text-danger">
                  {categoryFormObj.errorMessage}
                </small>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Product Price *</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g: 200"
                aria-label="Price"
                isInvalid={!priceFormObj.isValid}
                onChange={(e) => setFormData('price', e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                {priceFormObj.errorMessage}
              </Form.Control.Feedback>
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
                      onClick={(e) => {
                        setLocationFormObj({
                          ...locationFormObj,
                          value: location.location_id || '',
                          isValid: true,
                          errorMessage: '',
                        });
                        setListingInfo({
                          ...listingInfo,
                          location: location.location_id || '',
                        });
                      }}
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
                isInvalid={!descriptionFormObj.isValid}
                onChange={(e) => setFormData('description', e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                {descriptionFormObj.errorMessage}
              </Form.Control.Feedback>
            </Form.Group>

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
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Post;
