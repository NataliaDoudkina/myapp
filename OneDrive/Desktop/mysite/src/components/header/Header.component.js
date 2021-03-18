import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/NavItem";
import Nav from "react-bootstrap/Nav";
import "./header.styles.scss";
import logo from "./logoComp.png";

const Header = () => {
  return (
    <header>
      <Navbar className="menu" expand="lg">
        <Navbar.Brand href="/">
          <img src={logo} alt="my logo" height="50" width="80" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <NavItem>
            <Nav.Link>
              <NavLink
                to="/"
                activeClassName="is-Active"
                className="menuItem"
                exact={true}
              >
                Home
              </NavLink>
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link>
              <NavLink
                to="/projects"
                activeClassName="is-Active"
                className="menuItem"
              >
                Projects
              </NavLink>
            </Nav.Link>
          </NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
