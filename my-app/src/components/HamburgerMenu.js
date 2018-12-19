import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import {
    Link
  } from 'react-router-dom';

class BurgerMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu>
        <Link to="/">HEM</Link>
        <Link to="/Treatments">BEHANDLINGAR</Link>
        <Link to="/Faq">FAQ</Link>
        <Link to="/Contact">KONTAKTA OSS</Link>
        <Link to="/Booking">BOKA</Link>
        <a onClick={this.showSettings} className="menu-item--small" href="">
          Settings
        </a>
      </Menu>
    );
  }
}

export default BurgerMenu;
