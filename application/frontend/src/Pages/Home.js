/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains the page with current products.
 */
import React, { useEffect, useContext, useState } from 'react';
import DataContext from '../DataContext/DataContext';
import { getAllListings } from '../services/listingService';
import { getAllLocations } from '../services/locationService';
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
  const setListings = useContext(DataContext)?.setListings;
  const locations = useContext(DataContext)?.locations;
  const setLocations = useContext(DataContext)?.setLocations;
  const [sortAsc, setSortAsc] = useState(null);
  const [dropdownText, setDropdownText] = useState('Default');

  const dropDownValues = [
    { name: 'Default', value: null },
    { name: 'Sort by: Price: Low to High', value: true },
    { name: 'Sort by: Price: High to Low', value: false },
  ];

  useEffect(() => {
    getAllListings().then((data) => {
      if (sortAsc !== null) {
        const arr = data.data.sort((a, b) => {
          if (sortAsc) return a.price - b.price;
          else return b.price - a.price;
        });
        setListings(arr);
      } else setListings(data.data);
    });
  }, [setListings, sortAsc]);

  useEffect(() => {
    getAllLocations().then((data) => {
      setLocations(data.data);
    });
  }, [setLocations]);

  function getLocationName(locationNumber) {
    return (
      locations.find((data) => data.location_id === locationNumber)?.name || ''
    );
  }

  return (
    <>
      <Row id="cardmargin">
        <Col>
          <Card className="border-0">
            <Card.Text class="foundText">Items Found: 24/24</Card.Text>
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
      <Row id="cardmargin" xs={2} md={5} className="g-4">
        {listings.map((data, index) => (
          <Col key={`div_${index}`}>
            <Card className="card h-100">
              <Card.Img src={data.image} className="card-img-top" alt="..." />
              <Card.Body class="mt-auto" id="carddesc">
                <Card.Title>Product Title: {data.title} </Card.Title>
                <Card.Text>Price: ${data.price}</Card.Text>
                <Card.Text>
                  Location: {getLocationName(data.location)}
                </Card.Text>
                <Card.Text>Description: {data.description}</Card.Text>
                <Card.Text>In Stock</Card.Text>
                <Card.Text className="text-center">
                  <Button href="/IndividualProduct" variant="outline-dark">
                    Check it out!
                  </Button>
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
