import React from 'react';
import {
  Link
} from 'react-router-dom';

function Nav(){
    return (
        <div>   
           <nav>            
              <ul>
                <Link to="/">HOME</Link>
                <Link to="/Packages">Paket</Link>
                <Link to="/Treatments">Behandlingar</Link>
                <Link to="/Faq">FAQ</Link>
                <Link to="/Contact">Kontakta oss</Link>
                <Link to="/Booking">Boka</Link>
              </ul>        
            </nav>                       
          </div>  
      )
  }

export default Nav;