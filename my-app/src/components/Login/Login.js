import React, { Component } from 'react';
import LoginForm from './LoginForm';
import BookingCalendar from '../Booking/BookingCalendar';

class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            loggedIn: false,

            name: '',
            phone_number:''
        }
        this.preventDefaultBehaviorSubmit = this.preventDefaultBehaviorSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.personData = this.personData.bind(this);
    }
   
    preventDefaultBehaviorSubmit(e){
        e.preventDefault();
        this.checkIfRegistered();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

   checkIfRegistered(){
       
    let email = this.state.email;
    let password = this.state.password;

    console.log(this.state.email);

    /* Fetch person information based on email and password */ 
    fetch('http://localhost/spa/my-app/database-connections/login.php?email=' + email + '&password=' + password)
    .then((response) => response.json())
    .then((response) => {  
        if(response.information.length > 0) {
            this.setPersonInformation(response)
            console.log('inloggning lyckad');
        }
      })
      .catch((error) => {
        console.error(error);
      })
   }

    setPersonInformation(response){
        console.log(response.information);
        this.setState({
            name: response.information[0].name,
            phone_number: response.information[0].phone_number,
            loggedIn: true
        })
    }

    personData(){
        let data = {
            name: this.state.name,
            email: this.state.name,
            phone_number: this.state.phone_number
        }
        return(data)
    }

    render(){
        return(
            <div>
                <LoginForm  preventDefaultBehaviorSubmit={this.preventDefaultBehaviorSubmit}
                            handleChange={this.handleChange}
                            event={this.props.showRegister}/>
    
            </div>

            
        )
    }
}

export default Login