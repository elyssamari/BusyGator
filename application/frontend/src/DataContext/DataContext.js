import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

const DataContext = createContext(null);

function DataProvider({ children }) {
  const [listings, setListings] = useState([]);
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);

  return (
    <DataContext.Provider
      value={{
        listings,
        setListings,
        categories,
        setCategories,
        locations,
        setLocations,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const DataConsumer = DataContext.Consumer;

export { DataProvider, DataConsumer };
export default DataContext;
