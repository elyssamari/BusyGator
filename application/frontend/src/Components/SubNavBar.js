import React, { useContext } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import DataContext from '../DataContext/DataContext';

const SubNavBar = () => {
  const categories = useContext(DataContext)?.categories;
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
