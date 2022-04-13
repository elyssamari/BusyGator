/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains the Navbar with the search fuctionality and links to navigate through our application.
 */
import React, { useEffect, useContext } from 'react';
import {
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl,
  Button,
  Navbar,
  Form,
} from 'react-bootstrap';
import DataContext from '../DataContext/DataContext';
import { getAllCategories } from '../services/categoryService';
import { getAllListings, getListingByFilter } from '../services/listingService';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const categories = useContext(DataContext)?.categories;
  const setCategories = useContext(DataContext)?.setCategories;
  const setListings = useContext(DataContext)?.setListings;
  const setSearchParams = useContext(DataContext)?.setSearchParams;
  const searchParams = useContext(DataContext)?.searchParams;

  useEffect(() => {
    // This will set the categories to search from once it has been set
    getAllCategories().then((data) => {
      setCategories([
        ...data.data,
        {
          category_id: null,
          description: 'All',
          name: 'All',
        },
      ]);
    });
  }, [setCategories]);

  function search() {
    // On Click of search button we need to call /getAllListings to get listing
    if (
      searchParams.categoryId ||
      searchParams.searchText ||
      searchParams.min !== null ||
      searchParams.max !== null
    ) {
      getListingByFilter(searchParams).then((data) => {
        setListings(data.data);
      });
    } else {
      getAllListings().then((data) => {
        setListings(data.data);
      });
    }
  }

  function returnTitle() {
    if (searchParams.categoryId === '') return 'All';
    else {
      const found = categories.find(
        (data) => data.category_id === searchParams.categoryId
      );
      if (found) return found.name;
      else return 'All';
    }
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    search();
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand id="logo" href="/">
          <img
            alt=""
            src="./BusyGatorLogo.PNG"
            width="140px"
            height="60px"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <div className="collapse navbar-collapse">
          <Form className="d-flex" onSubmit={onFormSubmit}>
            <InputGroup className="flex-nowrap">
              <DropdownButton
                id="input-group-dropdown-1"
                variant="outline-secondary"
                title={returnTitle()}
              >
                {categories &&
                  categories.map((category, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() =>
                        setSearchParams({
                          ...searchParams,
                          categoryId: category.category_id || '',
                        })
                      }
                    >
                      {category.name}
                    </Dropdown.Item>
                  ))}
              </DropdownButton>
              <FormControl
                id="searchbar"
                aria-label="Text input with dropdown button"
                placeholder="Search"
                onChange={(e) =>
                  setSearchParams({
                    ...searchParams,
                    searchText: e.target.value,
                  })
                }
              />
            </InputGroup>
            <Button
              id="searchbutton"
              variant="light"
              onClick={search}
              type="submit"
            >
              Search
            </Button>
          </Form>

          <Link id="navlink" className="nav-link" to="/Post">
            Post
          </Link>
          <Link id="navlink" className="nav-link" to="/MyPage">
            My Page
          </Link>
          <Link id="navlink" className="nav-link" to="/Messages">
            Messages
          </Link>
          <Link id="navlink" className="nav-link" to="/Cart">
            Cart
          </Link>
          <Link id="navlink" className="nav-link" to="/Login">
            Login
          </Link>
          <Link id="navlink" className="nav-link" to="/Signup">
            Sign Up
          </Link>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
