import React, { Component } from 'react';
import LoginForm from './LoginForm';

class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            loggedIn: false
        }
        this.preventDefaultBehaviorSubmit = this.preventDefaultBehaviorSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
        console.log(response);  
        if(response.length > 0) {
            console.log('inloggning lyckad');
        }
      })
      .catch((error) => {
        console.error(error);
      })
   }

    render(){
        return(
            <div>
                <LoginForm  preventDefaultBehaviorSubmit={this.preventDefaultBehaviorSubmit}
                            handleChange={this.handleChange}/>
            </div>
        )
    }
}

export default Login