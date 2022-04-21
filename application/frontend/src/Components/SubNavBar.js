/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains the Navbar that navigates through the categories.
 */
import React, { useContext } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import DataContext from '../DataContext/DataContext';

const SubNavBar = () => {
  const categories = useContext(DataContext)?.categories;
  const setSearchParams = useContext(DataContext)?.setSearchParams;
  const searchParams = useContext(DataContext)?.searchParams;

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
    </>
  );
};

export default SubNavBar;
