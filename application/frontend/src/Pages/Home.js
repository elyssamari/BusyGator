/*
 * FILE: Home.js
 *
 * AUTHOR(S): Aaron Carlson, Siqi Guo, Janvi Patel, Vishal Ramanand Sharma,
 * Abdullah Sharaf, Samantha Saxton-Getty, Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the page with current products.
 */

import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../DataContext/DataContext';
import { getAllUsers } from '../services/userService';
import {
  Card,
  Col,
  Row,
  Button,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap';

const Home = () => {
  const listings = useContext(DataContext)?.listings;
  const users = useContext(DataContext)?.users;
  const setUsers = useContext(DataContext)?.setUsers;
  const locations = useContext(DataContext)?.locations;
  const setSortAsc = useContext(DataContext)?.setSortAsc;
  const totalCount = useContext(DataContext)?.totalCount;
  const [dropdownText, setDropdownText] = useState('Default');

  const dropDownValues = [
    { name: 'Default', value: null },
    { name: 'Sort by: Price: Low to High', value: true },
    { name: 'Sort by: Price: High to Low', value: false },
  ];

  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data.data);
    });
  }, [setUsers]);

  function getDateString(date) {
    return new Date(date).toDateString();
  }

  function getLocationName(locationNumber) {
    return (
      locations.find((data) => data.location_id === locationNumber)?.name || ''
    );
  }

  function getSellerName(sellerID) {
    let firstName =
      users.find((data) => data.user_id === sellerID)?.first_name || '';
    let lastName =
      users.find((data) => data.user_id === sellerID)?.last_name || '';
    return firstName + ' ' + lastName;
  }

  return (
    <>
      <Row id="cardmargin">
        <Col>
          <Card className="border-0">
            <Card.Text className="foundText">
              Items: {listings ? listings.length : ''} / {totalCount || ''}
            </Card.Text>
          </Card>
        </Col>
        <Col>
          <DropdownButton
            id="dropdown-item-button"
            title={dropdownText}
            className="format float-right"
          >
            {dropDownValues.map((data, index) => (
              <Dropdown.Item as="button" key={index}>
                <div
                  onClick={() => {
                    setSortAsc(data.value);
                    setDropdownText(data.name);
                  }}
                >
                  {data.name}
                </div>
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>
      </Row>
      <Row id="cardmargin" xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
        {listings.map((data, index) => (
          <Col key={`div_${index}`}>
            <Card className="card h-100">
              <Card.Img
                src={data.image_thumbnail}
                className="card-img-top"
                alt="..."
              />
              <Card.Body class="mt-auto" id="carddesc">
                <Card.Title>Product Title: {data.title} </Card.Title>
                <Card.Text>Price: ${data.price}</Card.Text>
                <Card.Text>
                  Location: {getLocationName(data.location)}
                </Card.Text>
                <Card.Text>Description: {data.description}</Card.Text>
                <Card.Text>Seller: {getSellerName(data.seller_id)}</Card.Text>
                <Card.Text>
                  Date Listed: {getDateString(data.date_created)}
                </Card.Text>
                <Card.Text>In Stock</Card.Text>
                <Card.Text className="text-center">
                  <Link to="/IndividualProduct">
                    <Button variant="outline-dark" className="check-it-out-btn">
                      Check it out!
                    </Button>
                  </Link>
                  <span className="button-space"></span>
                  <Link to="/Messages">
                    <Button variant="primary">Message Seller</Button>
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
