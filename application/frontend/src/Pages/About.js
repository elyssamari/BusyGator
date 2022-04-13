/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains information about the team.
 */
import React from 'react';

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
        <a className="name1" href="/about/Aaron">
          Aaron Carlson
          <p className="title">Back-End Lead</p>{' '}
        </a>

        <a className="name1" href="/about/Abdullah">
          Abdullah Sharaf
          <p className="title">Front-End</p>{' '}
        </a>

        <a className="name1" href="/about/Elyssa">
          Elyssa Mari Tapawan
          <p className="title">Front-End Lead</p>{' '}
        </a>

        <a className="name1" href="/about/Janvi">
          Janvi Patel
          <p className="title">Back-End</p>{' '}
        </a>

        <a className="name1" href="/about/Samantha">
          Samantha Saxton-Getty
          <p className="title">Team Lead</p>{' '}
        </a>

        <a className="name1" href="/about/Siqi">
          Siqi Guo
          <p className="title">Front-End</p>{' '}
        </a>

        <a className="name1" href="/about/Vishal">
          Vishal Ramanand Sharma
          <p className="title">Github Lead</p>
        </a>
      </div>
    </>
  );
};

export default About;