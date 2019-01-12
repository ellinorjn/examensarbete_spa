import React from 'react';

function Footer(){
    return (
        <div>   
           <footer >  
               <div className="icons">          
              <div id="instagram"><img src={require('../images/instagram.png')} alt="instagram logo" /></div>
              <div id="facebook"><img src={require('../images/facebook.png')} alt="facebook logo" /></div>
              </div>  
            </footer>                       
          </div>  
      )
  }

export default Footer;