import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/Header.css";
import Button from "react-bootstrap/Button";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </NavItem>
        {/*DONE TODO: if the user is logged in, render a navigation link to profile page */}
        {this.props.user && (
          <NavItem>
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
          </NavItem>
        )}
        {/*DONE TODO: if the user is logged in, render the `LogoutButton` */}
        {this.props.user && (
          <Button onClick={this.props.onLogout}>Logout</Button>
        )}
      </Navbar>
    );
  }
}

export default Header;
