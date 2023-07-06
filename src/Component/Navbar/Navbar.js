import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
        <ul>
          <li>
            <Link to="#p1">About me</Link>
            <Link to="#p2">Services</Link>
            <Link to="#p3">Works</Link>
            <Link to="#p4">Contacts</Link>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;