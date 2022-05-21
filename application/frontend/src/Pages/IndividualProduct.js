/*
 * FILE: IndividualProduct.js
 *
 * AUTHOR(S): Aaron Carlson, Siqi Guo, Vishal Ramanand Sharma,
 * Samantha Saxton-Getty, Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the information about individual products and messaging the seller.
 */

import React, { useEffect, useContext, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import DataContext from '../DataContext/DataContext';
import { getUserById } from '../services/userService';
import { getListingById } from '../services/listingService';

const IndividualProduct = () => {
  const locations = useContext(DataContext)?.locations;
  const [listing, setListing] = useState({});
  const [sellerName, setSellerName] = useState('');

  function getDateString(date) {
    return new Date(date).toDateString();
  }

  function getLocationName(locationNumber) {
    return (
      locations.find((data) => data.location_id === locationNumber)?.name || ''
    );
  }

  function getUserName(sellerId) {
    getUserById(sellerId).then((data) => {
      setSellerName(data.data.first_name + ' ' + data.data.last_name);
    });
  }

  let productId = useParams().productId;
  useEffect(() => {
    getListingById(productId).then((data) => {
      setListing(data.data);
      getUserName(data.data.seller_id);
    });
  }, []);

  return (
    <>
      <Card id="product_card" className="card-center">
        <Card.Img variant="top" src={listing.image} />
        <Card.Body>
          <Card.Title>Product Title: {listing.title}</Card.Title>
          <br></br>
          <Card.Text>Price: ${listing.price}</Card.Text>
          <Card.Text>Location: {getLocationName(listing.location)}</Card.Text>
          <Card.Text id="map-link">
            {`Don't know where the location is?`}
            <span className="space"></span>
            <Link to="/Map">Map</Link>
          </Card.Text>
          <Card.Text>Description: {listing.description}</Card.Text>
          <Card.Text>Seller: {sellerName}</Card.Text>
          <Card.Text>
            Date Listed: {getDateString(listing.date_created)}
          </Card.Text>
          <Card.Text id="in-stock">In Stock</Card.Text>
          <Card.Text className="text-center">
            <Link to={`/Message/${listing.product_id}`}>
              <Button id="product_detail_button" variant="primary">
                Message Seller
              </Button>
            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default IndividualProduct;
