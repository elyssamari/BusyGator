/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <ul className="nav">
        <li className="navtext">
          <Link to="/"> Home Page</Link>
        </li>
        <li className="navtext">
          <Link to="/about"> About Page</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
