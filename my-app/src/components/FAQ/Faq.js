import React from 'react';
import Nav from '../nav';
import Questions from './Questions';

/* Displays the complete contact page */
function Faq (){
	return (
	    <div>
			 <div id="header-faq">
          <Nav />
        </div>
		<div id="faq-view">
	       <h1>VANLIGA FRÅGOR</h1>
		   <Questions />   
	    </div>
		</div>
	);
};

export default Faq;