import React, { useEffect, useContext } from 'react';
import DataContext from '../DataContext/DataContext';
import { getAllListings } from '../services/listingService';
import { getAllLocations } from '../services/locationService';
import { Card, Col, Row, Button } from 'react-bootstrap';

const Home = () => {
  const listings = useContext(DataContext)?.listings;
  const setListings = useContext(DataContext)?.setListings;
  const locations = useContext(DataContext)?.locations;
  const setLocations = useContext(DataContext)?.setLocations;

  useEffect(() => {
    getAllListings().then((data) => {
      setListings(data.data);
    });
  }, [setListings]);

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
      <Row id="cardmargin" xs={2} md={5} className="g-4">
        {listings.map((data, index) => (
          <Col key={`div_${index}`}>
            <Card className="card h-100">
              <Card.Img src={data.image} className="card-img-top" alt="..." />
              <Card.Body class="d-flex flex-column" id="carddesc">
                <Card.Title>Product Title: {data.title} </Card.Title>
                <Card.Text>Price: ${data.price}</Card.Text>
                <Card.Text>
                  Location: {getLocationName(data.location)}
                </Card.Text>
                <Card.Text>Description: {data.description}</Card.Text>
                <Card.Text>In Stock</Card.Text>
                <Card.Text className="text-center">
                  <Button class="mt-auto" href="/" variant="outline-dark">
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
