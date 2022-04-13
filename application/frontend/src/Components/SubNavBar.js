import React, { useContext } from 'react';
import {
  Navbar,
  Container,
  Nav,
  Button,
  FormControl,
  InputGroup,
} from 'react-bootstrap';
import DataContext from '../DataContext/DataContext';
import { getAllListings, getListingByFilter } from '../services/listingService';

const SubNavBar = () => {
  const categories = useContext(DataContext)?.categories;
  const setListings = useContext(DataContext)?.setListings;
  const setSearchParams = useContext(DataContext)?.setSearchParams;
  const searchParams = useContext(DataContext)?.searchParams;

  function onGoClick(search) {
    const { categoryId, searchText, min, max } = search;
    if (
      (categoryId && categoryId.length) ||
      (searchText && searchText.length) ||
      min !== null ||
      max !== null
    ) {
      getListingByFilter(search).then((data) => {
        setListings(data.data);
      });
    } else {
      getAllListings().then((data) => {
        setListings(data.data);
      });
    }
  }
  function onClearClick() {
    setSearchParams({ ...searchParams, max: null, min: null });
    onGoClick({ ...searchParams, max: null, min: null });
  }

  return (
    <>
      <Navbar id="subnavbar" variant="light">
        <Container>
          <Nav className="me-auto">
            {categories.map((data, index) => (
              <Button
                key={index}
                variant="outline-light"
                className="subNavBarButton"
                onClick={() => {
                  setSearchParams({
                    ...searchParams,
                    categoryId: data.category_id || '',
                  });
                }}
              >
                {data.name}
              </Button>
            ))}
          </Nav>
        </Container>
      </Navbar>
      <Navbar id="subnavbar" variant="light">
        <Container>
          <Nav className="me-auto">
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl
                placeholder="Min"
                className="maxWidth100"
                type="number"
                value={searchParams.min || ''}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    min: e.target.value,
                  })
                }
              />
            </InputGroup>
            <InputGroup className="ml-4">
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl
                placeholder="Max"
                className="maxWidth100"
                type="number"
                value={searchParams.max || ''}
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    max: e.target.value,
                  })
                }
              />
            </InputGroup>
            <Button className="ml-4" onClick={() => onGoClick(searchParams)}>
              Go
            </Button>
            <Button className="ml-4" onClick={() => onClearClick()}>
              Clear
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default SubNavBar;
