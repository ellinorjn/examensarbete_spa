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
                <Link to="/Booking">BOKA</Link>
                |
                <Link to="/Faq">FAQ</Link>
                |
                <Link to="/Contact">KONTAKTA OSS</Link>
                |
                <Link to="/LoginPage">LOGGA IN</Link>
                
              </ul>        
            </nav>  
            <BurgerMenu />                     
          </div>  
      )
  }

export default Nav;