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
import { Card } from 'react-bootstrap';

const Members = () => {
  let { username } = useParams();

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const found = ABOUT_ME_DATA.find((data) => data.name === username);
    setCurrentUser(found);
  }, [username]);

  return (
    <>
      <div className="setHeight">
        <h1 className="hello"> Hello, I am </h1>
        <h1 className="nametitle">{currentUser.fullName || ''}</h1>

        <Card
          style={{ width: '25rem' }}
          id="member_card"
          className="card-center width100"
        >
          <Card.Img
            variant="top"
            id="profile-image"
            src={currentUser.image || ''}
            alt={currentUser.alt}
          />
          <Card.Body>
            <Card.Text className="profiletext">
              {currentUser.desc || ''}
            </Card.Text>

            <br></br>
            <Link
              id="memberbutton"
              to="/About"
              className="btn btn-primary btn-md"
              role="button"
            >
              Go Back
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Members;
