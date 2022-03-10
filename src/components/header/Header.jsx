import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useLocation, useParams } from 'react-router-dom';

import ProfileIcon from '../../../public/profileIcon.png';

import './header.scss';

const Header = () => {
  const [activePage, setActivePage] = useState('');
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/movies':
        setActivePage('Movies');
        break;

      case '/home':
        setActivePage('Home');
        break;

      case '/favourites':
        setActivePage('Favourites');
        break;

      default:
        break;
    }
  }, [location]);

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">myFlix</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Link
              to="/home"
              className={activePage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
            <Link
              to="/movies"
              className={
                activePage === 'Movies' ? 'nav-link active' : 'nav-link'
              }
            >
              Movies
            </Link>
            <Link
              to="/favourites"
              className={
                activePage === 'Favourites' ? 'nav-link active' : 'nav-link'
              }
            >
              Favourites
            </Link>
          </Nav>
          <Nav>
            <NavDropdown
              title={
                <div className="profile-icon-container">
                  <img src={ProfileIcon} alt="dropdown" />
                </div>
              }
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
