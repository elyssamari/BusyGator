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
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const categories = useContext(DataContext)?.categories;
  const setCategories = useContext(DataContext)?.setCategories;
  const setListings = useContext(DataContext)?.setListings;
  const setSearchParams = useContext(DataContext)?.setSearchParams;
  const searchParams = useContext(DataContext)?.searchParams;
  const sortAsc = useContext(DataContext)?.sortAsc;
  const setTotalCount = useContext(DataContext)?.setTotalCount;

  const navigate = useNavigate();
  let invalidStatus = false;
  let errorMessage = [];

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

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand id="logo">
            <img
              alt=""
              src="./BusyGatorLogo.png"
              width="140px"
              height="60px"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Link>
        <div className="collapse navbar-collapse">
          <Form className="d-flex" onSubmit={onFormSubmit}>
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

          <Link id="navlink" className="nav-link" to="/Post">
            Post
          </Link>
          <Link id="navlink" className="nav-link" to="/MyPage">
            My Page
          </Link>
          <Link id="navlink" className="nav-link" to="/Login">
            Login
          </Link>
          <Link id="navlink" className="nav-link" to="/About">
            About Us
          </Link>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
