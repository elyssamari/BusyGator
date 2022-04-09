/**
 * COPYRIGHT San Francisco State University SCS648 Team 4 - SP22
 *
 *
 *
 * This File contains Global footer for the application
 */

import React from 'react';
import { ModalFooter, ModalBody } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <ModalFooter id="footer">
        <ModalBody>
          <p id="footertext">
            SFSU Software Engineering Project CSC 648-848, Spring 2022. For
            Demonstration Only.
          </p>
          <p id="footertext">
            Software Engineering Class SFSU Spring 2022 Section 3 - Team 4
          </p>
        </ModalBody>
      </ModalFooter>
    </>
  );
};

export default Footer;
