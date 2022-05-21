/*
 * FILE: M2NavBar.js
 *
 * AUTHOR(S): Aaron Carlson, Siqi Guo, Janvi Patel, Vishal Ramanand Sharma,
 * Abdullah Sharaf, Samantha Saxton-Getty, Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the Navbar with the search fuctionality and
 * links to navigate through our application.
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
  Card,
} from 'react-bootstrap';
import DataContext from '../DataContext/DataContext';
import { Link, useNavigate } from 'react-router-dom';
import { toastError, toastSuccess } from '../ToastService';
import { getAllCategories } from '../services/categoryService';
import { getAllListings, getListingByFilter } from '../services/listingService';
import { getAllLocations } from '../services/locationService';

const NavBar = () => {
  const userInfo = useContext(DataContext)?.userInfo;
  const setUserInfo = useContext(DataContext)?.setUserInfo;
  const categories = useContext(DataContext)?.categories;
  const setCategories = useContext(DataContext)?.setCategories;
  const setListings = useContext(DataContext)?.setListings;
  const setSearchParams = useContext(DataContext)?.setSearchParams;
  const searchParams = useContext(DataContext)?.searchParams;
  const sortAsc = useContext(DataContext)?.sortAsc;
  const setTotalCount = useContext(DataContext)?.setTotalCount;
  const setLocations = useContext(DataContext)?.setLocations;

  const navigate = useNavigate();
  let invalidStatus = false;
  let errorMessage = [];

  // logout the user
  function handleLogout() {
    try {
      setUserInfo({
        email: null,
        firstName: null,
        lastName: null,
        userId: null,
      });
      toastSuccess('Logout Successful');
    } catch(error) {
      toastError(error.message);
    }
  }

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

  useEffect(() => {
    getAllLocations().then((data) => {
      setLocations(data.data);
    });
  }, [setLocations]);

  function search() {
    // On Click of search button we need to call /getAllListings to get listing
    if (
      searchParams.categoryId ||
      searchParams.searchText ||
      searchParams.min !== null ||
      searchParams.max !== null
    ) {
      getListingByFilter(searchParams).then((data) => {
        if (!invalidStatus) {
          const { results, totalCount } = data.data;
          setTotalCount(totalCount);
          setListings(sortData(results));
        }
      });
    } else {
      getAllListings().then((data) => {
        const { results, totalCount } = data.data;
        setTotalCount(totalCount);
        setListings(sortData(results));
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

  function searchIsInvalid() {
    // Searches are rejected if they are not alphanumeric or are over 40 characters in length
    if (!searchParams.searchText) return;

    let alphanumeric = /^[a-zA-Z0-9]+$/;

    if (!searchParams.searchText.match(alphanumeric)) {
      errorMessage.push('Search text must be alphanumeric.');
      invalidStatus = true;
    }

    if (searchParams.searchText.length > 40) {
      errorMessage.push(
        'Search text length ' +
          searchParams.searchText.length +
          ' is too long. Please keep searches up to 40 alphanumeric characters in length.'
      );
      invalidStatus = true;
    }

    return invalidStatus;
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    search();
  };

  const sortData = (data) => {
    if (sortAsc !== null) {
      const arr = data.sort((a, b) => {
        if (sortAsc) return a.price - b.price;
        else return b.price - a.price;
      });
      return arr;
    } else return data;
  };

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortAsc]);

  const resetResults=()=>{
    setSearchParams({
    categoryId: null,
    searchText: "",
    minPrice: null,
    maxPrice: null,
    });
    getAllListings().then((data) => {
      const { results, totalCount } = data.data;
      setTotalCount(totalCount);
      setListings(sortData(results));
    });
    navigate('/');
  }

  return (
    <>
      <Card id="navTextCard" bg="dark" variant="dark">
        <Card.Header id="navText">
          <p>
            SFSU Software Engineering Project CSC 648-848, Spring 2022. For
            Demonstration Only.
          </p>
        </Card.Header>
      </Card>
      <Navbar bg="dark" className="flexWrap" variant="dark">
        <button
          onClick={() => resetResults()}
          style={{ backgroundColor: 'transparent', border: 'none' }}
        >
          <Navbar.Brand id="logo">
            <img
              alt=""
              src="./BusyGatorLogo.png"
              width="140px"
              height="60px"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </button>
        <Form className="d-flex formFlex" onSubmit={onFormSubmit}>
          <InputGroup hasValidation className="flex-nowrap">
            <DropdownButton
              id="input-group-dropdown-1"
              variant="secondary"
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
              isInvalid={searchIsInvalid()}
              onChange={(e) =>
                setSearchParams({
                  ...searchParams,
                  searchText: e.target.value,
                })
              }
            />
            <Form.Control.Feedback type="invalid" tooltip={true}>
              {errorMessage.join('\r\n')}
            </Form.Control.Feedback>
          </InputGroup>
          <Button
            id="searchbutton"
            variant="light"
            onClick={() => navigate('/')}
            type="submit"
          >
            Search
          </Button>
        </Form>
        <div className="collapse navbar-collapse">
          <Link id="navlink" className="nav-link" to="/Post">
            Post
          </Link>
          <Link id="navlink" className="nav-link" to="/MyPage">
            My Page
          </Link>
          <Link id="navlink" className="nav-link" to="/About">
            About Us
          </Link>
          {(userInfo.userId && (
            <Link id="navlink" className="nav-link" to="/Login" onClick={handleLogout}>
              Logout
            </Link>
          )) ||
          <Link id="navlink" className="nav-link" to="/Login">
            Login / Signup
          </Link>}
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
