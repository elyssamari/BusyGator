/*
 * FILE: About.js
 *
 * AUTHOR(S): Siqi Guo, Vishal Ramanand Sharma, Samantha Saxton-Getty,
 * Elyssa Mari Tapawan
 *
 * PURPOSE: This file contains information about the team.
 */

import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className="homeheader">
        <h1 className="about"> About the team. </h1>
        <h2 className="about">
          {' '}
          Software Engineering Class SFSU Spring 2022 Section 3 - Team 4{' '}
        </h2>
      </div>

      <div className="namelink">
        <Link className="name1" to="/about/Aaron">
          Aaron Carlson
          <p className="title">Back-End Lead</p>{' '}
        </Link>

        <Link className="name1" to="/about/Abdullah">
          Abdullah Sharaf
          <p className="title">Front-End</p>{' '}
        </Link>

        <Link className="name1" to="/about/Elyssa">
          Elyssa Mari Tapawan
          <p className="title">Front-End Lead</p>{' '}
        </Link>

        <Link className="name1" to="/about/Janvi">
          Janvi Patel
          <p className="title">Back-End</p>{' '}
        </Link>

        <Link className="name1" to="/about/Samantha">
          Samantha Saxton-Getty
          <p className="title">Team Lead</p>{' '}
        </Link>

        <Link className="name1" to="/about/Siqi">
          Siqi Guo
          <p className="title">Front-End</p>{' '}
        </Link>

        <Link className="name1" to="/about/Vishal">
          Vishal Ramanand Sharma
          <p className="title">Github Lead</p>
        </Link>
      </div>
    </>
  );
};

export default About;
