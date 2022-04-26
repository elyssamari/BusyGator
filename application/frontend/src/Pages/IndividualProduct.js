/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains the information about individual products and messaging the seller.
 */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const IndividualProduct = () => {
  return (
    <>
      <Card id="product_card" className="card-center">
        <Card.Img variant="top" src="images/1_laptop.jpeg" />
        <Card.Body>
          <Card.Title>Product Title: Laptop</Card.Title>
          <br></br>
          <Card.Text>Price: $200</Card.Text>
          <Card.Text>Location: Parking Garage</Card.Text>
          <Card.Text>Description: Laptop</Card.Text>
          <Card.Text>In Stock</Card.Text>
        </Card.Body>
        <Link to="/Messages" className="text-center">
          <Button id="product_detail_button" variant="primary">
            Message Seller
          </Button>
        </Link>

        <Card.Text id="product_text" className="text-center">
          {`Not Logged In?`}
          <span className="space"></span>
          <Link to="/Login">Login Here</Link> or
          <span className="space"></span>
          <Link to="/Signup"> Sign up Here</Link>
        </Card.Text>
      </Card>
    </>
  );
};

export default IndividualProduct;
