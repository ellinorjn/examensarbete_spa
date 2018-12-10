import React, { Component } from 'react';
import LoginForm from './LoginForm';
import BookingCalendar from '../Booking/BookingCalendar';
import ButtonNewUser from './ButtonNewUser';

class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            loggedIn: false,

            person_id:'',
            name: '',
            phone_number:'',

            showBookingCalendar: false,
            showBookButton: false
            
        }

        this.preventDefaultBehaviorSubmit = this.preventDefaultBehaviorSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
        this.hideLogin = this.hideLogin.bind(this);
        this.showBookButton = this.showBookButton.bind(this);
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

    /* Fetch person information based on email and password */ 
    fetch('http://localhost/spa/my-app/database-connections/login.php?email=' + email + '&password=' + password)
    .then((response) => response.json())
    .then((response) => {  
        if(response.information.length > 0) {
            this.setPersonInformation(response)
            this.hideLogin()
            alert('Du har nu 5% rabatt på hela din bokning, rabatten avdrages vid betalning på plats')
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
            person_id: response.information[0].ID,
            loggedIn: true
        })
    }


    showBookButton(){
        this.setState({
          showBookButton: true
        })
    }

    hideLogin(){
            let loginForm = document.getElementById('login-form');
            let buttonNewUser = document.getElementById('button-new-user');
            loginForm.style.display = 'none';
            buttonNewUser.style.display = 'none';
            
            this.setState({
                showBookingCalendar: true,
            })
    }

    render(){
        return(
            <div>
                <LoginForm  preventDefaultBehaviorSubmit={this.preventDefaultBehaviorSubmit}
                            handleChange={this.handleChange}
                            event={this.showBookButton}/>
                
                <ButtonNewUser event={this.props.showRegister} />

                {this.state.showBookingCalendar && <BookingCalendar theId={this.state.person_id} />}
            </div>

            
        )
    }
}

export default Login