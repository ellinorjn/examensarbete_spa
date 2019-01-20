import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

class BurgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu right>
        <Link to="/">HEM</Link>
        <Link to="/Treatments">BEHANDLINGAR</Link>
        <Link to="/Booking">BOKA</Link>
        <Link to="/Faq">FAQ</Link>
        <Link to="/Contact">KONTAKTA OSS</Link>
        <Link to="/LoginPage">LOGGA IN</Link>
      </Menu>
    );
  }
}

export default BurgerMenu;
