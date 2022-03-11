import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import ProfileIcon from '../../../public/profileIcon.png';

import './header.scss';

const Header = () => {
  const [activePage, setActivePage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleLogout = () => {
    localStorage.removeItem('persist:auth');
    window.location.reload(false);
  };

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
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
              <Link to="/profile" className="dropdown-item">
                Profile
              </Link>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#" onClick={handleLogout}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
