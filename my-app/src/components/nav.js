import React from 'react';
import {
  Link
} from 'react-router-dom';

import BurgerMenu from './HamburgerMenu';

function Nav(){
    return (
        <div>   
           <nav className="nav">            
              <ul>
                <Link to="/">HEM</Link>
                |
                <Link to="/Treatments">BEHANDLINGAR</Link>
                |
                <Link to="/Faq">FAQ</Link>
                |
                <Link to="/Contact">KONTAKTA OSS</Link>
                |
                <Link to="/Booking">BOKA</Link>
              </ul>    

              <BurgerMenu />    
            </nav>                       
          </div>  
      )
  }

export default Nav;