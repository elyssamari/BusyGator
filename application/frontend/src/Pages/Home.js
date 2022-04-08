import React, { useEffect, useContext } from 'react';
import DataContext from '../DataContext/DataContext';
import { getAllListings } from '../services/listingService';
import { getAllLocations } from '../services/locationService';

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
      <div id="cardmargin" className="row row-cols-2 row-cols-md-5 g-3">
        {listings.map((data, index) => (
          <div className="col" key={`div_${index}`}>
            <div className="card h-100">
              <img src={data.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Product Title: {data.title} </h5>
                <p className="card-text">Price: ${data.price}</p>
                <p className="card-text">
                  Location: {getLocationName(data.location)}
                </p>
                <p className="card-text">Description: {data.description}</p>
                <p className="card-text">In Stock</p>
                <div className="card text-center">
                  <a href="/" className="btn btn-primary">
                    Check it out!
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
