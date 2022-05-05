/*
 * FILE: M1NavBar.js
 *
 * AUTHOR(S): Siqi Guo, Vishal Ramanand Sharma, Samantha Saxton-Getty,
 * Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains the NavBar for milestone 1.
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
