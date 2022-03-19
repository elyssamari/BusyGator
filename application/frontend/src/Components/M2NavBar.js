import { useEffect, useState, useContext } from 'react';
import { InputGroup, DropdownButton, Dropdown, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';
import DataContext from '../DataContext/DataContext';

const NavBar = () => {


    // const [categories, setCategories] = useState([]);
    const categories = useContext(DataContext)?.categories;
    const setCategories = useContext(DataContext)?.setCategories;
    const setListings = useContext(DataContext)?.setListings;

    const [searchParams, setSearchParams] = useState({ categoryId: "", searchText: "" });
    useEffect(() => {
        axios.get("/getAllCategories").then(data => {
            setCategories(data.data);
        })
    }, [setCategories]);

    function search() {
        axios.get('/getListing', { params: searchParams }).then(data => {
            setListings(data.data);
        });
    }

    function returnTitle() {
        if (searchParams.categoryId === "") return "All";
        else {
            const found = categories.find(data => data.category_id === searchParams.categoryId)
            if (found) return found.name;
            else return "All";
        }
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">BusyGator</a>

                    <div className="collapse navbar-collapse">
                        <form className="d-flex">
                            <InputGroup className="mb-3">
                                <DropdownButton
                                    variant="outline-secondary"
                                    title={returnTitle()}
                                    id="input-group-dropdown-1"
                                >
                                    {categories && categories.map((category, index) => <Dropdown.Item key={index} onClick={() => setSearchParams({ ...searchParams, categoryId: category.category_id })}>{category.name}</Dropdown.Item>)}
                                </DropdownButton>
                                <FormControl aria-label="Text input with dropdown button" placeholder='Search' onChange={(e) => setSearchParams({ ...searchParams, searchText: e.target.value })} />
                            </InputGroup>
                            {/* <input id="searchbar" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                            <Button variant="light" onClick={search}>Search</Button>
                            {/* <button id="searchbutton" className="btn btn-outline-success" >Search</button> */}
                        </form>

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a id="navlink" className="nav-link active" aria-current="page" href="/Login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a id="navlink" className="nav-link active" aria-current="page" href="/Signup">Sign Up</a>
                            </li>
                            <li className="nav-item">
                                <a id="navlink" className="nav-link active" aria-current="page" href="/Post">Post</a>
                            </li>
                            <li className="nav-item">
                                <a id="navlink" className="nav-link active" aria-current="page" href="/Listings">Listings</a>
                            </li>
                            <li className="nav-item">
                                <a id="navlink" className="nav-link active" aria-current="page" href="/Orders">Orders</a>
                            </li>
                            <li className="nav-item">
                                <a id="navlink" className="nav-link active" aria-current="page" href="/Cart">Cart</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;

