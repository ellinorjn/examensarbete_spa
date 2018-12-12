import React, { Component } from 'react';
import '../App.css';
import Booking from './Booking/Booking'
import HomePage from './home/homePage';
import Contact from './contact/contact';
import Packages from './packages/packages';
import Treatments from './Treatments/Treatments';
import Faq from './FAQ/Faq';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


class App extends Component {
 
  render() {
    return (
      <div>
      <Router>
        <div>
            <Route path="/" component={HomePage} exact/>
            <Route path="/Packages" component={Packages} />
            <Route path="/Treatments" component={Treatments} /> 
            <Route path="/Faq" component={Faq} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Booking" component={Booking} />
        </div>
      </Router>

      <div className="App">
       
      </div>
      </div>
    );
  }
}

export default App;