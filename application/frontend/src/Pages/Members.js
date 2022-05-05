/*
 * FILE: Members.js
 * 
 * AUTHOR(S): Siqi Guo, Vishal Ramanand Sharma, Samantha Saxton-Getty,
 * Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains member's introductions for milestone 1.
 */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ABOUT_ME_DATA } from '../constants';
import { Link } from 'react-router-dom';

const Members = () => {
  let { username } = useParams();

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const found = ABOUT_ME_DATA.find((data) => data.name === username);
    setCurrentUser(found);
  }, [username]);

  return (
    <>
      <h1 className="hello"> Hello, I am </h1>
      <h1 className="nametitle">{currentUser.fullName || ''}</h1>
      <p className="profiletext">{currentUser.desc || ''}</p>
      <img src={currentUser.image || ''} alt={currentUser.alt}></img>
      <br></br>
      <Link
        id="memberbutton"
        to="/About"
        className="btn btn-primary btn-lg"
        role="button"
      >
        go back
      </Link>
    </>
  );
};

export default Members;
