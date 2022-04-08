/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains the Navbar with the search functionality
 */

import React, { useEffect, useState, useContext } from 'react';
import {
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl,
  Button,
} from 'react-bootstrap';
import DataContext from '../DataContext/DataContext';
import { getAllCategories } from '../services/categoryService';
import { getAllListings, getListingByFilter } from '../services/listingService';

const NavBar = () => {
  const categories = useContext(DataContext)?.categories;
  const setCategories = useContext(DataContext)?.setCategories;
  const setListings = useContext(DataContext)?.setListings;

  const [searchParams, setSearchParams] = useState({
    categoryId: null,
    searchText: null,
  });
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
    if (searchParams.categoryId || searchParams.searchText) {
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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            BusyGator
          </a>

          <div className="collapse navbar-collapse">
            <form className="d-flex" onSubmit={onFormSubmit}>
              <InputGroup className="mb-3">
                <DropdownButton
                  variant="outline-secondary"
                  title={returnTitle()}
                  id="input-group-dropdown-1"
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
              <Button variant="light" onClick={search} type="submit">
                Search
              </Button>
            </form>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  id="navlink"
                  className="nav-link active"
                  aria-current="page"
                  href="/Login"
                >
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a
                  id="navlink"
                  className="nav-link active"
                  aria-current="page"
                  href="/Signup"
                >
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a
                  id="navlink"
                  className="nav-link active"
                  aria-current="page"
                  href="/Post"
                >
                  Post
                </a>
              </li>
              <li className="nav-item">
                <a
                  id="navlink"
                  className="nav-link active"
                  aria-current="page"
                  href="/Listings"
                >
                  Listings
                </a>
              </li>
              <li className="nav-item">
                <a
                  id="navlink"
                  className="nav-link active"
                  aria-current="page"
                  href="/Orders"
                >
                  Orders
                </a>
              </li>
              <li className="nav-item">
                <a
                  id="navlink"
                  className="nav-link active"
                  aria-current="page"
                  href="/Cart"
                >
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
