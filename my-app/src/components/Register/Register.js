import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import BookingSummary from '../Booking/BookingSummary';

class Register extends Component{

    constructor(props){
        super(props);
        this.state={
            name: '',
            email: '',
            phone_number: '',
            password: ''
        }
        this.preventDefaultBehaviorSubmit = this.preventDefaultBehaviorSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    preventDefaultBehaviorSubmit(e){
        this.registerUser();
        /** When registered show login field to login */
        this.props.showLogin();
        e.preventDefault();
    }

    registerUser(){
        let personInformation = {
            name: this.state.name,
            email: this.state.email,
            phone_number: this.state.phone_number,
            password: this.state.password
        }

        return fetch('http://localhost/spa/my-app/database-connections/registerUser.php',{
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(personInformation)
        })
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    render(){
        return(
            <div>
                <RegisterForm   preventDefaultBehaviorSubmit={this.preventDefaultBehaviorSubmit}
                                handleChange={this.handleChange} />
                <BookingSummary name={this.state.name}
                                email={this.state.email}
                                phone_number={this.state.phone_number} />
            </div>
        )
    }
}

export default Register